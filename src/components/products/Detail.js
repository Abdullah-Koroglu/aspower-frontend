'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Dropdown from './Dropdown';
import products from '@/data/productList';
import locales from '@/locales';
import Link from 'next/link';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';


function Detail({ itemData, type, locale }) {
  if (itemData === undefined) {
    return <div>Loading...</div>
  }

  const currentLocale = locales[locale]
  const [isAscharge, setIsAscharge] = useState(false)
  const [data, setData] = useState(products)
  const [selectedCategory, setSelectedCategory] = useState('dc-arac-sarj-sistemi');
  const { Title, body, banner, images } = itemData.attributes;
  const imageURL = `${process.env.NEXT_PUBLIC_API_URL}${banner?.data?.attributes?.url}`;

  console.log({Title, body, banner});
  

  useEffect(() => {
    const router = window?.location;
    const location = router.href.replace(router.origin, '');
    const hash = window.location.hash

    let locationArray = location.split('/')
    locationArray = locationArray.filter((item) => item !== '');

    if (locationArray[0] === 'ascharge' || locationArray[1] === 'ascharge') {
      setIsAscharge(true)
    }

    if (hash) {
      setSelectedCategory(hash.replace('#', ''))
    }
  }, [])


  return (
    <div className="flex flex-col md:flex-row items-start justify-start px-4 md:px-20 py-20 gap-8">
      {type !== 'blog' && <div className="w-full md:w-[calc(33%)] md:max-w-[calc(22%-2rem)] overflow-hidden rounded-xl cursor-pointer">
        <Dropdown data={data} setData={setData} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} locale={locale} isDetail/>
      </div>}
      <div className="flex flex-col h-fit items-start mx-auto max-w-[70rem]">
        <h2 className="text-2xl md:text-5xl sans w-2/3">{Title}</h2>
        <div className="mt-10 mb-20">
          <BlocksRenderer
            blocks={{
              paragraph: ({ children }) => <p className="text-xl font-base mb-4 text-[#005770]">{children}</p>
            }}
          content={body} />
          <div className="flex flex-wrap gap-4">
            {images?.map((image, index) =>
            (
              <Image key={index} width={3000} height={2000} src={image} alt={Title} className="w-full md:w-[calc(33%-.60rem)] h-auto mt-10" />
            )
            )}

            <Image width={3000} height={2000} src={imageURL} alt={Title} className="w-full md:w-[calc(33%-.60rem)] h-auto mt-10" />
          </div>
        </div>
      </div>
      {
        (type !== 'blog' && !isAscharge && (selectedCategory === 'dc-arac-sarj-sistemi' || selectedCategory === 'ac-arac-sarj-sistemi')) ?
          <Link href="/ascharge" className="transition-all tab-selector flex bg-sky-300 hover:bg-sky-200 p-2 px-12 rounded-full w-fit ml-auto mr-auto mb-10">
            <h2 className="text-lg xl:text-2xl text-white mb-1 ">              {currentLocale.visitAscharge}</h2>
          </Link>
          : null
      }
    </div>
  )
}

export default Detail