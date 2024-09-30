'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Dropdown from './Dropdown';
import products from '@/data/productList';
import locales from '@/locales';
import Link from 'next/link';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { usePathname, useSearchParams } from 'next/navigation';


function Detail({ itemData, parentData, type, locale }) {
  const searchParams = useSearchParams()
  const category = searchParams.get('category')

  // if (itemData === undefined) {
  //   return <div>Loading...</div>
  // }

  const currentLocale = locales[locale]
  const [isAscharge, setIsAscharge] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('dc-arac-sarj-sistemi');
  const { Title, body, Banner, Images, BodyImages, DataSheet, Type } = itemData.attributes;
  const imageURL = `${process.env.NEXT_PUBLIC_IMAGE_URL}${Banner?.data?.attributes?.url}`;

  const pathname = usePathname();

  useEffect(() => {
    let locationArray = pathname.split('/')
    locationArray = locationArray.filter((item) => item !== '');

    if (locationArray[0] === 'ascharge' || locationArray[1] === 'ascharge') {
      setIsAscharge(true)
    }

    if (category) {
      setSelectedCategory(category)
    }
  }, [])

  return (
    <div>
      <div className="flex flex-col md:flex-row items-start justify-start px-4 md:px-4 lg:px-8 xl:px-20 py-20 gap-8">
        {type !== 'blog' && <div className="w-full md:w-[calc(33%)] 2xl:max-w-[calc(22%-2rem)] overflow-hidden rounded-xl cursor-pointer">
          <Dropdown isAscharge={isAscharge} data={
            products.map(category => ({
              ...category,
              items: parentData.filter(product => product.attributes.Type === category.id).map(item => ({
                id: item.attributes.slug,
                titleTR: item.attributes.Title,
                titleEN: item.attributes.Title
              }))
            }))
          } selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} locale={locale} isDetail />
        </div>}
        <div className="flex flex-col h-fit w-full md:w-[calc(66%)] items-start mx-auto max-w-[70rem]">
          <h2 className="text-2xl md:text-5xl sans w-2/3">{Title}</h2>
          <div className="mt-10 mb-20">
            <BlocksRenderer
              blocks={{
                paragraph: ({ children }) => <p className="text-xl font-base mb-4 text-[#005770]">{children}</p>
              }}
              content={body} />
            {BodyImages?.data?.map((image, index) => (
              <Image key={index} width={1000} height={800} src={ `${process.env.NEXT_PUBLIC_IMAGE_URL}${image.attributes.url}`} alt={Title} className="w-full h-auto mt-10 rounded-xl" />
            ))}
            {
              DataSheet.data ? <Link target="_blank" rel="noopener noreferrer" href={`${process.env.NEXT_PUBLIC_IMAGE_URL}${DataSheet.data?.attributes?.url}`} className="transition-all tab-selector flex bg-sky-300 hover:bg-sky-200 p-2 px-12 rounded-full w-fit mt-10">
                <h2 className="text-lg xl:text-2xl text-white mb-1 ">{currentLocale.details} {}</h2>
              </Link> : null
            }
            <div className="flex flex-wrap gap-4">
              <Image width={1000} height={800} src={imageURL} alt={Title} className="w-full md:w-[calc(33%-.60rem)] h-auto mt-10 rounded-xl" />
              {Images?.data?.map((image, index) =>
              (
                <Image key={index} width={1000} height={800} src={image} alt={Title} className="w-full md:w-[calc(33%-.60rem)] h-auto mt-10 rounded-xl" />
              )
              )}
            </div>
            {
              (type !== 'blog' && !isAscharge && (Type === 'dc-arac-sarj-sistemi' || Type === 'ac-arac-sarj-sistemi' || Type === 'mobil-sarj-sistemi')) ?
                <Link href="/ascharge" className="transition-all tab-selector flex bg-[#f9b01a] hover:bg-[#ffcb60] p-2 px-12 rounded-full w-fit my-10">
                  <h2 className="text-lg xl:text-2xl text-white mb-1 ">              {currentLocale.visitAscharge}</h2>
                </Link>
                : null
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail