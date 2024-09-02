'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { Fragment, useEffect, useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function Dropdown({ data, setData, isAscharge, selectedCategory, setSelectedCategory, locale, isDetail }) {
  const [dropdownAscharge, setDropdownAscharge] = useState(isAscharge);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const pathname = usePathname();
  
  useEffect(() => {

    let locationArray = pathname.split('/')
    locationArray = locationArray.filter((item) => item !== '');

    if (locationArray[0] === 'ascharge' || locationArray[1] === 'ascharge') {
      setData(data.slice(0, 3));
      setDropdownAscharge(true);
    }
  }, [])
  return (
    <div>
      {/* Desktop View */}
      <div className="hidden lg:block">
        {data.map((product, index) => (
          <div key={product.id} className="">
            <div
              onClick={() => {
                product.passive !== true && setSelectedCategory(product.id);
              }}
              className={`transition-all flex items-center justify-between ${product.id === selectedCategory ? 'bg-[#b4e1e1] border-[#B4E1E1]' : 'bg-white border-[#EFF4F9]  border-2'} ${product.passive === true ? 'cursor-not-allowed text-[#ACC2C6]' : ''} font-semibold p-6 py-6 text-[#005770] ${index !== 0 ? 'border-t-0' : ''}`}
            >
              <h2 className="text-xl">{locale === 'tr' ? product.titleTR : product.titleEN}</h2>
              {product.id === selectedCategory ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
            {product.id === selectedCategory && (
              <div className="hidden md:flex flex-col">
                {product.items.map(item => (
                  <Link href={`${dropdownAscharge ? '/ascharge' : ''}/products/${item.id}?category${selectedCategory}`} className="truncate">
                    <div className="transition-all truncate bg-white hover:bg-[#EFF4F9] border-[#EFF4F9] border-2 border-t-0 px-6 py-2 text-[#005770] text-base">
                      {locale === 'tr' ? item.titleTR : item.titleEN}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="flex lg:hidden flex-col">
        <div
          className="p-4 flex items-center justify-between border-2 bg-[#b4e1e1] border-[#B4E1E1] text-[#005770] font-semibold"
          onClick={() => setDropdownVisible(!dropdownVisible)}
        >
          {locale === 'tr' ? data.find(product => product.id === selectedCategory).titleTR : data.find(product => product.id === selectedCategory).titleEN}
          {dropdownVisible ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>

        {dropdownVisible && (
          <div className="flex flex-col border-t-0">
            {data.map(product => (
              <div
                key={product.id}
                className={`p-4 border-b border-x border-[#EFF4F9] bg-white text-[#005770] ${product.passive ? 'cursor-not-allowed text-[#ACC2C6] bg-[#F8FAFB]' : 'hover:bg-[#EFF4F9] hover:text-[#003B4D] cursor-pointer'}`}
                onClick={() => {
                  if (product.passive !== true) {
                    if (isDetail) {
                     window.location = `${dropdownAscharge ? '/ascharge' : ''}/products?category=${product.id}`; 
                    } else {
                      setSelectedCategory(product.id);
                      setDropdownVisible(false);
                    }
                  }
                }}
              >
                {locale === 'tr' ? product.titleTR : product.titleEN}
              </div>
            ))}

          </div>
        )}
      </div>
    </div>

  )
}

export default Dropdown