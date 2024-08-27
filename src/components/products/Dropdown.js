'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function Dropdown({data , setData, isAscharge , selectedCategory, setSelectedCategory, locale}) {
  const [dropdownAscharge, setDropdownAscharge] = useState(isAscharge);
  useEffect(() => {
    const router = window?.location;
    const location = router.href.replace(router.origin, '');

    let locationArray = location.split('/')
    locationArray = locationArray.filter((item) => item !== '');
    
    if (locationArray[0] === 'ascharge' || locationArray[1] === 'ascharge') {
      setData(data.slice(0, 2));
      setDropdownAscharge(true);
    } 
  }, [])
  return (
    <>{
      data.map((product, index) => {
        return (
          <div key={product.id} className="">
            <div onClick={() => { product.passive !== true && setSelectedCategory(product.id) }} className={`transition-all flex items-center justify-between ${product.id === selectedCategory ? 'bg-[#b4e1e1] border-[#B4E1E1]' : 'bg-white border-[#EFF4F9]  border-2'} ${product.passive === true ? 'cursor-not-allowed text-[#ACC2C6]' : ''} font-semibold p-6 py-6 text-[#005770] ${index !== 0 ? 'border-t-0' : ''}`}>
              <h2 className="text-xl">{locale === 'tr' ? product.titleTR : product.titleEN}</h2>
              {product.id === selectedCategory ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
            {
              product.id === selectedCategory && (
                <div className="hidden md:flex flex-col">
                  {
                    product.items.map(item => {
                      return (
                          <Link href={`${dropdownAscharge ? '/ascharge': ''}/products/${item.id}`} className="truncate">
                        <div className="transition-all truncate bg-white hover:bg-[#EFF4F9] border-[#EFF4F9] border-2 border-t-0 px-6 py-2 text-[#005770] text-base">
                            {locale === 'tr' ? item.titleTR : item.titleEN}
                        </div>
                          </Link>
                      )
                    })
                  }
                </div>
              )
            }
          </div>
        )
      })
      }</>
  )
}

export default Dropdown