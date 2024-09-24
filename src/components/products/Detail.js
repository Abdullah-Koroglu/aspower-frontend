'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Dropdown from './Dropdown';
import products from '@/data/productList';
import locales from '@/locales';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { handleBody } from '../helper';


function Detail({ itemData, type, locale }) {
  const searchParams = useSearchParams()
  const category = searchParams.get('category')

  const currentLocale = locales[locale]
  const [isAscharge, setIsAscharge] = useState(false)
  const [data, setData] = useState(products)
  const [selectedCategory, setSelectedCategory] = useState('dc-arac-sarj-sistemi');
  const { titleTR, titleEN, bodyTR, bodyEN, images } = itemData;
  const pathname = usePathname();

  const body = locale === 'tr' ? bodyTR : bodyEN;

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
          <Dropdown data={data} setData={setData} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} locale={locale} isDetail />
        </div>}
        <div className="flex flex-col h-fit w-full md:w-[calc(66%)] items-start mx-auto max-w-[70rem]">
          <h2 className="text-2xl md:text-5xl sans w-2/3">{locale === 'tr' ? titleTR : titleEN}</h2>
          <div className="mt-10 mb-20">
            {handleBody(body)}
            {
              itemData.sheetTR ? <Link target="_blank" rel="noopener noreferrer" href={locale === 'tr' ? itemData.sheetTR : itemData.sheetEN} className="transition-all tab-selector flex bg-sky-300 hover:bg-sky-200 p-2 px-12 rounded-full w-fit mt-10">
                <h2 className="text-lg xl:text-2xl text-white mb-1 ">{currentLocale.details}</h2>
              </Link> : null
            }
            <div className="flex flex-wrap gap-4">
              {images.map((image, index) =>
              (
                <Image key={index} width={1000} height={800} src={image} alt={titleTR} className="w-full md:w-[calc(33%-.60rem)] h-auto mt-10 rounded-xl" />
              )
              )}
            </div>
            {
              (type !== 'blog' && !isAscharge && (selectedCategory === 'dc-arac-sarj-sistemi' || selectedCategory === 'ac-arac-sarj-sistemi')) ?
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