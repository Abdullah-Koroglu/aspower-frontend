'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function Dropdown({ data, isAscharge, selectedCategory, setSelectedCategory, locale, isDetail }) {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const selectedProduct = data.find(product => product.id === selectedCategory);
  const pageData =  isAscharge ? data?.slice(0, 3) : data; 

  return (
    <div>
      <div className="hidden lg:block">
        {
         pageData?.map((product, index) => (
            <div key={product.id}>
              <div
                onClick={() => {
                  if (!product.passive) setSelectedCategory(product.id);
                }}
                className={`transition-all flex items-center justify-between ${product.id === selectedCategory ? 'bg-[#b4e1e1] border-[#B4E1E1]' : 'bg-white border-[#EFF4F9]  border-2'} ${product.passive ? 'cursor-not-allowed text-[#ACC2C6]' : ''} font-semibold p-6 py-6 text-[#005770] ${index !== 0 ? 'border-t-0' : ''}`}
              >
                <h2 className="text-xl">{locale === 'tr' ? product.titleTR : product.titleEN}</h2>
                {product.id === selectedCategory ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
              {product.id === selectedCategory && (
                <div className="hidden md:flex flex-col">
                  {product.items?.map(item => (
                    <Link key={item.id} href={`${isAscharge ? '/ascharge' : ''}/products/${item.id}?category=${selectedCategory}`} className="truncate">
                      <div className="transition-all truncate bg-white hover:bg-[#EFF4F9] border-[#EFF4F9] border-2 border-t-0 px-6 py-2 text-[#005770] text-base">
                        {locale === 'tr' ? item.titleTR : item.titleEN}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))
        }
      </div>

      <div className="flex lg:hidden flex-col">
        <div
          className="p-4 flex items-center justify-between border-2 bg-[#b4e1e1] border-[#B4E1E1] text-[#005770] font-semibold"
          onClick={() => setDropdownVisible(!dropdownVisible)}
        >
          {selectedProduct ? (locale === 'tr' ? selectedProduct.titleTR : selectedProduct.titleEN) : 'Select a Category'}
          {dropdownVisible ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>

        {dropdownVisible && (
          <div className="flex flex-col border-t-0">
            {
              pageData?.map(product => (
                <div
                  key={product.id}
                  className={`p-4 border-b border-x border-[#EFF4F9] bg-white text-[#005770] ${product.passive ? 'cursor-not-allowed text-[#ACC2C6] bg-[#F8FAFB]' : 'hover:bg-[#EFF4F9] hover:text-[#003B4D] cursor-pointer'}`}
                  onClick={() => {
                    if (!product.passive) {
                      if (isDetail) {
                        window.location = `${isAscharge ? '/ascharge' : ''}/products?category=${product.id}`;
                      } else {
                        setSelectedCategory(product.id);
                        setDropdownVisible(false);
                      }
                    }
                  }}
                >
                  {locale === 'tr' ? product.titleTR : product.titleEN}
                </div>
              ))
            }
          </div>
        )}
      </div>
    </div>
  )
}

export default Dropdown;