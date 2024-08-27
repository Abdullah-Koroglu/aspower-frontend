import React from 'react';
import Banner from './Banner';
import List from './List';
import Contact from '@/components/ascharge/Contact';
import DownloadCatalogue from '@/components/ascharge/DownloadCatalogue';

const Products = ({locale}) => {
  return (
    <div>
      <Banner locale={locale}/>
      <List type="product" locale={locale}/>
      <Contact locale={locale}/>
      <DownloadCatalogue locale={locale}/>
    </div>
  );
};

export default Products;