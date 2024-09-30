import { findBlog } from '@/components/helper';
import locales from '@/locales';
import Banner from '@/components/products/Banner'
import Detail from '@/components/products/Detail'
import blogs from '@/data/blogs';
import React from 'react'

async function page({params}) {
  const {locale, id} = params;
  const currentLocale = locales[locale];
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs?filters[slug][$eq]=${params.id}&locale=${params.locale}&populate=Banner`)
  const pageData = await data.json()

  return (
    <div>
      <Banner text={currentLocale.news}/>
      <Detail itemData={pageData.data?.[0]} type="blog" locale={locale}/>
    </div>
  )
}

export default page