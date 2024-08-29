import Banner from '@/components/products/Banner'
import Link from 'next/link'
import React from 'react'

async function page() {
  console.log(`${process.env.NEXT_PUBLIC_API_URL}/api/certificates?populate=Dokuman`);
  
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/certificates?populate=Dokuman`)
  const pageData = await data.json()


  return (
    <div>
      <Banner text="Sertifikalarımız" />
      <div className="flex flex-col items-start justify-start  px-4 md:px-20 py-20 gap-8">
        <div className="flex flex-col h-fit items-start mx-auto max-w-[70rem]">
          <h2 className="text-2xl md:text-5xl sans w-2/3">Sertifikalarımız</h2>
          <div className="mt-10 mb-20 flex flex-col">
            {pageData.data?.filter(item => item.attributes.tip === 'sertifika')?.map((item, index) => (
              <Link target="_blank" rel="noopener noreferrer" href={`${process.env.BACKEND_URL}${item.attributes.Dokuman.data.attributes.url}`} key={index} className="text-xl font-base mb-4 text-[#005770]">{item.attributes.Sertifika}</Link>
            ))}
          </div>
          <h2 className="text-2xl md:text-5xl sans w-2/3">Belgelerimiz</h2>
          <div className="mt-10 mb-20 flex flex-col">
            {pageData.data?.filter(item => item.attributes.tip === 'belge')?.map((item, index) => (
              <Link target="_blank" rel="noopener noreferrer" href={`${process.env.BACKEND_URL}${item.attributes.Dokuman.data.attributes.url}`} key={index} className="text-xl font-base mb-4 text-[#005770]">{item.attributes.Sertifika}</Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default page