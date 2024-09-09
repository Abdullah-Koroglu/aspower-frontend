import locales from '@/locales'
import Banner from '@/components/products/Banner'
import Link from 'next/link'
import React from 'react'
import certificates from '@/data/certificates'

async function page({ params }) {
  const { locale } = params
  const currentLocale = locales[locale]
  // const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/certificates?populate=Dokuman`)
  // const pageData = await data.json()

  const pageData = certificates.map((item, index) => ({...item, title: locale === 'tr' ? item.certificateTr : item.certificateEn}))
  console.log(pageData);
  


  return (
    <div>
      <Banner text={currentLocale.certificates} />
      <div className="flex flex-col items-start justify-start  px-4 md:px-20 py-20 gap-8">
        <div className="flex flex-col h-fit items-start mx-auto max-w-[70rem]">
          <h2 className="text-2xl md:text-5xl sans w-2/3">{currentLocale.certificates}</h2>
          <div className="mt-10 mb-20 flex flex-col">
            {pageData.filter(item => item.certificateType === 'certificate')?.map((item, index) => (
              <Link target="_blank" rel="noopener noreferrer" href={`${process.env.BACKEND_URL}${item.documentUrl}`} key={index} className="text-xl font-base mb-4 text-[#005770]">{item.title}</Link>
            ))}
          </div>
          <h2 className="text-2xl md:text-5xl sans w-2/3">{currentLocale.documents}</h2>
          <div className="mt-10 mb-20 flex flex-col">
            {pageData.filter(item => item.certificateType === 'document')?.map((item, index) => (
              <Link target="_blank" rel="noopener noreferrer" href={`${process.env.BACKEND_URL}${item.documentUrl}`} key={index} className="text-xl font-base mb-4 text-[#005770]">{item.title}</Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default page