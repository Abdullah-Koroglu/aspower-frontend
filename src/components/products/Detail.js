'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import Dropdown from './Dropdown';
import products from '@/data/productList';


function Detail({ itemData, type, locale }) {
  const [data, setData] = useState(products)
  const [selectedCategory, setSelectedCategory] = useState('dc-arac-sarj-sistemi');
  const { titleTR, titleEN, bodyTR, bodyEN, images } = itemData;

  const body =  locale === 'tr' ? bodyTR: bodyEN;


  return (
    <div className="flex flex-col md:flex-row items-start justify-start px-4 md:px-20 py-20 gap-8">
      {type !== 'blog' && <div className="hidden md:block w-[calc(33%)] max-w-[calc(22%-2rem)] overflow-hidden rounded-xl cursor-pointer ">
        <Dropdown data={data} setData={setData} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} locale={locale} />
      </div>}
      <div className="flex flex-col h-fit items-start mx-auto max-w-[70rem]">
        <h2 className="text-2xl md:text-5xl sans w-2/3">{locale === 'tr' ? titleTR: titleEN}</h2>
        <div className="mt-10 mb-20">
          {body
          ?.map((item, index) => (
            <p key={index} className="text-xl font-base mb-4 text-[#005770]">{item}</p>
          ))}
          <div className="flex flex-wrap gap-4">
            {images.map((image, index) =>
            (
              <Image key={index} width={3000} height={2000} src={image} alt={titleTR} className="w-full md:w-[calc(33%-.60rem)] h-auto mt-10" />
            )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail