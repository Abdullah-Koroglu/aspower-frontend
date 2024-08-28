'use client'
import React from 'react';
import Image from 'next/image';
import blogs from '@/data/blogs';
import locales from '@/locales'
import Link from 'next/link';
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const DoubleSection = ({ locale }) => {
  const currentLocale = locales[locale]

  const scrollLeft = () => {
    const element = document.querySelector('.scrolling-container');
    element.scrollBy({
      left: -600,
      behavior: 'smooth'
    });
  }

  const scrollRight = () => {
    const element = document.querySelector('.scrolling-container');
    element.scrollBy({
      left: 600,
      behavior: 'smooth'
    });
  }

  return (
    <div className="w-full flex flex-col md:flex-row bg-[#EFF4F9]">
      <div
        style={{
          backgroundImage: `url('/teknik-destek-image.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="relative flex items-center justify-center w-full md:w-1/2 p-4 py-32 lg:px-20 md:p-16 md:px-10">
        <h2 className="absolute top-8 left-4 md:left-10 xl:left-20 text-white text-xl md:text-3xl font-medium">{currentLocale.supportInPlace}</h2>
        <div className="bg-[#111B2D] rounded-3xl text-white xl:max-w-[60%] p-8 md:p-10 xl:p-16 text-center flex flex-col items-center justify-center gap-16 drop-shadow-lg">
          <p>{currentLocale.homepageDoubleSection}</p>
          <Link
            href={`/support`}
            className={`transition-all tab-selector bg-sky-300 hover:bg-sky-200 p-2 px-10 xl:px-20 rounded-full`}
          >
            <h2 className="text-lg xl:text-2xl text-white mb-1">{currentLocale.support}</h2>
          </Link>
        </div>
      </div>
      <div className="md:w-1/2">
        <h2 className="text-[#111B2D] px-4 md:px-10 xl:px-20 mt-8 text-xl md:text-3xl font-medium">{currentLocale.news}</h2>
        <div
          className="transition-all flex overflow-x-scroll gap-4 mt-4 scrolling-container"
        >
          <div
            className="flex gap-8 px-8 py-8"
          >
            {blogs.map((blog, index) => <div className="w-[20rem] md:w-[22rem] xl:w-[30rem] drop-shadow-xl rounded-3xl bg-white p-4 pb-4 md:pb-12 md:p-8 flex flex-col" key={index}>
              <Image
                className={`w-full h-56 rounded-lg`}
                alt="image1"
                width={300}
                height={200}
                // src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`}
                src={`${blog.image}`}
                priority
              />
              <h1 className="mt-4 text-lg font-medium text-[#111B2D]">{locale === 'tr' ? blog.titleTR : blog.titleEN}</h1>
              <p className="text-s text-[#ACC2C6] mb-8">{locale === 'tr' ? blog.descTR : blog.descEN}</p>
              <Link className="transition-all self-end mt-auto p-2 px-12 pb-3 rounded-full bg-[#C5EAC7] hover:bg-[#c5eac7b7] text-[#111B2D] text-lg xl:text-2xl" href={`/blogs/${blog.id}`}>
                {currentLocale.continue}
              </Link>
            </div>
            )}
          </div>
        </div>

        <div className="flex justify-center mt-8 mb-12">
          <div onClick={scrollLeft} className="hidden xl:flex transition-all tab-selector items-center justify-center bg-white hover:bg-[#ffffffa1] p-2 h-12 w-12  rounded-full mr-4 select-none">
            <h2 className="text-lg xl:text-2xl text-[#ACC2C6]">
              <MdOutlineArrowBackIos />
            </h2>
          </div>
          <Link href="/blogs" className="transition-all tab-selector bg-sky-300 hover:bg-sky-200 p-2 px-12 rounded-full">
            <h2 className="text-lg xl:text-2xl text-white mb-1">              {currentLocale.viewAll}</h2>
          </Link>
          <div onClick={scrollRight} className="hidden xl:flex transition-all tab-selector items-center justify-center bg-white hover:bg-[#ffffffa1] p-2 h-12 w-12 rounded-full ml-4">
            <h2 className="text-lg xl:text-2xl text-[#ACC2C6]">
              <MdOutlineArrowForwardIos />
            </h2>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DoubleSection;