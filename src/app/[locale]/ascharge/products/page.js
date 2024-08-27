import React from 'react'
import Products from '@/components/products/index';

function page({params}) {
  const {locale} = params;
  
  return (
    <div>
      <Products locale={locale}/>
    </div>
  )
}

export default page