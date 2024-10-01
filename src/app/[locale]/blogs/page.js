import React from 'react'
import Banner from '@/components/products/Banner';
import List from '@/components/products/List';
import locales from '@/locales';
import { headers } from 'next/headers';

async function page({params}) {
  const headersList = headers()
  const {locale} = params;
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs?locale=${params.locale}&populate=Banner&pagination[pageSize]=100`)
  const pageData = await data.json()

  const currentLocale = locales[locale];
  return (
    <div>
      <Banner text={currentLocale.news} locale={locale}/>
      <List type="blog" locale={locale} pageData={pageData.data}/>
    </div>
  )
}

export default page