'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const CatalogueSelector = ({data, currentLocale, locale}) => {
  const [formData, setFormData] = useState({ catalogue: data[0].id, language: 'tr' });

  useEffect(() => {
    setFormData({ catalogue: formData.catalogue, language: 'tr' });
  }, [formData.catalogue])

  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full h-full mb-12 p-4 md:p-10 xl:p-20">

      <div className="md:w-1/2">
        <h2 className="text-xl md:text-2xl xl:text-4xl font-medium mt-8 md:mt-0">
          {currentLocale.discoverCatalogues}
        </h2>
        <div className="flex gap-8 mt-10">
          {
            data.map(item => (
              <div key={item.id} onClick={() => setFormData((oldState) => ({...oldState, catalogue: item.id }))} className="transition-all flex gap-2 items-start max-w-48 cursor-pointer">
                <input className={`cursor-pointer ring-0 focus:ring-0 mt-2 bg-[#EFF4F9] border-0 text-[#65D5EF]`} type="radio" name="catalogue" value={item.id} checked={formData.catalogue === item.id} />
                <label className={`cursor-pointer transition-all text-base xl:text-lg font-medium ${formData.catalogue === item.id ? '' : 'text-[#ACC2C6]'}`} htmlFor={item.id}>{item.attributes.katalog.find(item => item.Language === locale)?.Title}</label>
              </div>
            ))
          }
        </div>
        <div className="flex gap-16 mt-10">
          {
            data.find(item => item.id == formData.catalogue)?.attributes?.katalog?.map(katalog => (
              <div 
                onClick={() => {katalog.Dosya?.data && setFormData((oldState) => ({...oldState, language: katalog.Language }))}} 
                className={`transition-all flex gap-2 items-start max-w-48 ${katalog.Dosya?.data ? "cursor-pointer" : 'cursor-not-allowed'}`}
              >
                <input 
                  className={`ring-0 focus:ring-0 mt-2 bg-[#EFF4F9] border-0 text-[#65D5EF] ${katalog.Dosya?.data ? "cursor-pointer" : 'cursor-not-allowed'}`} 
                  type="radio" 
                  name="language" 
                  value={katalog.Language} 
                  checked={formData.language === katalog.Language}
                />
                <label 
                  className={`transition-all text-base xl:text-lg font-medium ${formData.language === katalog.Language ? '' : 'text-[#ACC2C6]'} ${katalog.Dosya?.data ? "cursor-pointer" : 'cursor-not-allowed'}`} 
                  htmlFor={katalog.Language}
                >
                  {currentLocale[`language${katalog.Language?.toUpperCase()}`]}
                </label>
              </div>
            ))
          }

        </div>
        <p className="text-[#ACC2C6] text-xs mt-2">
          {currentLocale.selectLanguage}
        </p>
        <div
          className={`w-fit transition-all tab-selector bg-sky-300 hover:bg-sky-200 p-2 px-10 xl:px-16 rounded-full mt-14`}
        >
          <Link
          target='_blank'
          href={`/catalogues/${formData.catalogue}_${formData.language}.pdf`}
          >
          <h2 className="w-fit text-lg xl:text-2xl text-white mb-1">
            {currentLocale.download}
          </h2>
          </Link>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <Image
          className={`w-full h-[25vh] md:h-[50vh] rounded-2xl`}
          alt={'image1'}
          width={3000}
          height={3000}
          src={formData.catalogue === 'evc' ? `/Refs/product-family-sekans.jpg` : '/nicelik.png'}
          priority
        />
      </div>
    </div>
  )
}

export default CatalogueSelector