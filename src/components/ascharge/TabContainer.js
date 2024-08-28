'use client'
import React, { useState } from 'react'
import { ConditionalLink } from '../common'
import Image from 'next/image'
import { CiSearch } from "react-icons/ci";
import Link from 'next/link';
import locales from '@/locales';

const TabContainer = ({locale}) => {
  const currentLocale = locales[locale]
  const [activeTab, setActiveTab] = useState('dc')
  const tabs = {
    dc: {
      id: 'dc',
      titleTR: 'DC Hızlı Şarj Sistemleri',
      titleEN: 'DC Fast Charging Systems',
      active: true,
      content: [
        {
          id: 1,
          attributes: {
            href: '/ascharge/products',
            width: 1000,
            height: 1000,
            name: 'image1',
            url: '/Refs/cihaz-gorselleri/20-40KW.png',
            title: '20-40KW',
            subheaderTR: 'Hızlı Şarj Sistemleri',
            subheaderEN: 'Fast Charging Systems'
          }
        },
        {
          id: 2,
          attributes: {
            href: '/ascharge/products',
            width: 1000,
            height: 1000,
            name: 'image1',
            url: '/Refs/cihaz-gorselleri/60-100KW.png',
            title: '60-100KW',
            subheaderTR: 'Hızlı Şarj Sistemleri',
            subheaderEN: 'Fast Charging Systems'
          }
        },
        {
          id: 3,
          attributes: {
            href: '/ascharge/products',
            width: 1000,
            height: 1000,
            name: 'image1',
            url: '/Refs/cihaz-gorselleri/120-360KW.png',
            title: '120-360KW',
            subheaderTR: 'Hızlı Şarj Sistemleri',
            subheaderEN: 'Fast Charging Systems'
          }
        },
        {
          id: 4,
          attributes: {
            href: '/ascharge/products',
            width: 1000,
            height: 1000,
            name: 'image1',
            url: '/Refs/cihaz-gorselleri/480-800KW.png',
            title: '480-800KW',
            subheaderTR: 'Hızlı Şarj Sistemleri',
            subheaderEN: 'Fast Charging Systems'
          }
        }
      ]
    },
    ac: {
      id: 'ac',
      titleTR: 'AC Şarj Sistemleri',
      titleEN: 'AC Charging Systems',
      active: false,
      content: []
    },
  }

  const TabSelector = () => {
    const tabsArray = Object.values(tabs);

    return (
      <div className="flex gap-2 md:gap-8 w-full md:px-10 xl:px-20 md:p-8 justify-start">
        {tabsArray.map(tab => {
          return (
            <button
              key={tab.id}
              className={`transition-all relative tab-selector p-2 px-4 xl:px-8 xl:w-[calc(25%-2rem)] rounded-full ${tab.active === true ? 'bg-green-200 hover:bg-green-100' : 'bg-[#eff4f9] hover:opacity-70'} ${tab.active === true ? 'cursor-pointer' : 'cursor-default'} ${activeTab === tab.id ? '' : 'text-gray-400'}`}
              onClick={() => tab.active ? setActiveTab(tab.id) : null}
            >
              <h2 className="text-sm text-nowrap xl:text-2xl">
                {locale === 'tr' ? tab.titleTR : tab.titleEN}
              </h2>
              <div className={`text-xs xl:text-lg mb-1 absolute top-[-1rem] right-1 text-white bg-[#65d5ef] px-2 pb-1 rounded-full ${tab.active === true ? 'hidden' : 'block'}`}>
                {currentLocale.soon}
              </div>
            </button>
          )
        })}
      </div>
    )
  }

  return (
    <div className="flex w-full items-center justify-center flex-col gap-4 p-4 mt-20">
      <TabSelector />
      <div className="flex flex-col md:flex-row w-full gap-4 xl:gap-8 md:px-10 xl:px-20 justify-start">
        {tabs?.[activeTab].content.map((image) => {
          const { width, height, name, url } = image.attributes
          return <ConditionalLink item={image.attributes} className={`rounded-2xl relative md:w-[calc(25%-.5rem)] overflow-hidden cursor-pointer overlay`}
            key={image.id}>
            <Image
              style={{ backgroundColor: '#ECF2F7' }}
              className={`max-md:my-0 w-full h-full`}
              alt={name}
              width={width}
              height={height}
              // src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`}
              src={`${url}`}
              priority
            />
              <div className="z-20 w-full h-full overlay-color items-center justify-center flex-col"> 
                <div className="flex items-center justify-center flex-col">
                  <CiSearch className="text-5xl text-[#EFF4F9] mb-1"/>
                <p className="text-2xl font-light text-[#EFF4F9] mb-1">
                  {currentLocale.review}
                </p>
                </div>
              </div>
            <div className="absolute bottom-0 left-0 w-full p-4 xl:p-8 pt-24 z-50 overlay-text">
              <h2 className="text-lg xl:text-4xl text-black ">
                {image.attributes.title}
              </h2>
              <p className="text-sm xl:text-lg text-sky-950 ">
                {locale === 'tr' ? image.attributes.subheaderTR : image.attributes.subheaderEN}
              </p>
            </div>
          </ConditionalLink>
        })}
      </div>
      <Link href="/ascharge/products"
        className={`transition-all tab-selector bg-sky-300 hover:bg-sky-200 p-2 px-8 xl:w-1/6 rounded-full self-start md:mx-10 xl:mx-20 mt-8`}
      >
        <h2 className="text-lg xl:text-2xl text-white mb-1 text-center">
          {currentLocale.viewAll}
        </h2>
      </Link>
    </div>
  )
}

export default TabContainer
