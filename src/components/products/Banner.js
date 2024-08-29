import React from 'react'
import locales from '@/locales';

function Banner({text, locale}) {
  const currentLocale = locales[locale];
  return (
    <div
      className="bg-[#005770] font-light  text-white h-[50vh] flex items-end md:items-center pb-8"
    >
      <h2 className="px-4 md:px-20 text-2xl md:text-5xl w-3/4 lg:w-2/3 xl:w-1/2">
        {text ?? currentLocale.generalProductFamilyFeatures}
      </h2>
    </div>
  )
}

export default Banner