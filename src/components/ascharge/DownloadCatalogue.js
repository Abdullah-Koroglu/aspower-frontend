'use client';
import locales from '@/locales'
import Image from 'next/image';
import React, { useState } from 'react';

const DownloadCatalogue = ({locale}) => {
  const currentLocale = locales[locale]

  const [formData, setFormData] = useState({ catalogue: 'vehicle', language: 'tr' });
  const handleCatalogueSelect = (e) => {
    setFormData({ ...formData, catalogue: e.target.value });
  }
  const handleLanguageSelect = (e) => {
    setFormData({ ...formData, language: e.target.value });
  }
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full h-full mb-12 p-4 md:p-10 xl:p-20">
      <div className="md:w-1/2">
        <h2 className="text-xl md:text-2xl xl:text-4xl font-medium mt-8 md:mt-0">
          {currentLocale.discoverCatalogues}
        </h2>
        <div className="flex gap-8 mt-10">
          <div onClick={() => setFormData((oldState) => ({...oldState, catalogue: 'vehicle' }))} className="transition-all flex gap-2 items-start max-w-48 cursor-pointer">
            <input className={`cursor-pointer ring-0 focus:ring-0 mt-2 bg-[#EFF4F9] border-0 text-[#65D5EF]`} type="radio" name="catalogue" value="vehicle" checked={formData.catalogue === 'vehicle'} onChange={handleCatalogueSelect} />
            <label className={`cursor-pointer transition-all text-base xl:text-lg font-medium ${formData.catalogue === 'vehicle' ? '' : 'text-[#ACC2C6]'}`} htmlFor="vehicle">{currentLocale.vehicleChargeSystemCatalogue}</label>
          </div>
          <div onClick={() => setFormData((oldState) => ({...oldState, catalogue: 'family' }))} className="transition-all flex gap-2 items-start max-w-48 cursor-pointer">
            <input className={`cursor-pointer ring-0 focus:ring-0 mt-2 bg-[#EFF4F9] border-0 text-[#65D5EF]`} type="radio" name="catalogue" value="family" checked={formData.catalogue === 'family'} onChange={handleCatalogueSelect} />
            <label className={`cursor-pointer transition-all text-base xl:text-lg font-medium ${formData.catalogue === 'family' ? '' : 'text-[#ACC2C6]'}`} htmlFor="family">{currentLocale.generalCatalogue}</label>
          </div>
        </div>
        <div className="flex gap-16 mt-10">
          <div onClick={() => setFormData((oldState) => ({...oldState, language: 'tr' }))} className="transition-all flex gap-2 items-start max-w-48 cursor-pointer">
            <input className={`cursor-pointer ring-0 focus:ring-0 mt-2 bg-[#EFF4F9] border-0 text-[#65D5EF]`} type="radio" name="language" value="tr" checked={formData.language === 'tr'} onChange={handleLanguageSelect} />
            <label className={`cursor-pointer transition-all text-base xl:text-lg font-medium ${formData.language === 'tr' ? '' : 'text-[#ACC2C6]'}`} htmlFor="vehicle">{currentLocale.languageTR}</label>
          </div>
          <div onClick={() => setFormData((oldState) => ({...oldState, language: 'en' }))} className="transition-all flex gap-2 items-start max-w-48 cursor-pointer">
            <input className={`cursor-pointer ring-0 focus:ring-0 mt-2 bg-[#EFF4F9] border-0 text-[#65D5EF]`} type="radio" name="language" value="en" checked={formData.language === 'en'} onChange={handleLanguageSelect} />
            <label className={`cursor-pointer transition-all text-base xl:text-lg font-medium ${formData.language === 'en' ? '' : 'text-[#ACC2C6]'}`} htmlFor="family">{currentLocale.languageEN}</label>
          </div>
          <div onClick={() => setFormData((oldState) => ({...oldState, language: 'ru' }))} className="transition-all flex gap-2 items-start max-w-48 cursor-pointer">
            <input className={`cursor-pointer ring-0 focus:ring-0 mt-2 bg-[#EFF4F9] border-0 text-[#65D5EF]`} type="radio" name="language" value="ru" checked={formData.language === 'ru'} onChange={handleLanguageSelect} />
            <label className={`cursor-pointer transition-all text-base xl:text-lg font-medium ${formData.language === 'ru' ? '' : 'text-[#ACC2C6]'}`} htmlFor="family">{currentLocale.languageRU}</label>
          </div>
        </div>
        <p className="text-[#ACC2C6] text-xs mt-2">
          {currentLocale.selectLanguage}
        </p>
        <button
          className={`transition-all tab-selector bg-sky-300 hover:bg-sky-200 p-2 px-10 xl:px-16 self-center rounded-full mt-14`}
        >
          <h2 className="text-lg xl:text-2xl text-white mb-1">
            {currentLocale.download}
          </h2>
        </button>
      </div>
      <div className="md:w-1/2">
        <Image
          className={`w-full rounded-2xl`}
          alt={'image1'}
          width={3000}
          height={3000}
          src={formData.catalogue === 'vehicle' ? `/Refs/product-family-sekans.jpg` : '/nicelik.png'}
          priority
        />
      </div>
    </div>
  );
};

export default DownloadCatalogue;