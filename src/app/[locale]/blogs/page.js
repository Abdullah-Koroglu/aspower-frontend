import React from 'react'
import Banner from '@/components/products/Banner';
import List from '@/components/products/List';
import locales from '@/locales';

function page({params}) {
  const {locale} = params;
  const currentLocale = locales[locale];
  return (
    <div>
      <Banner text={currentLocale.news} locale={locale}/>
      <List type="blog" locale={locale}/>
    </div>
  )
}

export default page