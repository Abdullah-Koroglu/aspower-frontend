import React from 'react'
import Banner from '@/components/products/Banner';
import List from '@/components/products/List';
import locales from '@/locales';

async function page({params}) {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs?locale=${params.locale}&populate=banner`)
  const pageData = await data.json()

  const {locale} = params;
  const currentLocale = locales[locale];
  return (
    <div>
      <Banner text={currentLocale.news} locale={locale}/>
      <List type="blog" locale={locale} pageData={pageData.data}/>
    </div>
  )
}

export default page