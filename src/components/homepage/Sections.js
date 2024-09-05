import React from 'react';
import Image from 'next/image';
import { ConditionalLink } from '../common';

const Sections = ({locale}) => {
  const images = [
    {
      id: 1,
      href: '/ascharge',
      attributes: {
        width: 1200,
        height: 800,
        name: 'image1',
        url: '/Elektrikli-arac-sarj-sistemleri.jpg',
        titleTR: 'Elektri̇kli̇ Araç Şarj Si̇stemleri̇',
        titleEN: 'Electric Vehicle Charging Systems'
      }
    },
    {
      id: 2,
      href: '/products?category=redresor-aku-sarj-cihazi',
      attributes: {
        width: 1200,
        height: 800,
        name: 'image2',
        url: '/Enerji-Depolama-Sistemleri-2.jpg',
        titleTR: 'Enerji̇ Depolama Si̇stemleri̇',
        titleEN: 'Energy Storage Systems'
      }
    },
    {
      id: 3,
      href: '/products?category=kesintisiz-guc-kaynagi',
      attributes: {
        width: 1200,
        height: 800,
        name: 'image3',
        url: '/Guc-elektronigi.jpg',
        titleTR: 'Güç Elektroni̇ği̇',
        titleEN: 'Power Electronics'
      }
    },
    {
      id: 4,
      href: '/products?category=ozel-cozumler',
      attributes: {
        width: 1200,
        height: 800,
        name: 'image4',
        url: '/Ozel-Cozumler.png',
        titleTR: 'Özel Çözümler',
        titleEN: 'Special Solutions'
      }
    }
  ]
  return <div className="pt-16 justify-center rounded-lg flex flex-col mx-4 md:mx-10 xl:mx-20 mb-6 md:mb-16 h-full">
    <div className="h-full flex-col grid grid-cols-2 grid-rows-4 md:grid-cols-4 md:grid-rows-2 gap-4 items-center mb-6 md:mb-16 auto-rows-[1fr]">
      {images.map((image, index) => {
        const { width, height, name, url, titleTR, titleEN } = image.attributes
        return <ConditionalLink item={image} className={`relative w-full h-full ${index === 0 ? 'col-span-2 row-span-2' : index === 1 ? 'col-span-2 md:max-h-[calc(25vw-3.5rem)]' : ''}`}
          key={image.id}>
          <Image
            className={`max-md:my-0 rounded-lg h-full`}
            alt={name}
            width={width}
            height={height}
            // src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`}
            src={`${url}`}
            priority
          />

          <h2 className={`${image?.attributes?.darkImage !== true ? 'text-[#005770]': 'text-white'}  font-normal text-xl xl:text-4xl max-w-[35%] absolute bottom-4 xl:bottom-8 left-4 xl:left-8`}>
            {locale === 'tr' ? titleTR : titleEN}
          </h2>
        </ConditionalLink>

      })}
    </div>
  </div>
};

export default Sections;