'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn, FaBars, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import products from '@/data/productList';
import locales from '@/locales';
import { usePathname } from 'next/navigation';

const Navbar = ({ locale }) => {
  const currentLocale = locales[locale];
  const [menuHoverItem, setMenuHoverItem] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const defaultImage = '/products/as-evc-20-40-kw-hizli-sarj-sistemi.jpg';
  let productsLink = '/ascharge/products';
  const [menuDetailImage, setMenuDetailImage] = useState(defaultImage);
  const pathname = usePathname();

  const handleProductsMenuItems = () => {

    let locationArray = pathname.split('/')
    locationArray = locationArray.filter((item) => item !== '');
    if (locationArray[0] === 'ascharge' || locationArray[1] === 'ascharge') {
      return products.slice(0, 3).map(category => ({ ...category, href: `/ascharge/products?category=${category.id}` }))
    } else {
      productsLink = '/products';
      return products.filter(category => category.passive !== true)
    }
  }

  const handleContact = () => {
    const contactElement = document.getElementById('contact')
    if (contactElement === null) {
      window.location.href = '/contact'
    } else {
      contactElement.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
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
    let locationArray = pathname.split('/')
    locationArray = locationArray.filter((item) => item !== '');

    if (locale === 'tr') {
      locationArray.unshift(langValue);
    } else {
      locationArray.shift();
      locationArray.unshift(langValue);
    }

    window.location.replace(`/${locationArray.join('/')}`);
  };

  const renderMenuDetail = (type) => {
    const show = menuDetailData[type]?.showImage;
    return (
      <div
        className={`z-50 absolute top-[1rem] pt-16 h-56 ${show ? 'w-[47rem]' : 'w-[13rem]'} menu-detail-${type} left-1/2 transform -translate-x-1/2`}
      >
        <div className={`flex items-center gap-20 bg-white p-8 rounded-3xl drop-shadow-lg`}>
          <div
            className={`flex flex-col gap-4 ${show ? 'border-r border-zinc-200 pr-20 w-[25.5rem]' : 'w-40'}`}
          >
            {
              menuDetailData[type]?.items.map((item, index) => {
                return (
                  <>
                    {
                      type === 'products' ? <>
                        {index === 0 && <div className="text-[#005770] font-bold">{currentLocale.electric_vehicle_charging_systems}</div>}
                        {index === 3 && <div className="text-[#005770] font-bold">{currentLocale.powerElectronics}</div>}
                        {index === 8 && <div className="text-[#005770] font-bold">{currentLocale.special_solutions}</div>}
                      </> : null
                    }
                    <Link
                      onMouseEnter={() => { setMenuDetailImage(item.image) }}
                      className={`text-[#ACC2C6] ${item.passive === true ? 'cursor-not-allowed' : 'cursor-pointer hover:text-[#005770]'}`}
                      key={index}
                      href={item.passive !== true ? item.href : {}}
                    >
                      {locale === 'tr' ? item.titleTR : item.titleEN}
                    </Link>
                  </>
                )
              })
            }
          </div>
          {
            show && (
              <div className='w-[23.5rem] flex flex-col gap-4 items-center justify-center rounded-lg'>
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
    <div className={`flex w-full justify-center items-center z-10`}>
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
          <div className="relative navbar-products">
            <Link
              className={`transition-all ${menuHoverItem === 'products' ? 'menu-active' : ''} products-link z-50 p-1 xl:px-8 rounded-full hover:bg-white hover:text-[#005770]`}
              href={productsLink}
            >
              {currentLocale.our_products}
            </Link>
            {renderMenuDetail('products')}
          </div>
          <div className="relative navbar-enterprise">
            <Link
              className={`transition-all ${menuHoverItem === 'enterprise' ? 'menu-active' : ''} enterprise-link z-50 p-1 xl:px-8 rounded-full hover:bg-white hover:text-[#005770]`}
              href="/institution-profile"
            >
              {currentLocale.corporate}
            </Link>
            {renderMenuDetail('enterprise')}
          </div>
          <Link className="transition-all z-50 p-1 xl:px-8 rounded-full hover:bg-white hover:text-[#005770]" href="/support">
            {currentLocale.techSupport}
          </Link>
          <div
            className="cursor-pointer xl:px-8 transition-all z-50 p-1 rounded-full hover:bg-white hover:text-[#005770]"
            onClick={() => {
              handleContact();
            }}
          >
            {currentLocale.contact}
          </div>
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
          <Link className="bg-white rounded-full p-2" href="https://x.com/AspowerEnerji">
            <FaXTwitter className='text-black' />
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
          <Link className="bg-gray-200 rounded-full p-2" href="https://x.com/AspowerEnerji">
            <FaXTwitter className='text-black' />
          </Link>
          <Link className="bg-gray-200 rounded-full p-2" href={
            // 'https://api.whatsapp.com/send?phone=905511086483'
            ''
          }>
            <FaWhatsapp className='text-black' />
          </Link>
        </div>
        <div className="flex justify-center gap-4 py-4 mb-20">
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
