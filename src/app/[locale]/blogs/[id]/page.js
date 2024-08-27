import { findBlog } from '@/components/helper';
import locales from '@/locales';
import Banner from '@/components/products/Banner'
import Detail from '@/components/products/Detail'
import blogs from '@/data/blogs';
import React from 'react'

function page({params}) {
  const {locale, id} = params;
  const currentLocale = locales[locale];
  const blog = findBlog(blogs, id);
  return (
    <div>
      <Banner text={currentLocale.news}/>
      <Detail itemData={blog} type="blog" locale={locale}/>
    </div>
  )
}

export default page