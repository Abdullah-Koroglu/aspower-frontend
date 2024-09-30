import React from 'react';
import Banner from './Banner';
import List from './List';
import Contact from '@/components/ascharge/Contact';
import DownloadCatalogue from '@/components/ascharge/DownloadCatalogue';

const Products = async ({locale}) => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products?locale=${locale}&populate=Banner&pagination[pageSize]=100`)
  const pageData = await data.json()

  return (
    <div>
      <Banner locale={locale}/>
      <List type="product" locale={locale} pageData={pageData.data}/>
      <Contact locale={locale}/>
      <DownloadCatalogue locale={locale}/>
    </div>
  );
};

export default Products;