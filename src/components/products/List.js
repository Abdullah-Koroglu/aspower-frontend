'use client'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import productsData from '@/data/productList'
import Dropdown from './Dropdown'
import { useSearchParams } from 'next/navigation'
import { usePathname } from 'next/navigation'

function List({ type, locale, pageData: parentData }) {
  const searchParams = useSearchParams()
  const category = searchParams.get('category')
  const pathname = usePathname();

  const pageData = type === 'product' ? productsData : parentData
  const [isAscharge, setIsAscharge] = useState(false)

  const [selectedCategory, setSelectedCategory] = useState('dc-arac-sarj-sistemi')
  const RenderItem = ({ title, image, id, category }) => {
    const imageURL = `${process.env.NEXT_PUBLIC_IMAGE_URL}${image?.data?.attributes?.url}`;
    console.log(imageURL);
    
    return (
      <Link 
        key={id} 
        href={`${isAscharge ? '/ascharge' : ''}/${type}s/${id}${category ? `?category=${category}` : ''}`} 
        className={`transition-all ${type === 'product' ? 'w-full md:w-[calc(33%-2rem)]' : 'w-full md:w-[calc(25%-2rem)]'} h-fit rounded-lg aspect-square hover:opacity-80`}
      >
        <div
          style={{ backgroundImage: `url(${imageURL})` }}
          className="bg-gray-200  rounded-lg flex contact-image aspect-square">
          {/* <div className="h-1/6 text-center mt-[-3rem]  bg-[#005770] text-white"> */}
          <h2 className="truncate self-end w-full p-4 text-lg bg-[#005770] text-white rounded-b-lg">
            {title}
          </h2>
          {/* </div> */}
        </div>
      </Link>
    )
  }

  useEffect(() => {
    let locationArray = pathname.split('/')
    locationArray = locationArray.filter((item) => item !== '');

    if (category) {
      setSelectedCategory(category)
      document.getElementById('list').scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
    }

    if (locationArray[0] === 'ascharge' || locationArray[1] === 'ascharge') {
      setIsAscharge(true)
      // setPageData(pageData.slice(0, 3));
    }
  }, [])

  return (
    <>
      <div id='list' className="transition-all pt-20 md:px-4 lg:px-8 xl:px-20 px-4 flex flex-col md:flex-row gap-8 mb-20 self-center">
        {
          type === 'product' ?
            <div className="md:w-[calc(33%)] 2xl:max-w-[calc(22%-2rem)] overflow-hidden rounded-xl cursor-pointer">
              <Dropdown 
              isAscharge={isAscharge} 
              data={
                pageData.map(category => ({
                  ...category,
                  items: parentData.filter(product => product.attributes.Type === category.id).map(item => ({
                    id: item.attributes.slug,
                    titleTR: item.attributes.Title,
                    titleEN: item.attributes.Title
                  }))
                }))
              } 
              // setData={setPageData} 
              selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} locale={locale} />
            </div>
            : null
        }
        <div className={`${type === 'product' ? 'w-full md:w-[calc(66%)]' : 'w-full'} h-fit flex flex-wrap gap-8`}>
          {
            type === 'product' ?

            parentData.filter(product => product.attributes.Type === selectedCategory).map(item => {
                return (
                  <RenderItem
                    title={item.attributes.Title}
                    id={item.attributes.slug}
                    category={selectedCategory}
                    image={item.attributes?.Banner}
                  // image={'/placeholder.png'}
                  />
                )
              }) 
              
              :
              pageData.map(item => {
                const {Title, slug, Banner} = item.attributes;
                return (
                  <RenderItem
                    title={Title}
                    id={slug}
                    image={Banner}
                  />
                )
              })
          }
        </div>
      </div>
    </>
  )
}

export default List