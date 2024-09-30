import Contact from '@/components/ascharge/Contact';
import DownloadCatalogue from '@/components/ascharge/DownloadCatalogue';
import Banner from '@/components/products/Banner'
import Detail from '@/components/products/Detail'
import React from 'react'

async function page({params}) {
  const {locale, id} = params;
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products?filters[slug][$eq]=${id}&locale=${locale}&populate[0]=Banner&populate[1]=BodyImages&populate[2]=Images&populate[3]=DataSheet`)
  const fullData = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products?locale=${locale}&pagination[pageSize]=100`)
  const pageData = await data.json()
  const pageFullData = await fullData.json()

  return (
    <div>
      <Banner locale={locale}/>
      {pageData.data?.[0] && <Detail parentData={pageFullData.data} itemData={pageData.data?.[0]} locale={locale}/>}
      <Contact locale={locale}/>
      <DownloadCatalogue locale={locale}/> 
    </div>
  )
}

export default page