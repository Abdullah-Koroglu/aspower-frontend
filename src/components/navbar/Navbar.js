'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn, FaBars, FaWhatsapp } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import products from '@/data/productList';
import locales from '@/locales';

const Navbar = ({ locale }) => {
  const currentLocale = locales[locale];
  const [menuHoverItem, setMenuHoverItem] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const defaultImage = '/products/as-evc-20-40-kw-hizli-sarj-sistemi.jpg';
  let productsLink = '/ascharge/products';
  const [menuDetailImage, setMenuDetailImage] = useState(defaultImage);

  const handleProductsMenuItems = () => {
    const router = window?.location;
    const location = router.href.replace(router.origin, '');

    let locationArray = location.split('/')
    locationArray = locationArray.filter((item) => item !== '');
    if (locationArray[0] === 'ascharge' || locationArray[1] === 'ascharge') {
      return products[0].items.map(item => {
        const href = `/ascharge${products[0].href}`
        return { ...item, image: item.images[0], href }
      })
    } else {
      productsLink = '/products';

      return products.filter(category => category.passive !== true)
    }
  }

  const menuDetailData = {
    products: {
      items: window ? handleProductsMenuItems() : [],
      showImage: true
    },
    enterprise: {
      items: [
        {
          titleTR: 'Kurum Profi̇li̇',
          titleEN: 'Company Profile',
          href: '/institution-profile'
        },
        {
          titleTR: 'Sertifikalar',
          titleEN: 'Certificates',
          href: '/certificates'
        },
        {
          titleTR: 'İnsan Kaynakları',
          titleEN: 'Career',
          href: '/career'
        }
      ],
      showImage: false
    }
  }

  const handleLanguageChange = (langValue) => {
    const router = window?.location;
    const location = router.href.replace(router.origin, '');
    let locationArray = location.split('/')
    locationArray = locationArray.filter((item) => item !== '');

    if (locale === 'tr') {
      locationArray.unshift(langValue);
    } else {
      locationArray.shift();
      locationArray.unshift(langValue);
    }

    window.location.replace(`/${locationArray.join('/')}`);
  };

  const renderMenuDetail = () => {
    const show = menuDetailData[menuHoverItem]?.showImage;
    return (
      <div
        className={`z-50 absolute top-[1.3rem] ${menuHoverItem === 'products' ? 'left-[-12rem]' : 'left-[8.5rem]'} pt-16 h-56 w-[${show ? '490rem' : '15rem'}] hidden menu-detail`}
      >
        <div className={`flex gap-20 bg-white p-8 rounded-3xl drop-shadow-lg`}>
          <div
            className={`flex flex-col gap-4 ${show ? 'border-r border-zinc-200 pr-20' : 'w-40'}`}
          >
            {
              menuDetailData[menuHoverItem]?.items.map((item, index) => (
                <Link
                  onMouseEnter={() => { setMenuDetailImage(item.image) }}
                  className="text-[#ACC2C6] hover:text-[#005770]"
                  key={index}
                  href={item.href}
                >
                  {locale === 'tr' ? item.titleTR : item.titleEN}
                </Link>
              ))
            }
          </div>
          {
            show && (
              <div className='flex flex-col gap-4 items-center justify-center rounded-lg'>
                <Image
                  alt="logo"
                  className="w-[18rem] h-80 rounded-lg"
                  src={menuDetailImage ?? defaultImage}
                  width={500}
                  height={500}
                />
              </div>
            )
          }
        </div>
      </div>
    )
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  return (
    <div onMouseLeave={() => setMenuHoverItem('')} className={`flex w-full justify-center items-center z-10`}>
      <div className="flex text-sm justify-between items-center border rounded-full p-4 px-4 md:px-8 top-4 absolute z-10 w-[calc(100%-2rem)] md:w-[calc(100%-4rem)]">
        <Link href="/">
          <Image alt="logo" className="w-32 xl:w-40" src="/logo-beyaz.svg" width={300} height={300} />
        </Link>
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
            {isMenuOpen ? <IoMdClose size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <div className={`hidden md:flex items-center lg:gap-8 text-white relative ${isMenuOpen ? 'flex flex-col' : 'hidden'}`}>
          <Link
            onMouseOver={() => setMenuHoverItem('products')}
            className={`transition-all ${menuHoverItem === 'products' ? 'menu-active' : ''} products-link z-50 p-1 xl:px-8 rounded-full hover:bg-white hover:text-[#005770]`}
            href={productsLink}
          >
            {currentLocale.our_products}
          </Link>
          <Link
            onMouseOver={() => { setMenuHoverItem('enterprise') }}
            className={`transition-all ${menuHoverItem === 'enterprise' ? 'menu-active' : ''} enterprise-link z-50 p-1 xl:px-8 rounded-full hover:bg-white hover:text-[#005770]`}
            href="/institution-profile"
          >
            {currentLocale.corporate}
          </Link>
          <Link className="transition-all z-50 p-1 xl:px-8 rounded-full hover:bg-white hover:text-[#005770]" href="/support">
            {currentLocale.techSupport}
          </Link>
          <div
            className="cursor-pointer xl:px-8 transition-all z-50 p-1 rounded-full hover:bg-white hover:text-[#005770]"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })}
          >
            {currentLocale.contact}
          </div>
          {renderMenuDetail()}
        </div>
        <div className={`hidden md:flex gap-2 items-center text-white ${isMenuOpen ? 'flex flex-col mt-4' : ''}`}>
          <div className="flex ">
            <div
              className={`px-1 border-r-2 border-white flex items-center h-1/3 ${locale !== 'tr' ? 'text-[#cecece] font-light' : 'text-white font-medium'} cursor-pointer`}
              onClick={() => { handleLanguageChange('tr') }}
            >
              {currentLocale.languageTR}
            </div>
            <div
              className={`px-1 flex items-center ${locale !== 'en' ? 'text-[#cecece] font-light' : 'text-white font-medium'} cursor-pointer`}
              onClick={() => { handleLanguageChange('en') }}
            >
              {currentLocale.languageEN}
            </div>
          </div>
          <Link className="bg-white rounded-full p-2" href="https://www.facebook.com/profile.php?id=100065641653248">
            <FaFacebookF className='text-black' />
          </Link>
          <Link className="bg-white rounded-full p-2" href="https://www.instagram.com/aspower_enerji/">
            <FaInstagram className='text-black' />
          </Link>
          <Link className="bg-white rounded-full p-2" href="https://www.linkedin.com/company/aspower/">
            <FaLinkedinIn className='text-black' />
          </Link>
        </div>
      </div>
      <div className={`transition-all duration-300 ${isMenuOpen ? 'top-0' : 'top-[calc(-100vh-3rem)]'} md:hidden flex flex-col w-full h-[100vh] absolute bg-white p-4 text-black z-50`}>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white mb-12 self-end">
          <IoMdClose className="text-black" size={24} />
        </button>
        <Link className="w-full py-2" href={productsLink} onClick={() => setIsMenuOpen(false)}>
          {currentLocale.our_products}
        </Link>
        <Link className="w-full py-2" href="/institution-profile" onClick={() => setIsMenuOpen(false)}>
          {currentLocale.corporate}
        </Link>
        <Link className="w-full py-2" href="/support" onClick={() => setIsMenuOpen(false)}>
          {currentLocale.techSupport}
        </Link>
        <div className="w-full py-2 cursor-pointer" onClick={() => {
          setIsMenuOpen(false);
          document.getElementById('contact').scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        }}>
          {currentLocale.contact}
        </div>
        <div className="flex justify-center gap-4 py-4 mt-auto">
          <Link className="bg-gray-200 rounded-full p-2" href="https://www.facebook.com/profile.php?id=100065641653248">
            <FaFacebookF className='text-black' />
          </Link>
          <Link className="bg-gray-200 rounded-full p-2" href="https://www.instagram.com/aspower_enerji/">
            <FaInstagram className='text-black' />
          </Link>
          <Link className="bg-gray-200 rounded-full p-2" href="https://www.linkedin.com/company/aspower/">
            <FaLinkedinIn className='text-black' />
          </Link>
          <Link className="bg-gray-200 rounded-full p-2" href={'https://api.whatsapp.com/send?phone=905511086483'}>
            <FaWhatsapp className='text-black' />
          </Link>
        </div>
        <div className="flex justify-center gap-4 py-4 mb-12">
          <div
            className={`px-2 border-r-2 border-gray-400 ${locale !== 'tr' ? 'text-gray-500' : 'text-black font-medium'} cursor-pointer`}
            onClick={() => { handleLanguageChange('tr'); setIsMenuOpen(false); }}
          >
            {currentLocale.languageTR}
          </div>
          <div
            className={`px-2 ${locale !== 'en' ? 'text-gray-500' : 'text-black font-medium'} cursor-pointer`}
            onClick={() => { handleLanguageChange('en'); setIsMenuOpen(false); }}
          >
            {currentLocale.languageEN}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
