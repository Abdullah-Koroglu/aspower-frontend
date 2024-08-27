import Contact from '@/components/ascharge/Contact';
import DownloadCatalogue from '@/components/ascharge/DownloadCatalogue';
import { findProduct } from '@/components/helper';
import Banner from '@/components/products/Banner'
import Detail from '@/components/products/Detail'
import products from '@/data/productList';
import React from 'react'

function page({params}) {
  const {locale, id} = params;
  const product = findProduct(products, id);
  
  return (
    <div>
      <Banner locale={locale}/>
      <Detail itemData={product} locale={locale}/>
      <Contact locale={locale}/>
      <DownloadCatalogue locale={locale}/> 
    </div>
  )
}

export default page