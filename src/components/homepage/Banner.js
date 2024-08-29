'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Banner = ({locale}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      image: 'product-family-sekans.jpg',
      titleTR: 'Elektrikli Araç Şarj Sistemleri',
      titleEN: 'Electric Vehicle Charging Systems', 
      captionTR: 'Yenilenebilir Enerji, Savunma Sanayi, Ulaştırma ve Havacılık sektörlerinde faaliyet gösteren Aspower, alanında uzman ve tecrübeli AR-GE mühendisleri, üretim ekibi ile proje ve yönetim kadrosu sayesinde sektördeki yenilikçi çözümlere hızlıca adapte olup hayata geçirmekte ve ileri seviye teknolojiler sunmaktadır.',
      captionEN: 'Aspower, operating in Renewable Energy, Defense Industry, Transportation and Aviation sectors, quickly adapts to and implements innovative solutions in the sector and offers advanced technologies thanks to its expert and experienced R&D engineers, production team and project and management staff.', // Replace with actual English translation
    },
    {
      id: 2,
      image: 'Enerji-Depolama-Sistemleri.jpg',
      titleTR: 'Enerji Depolama Sistemleri',
      titleEN: 'Energy Storage Systems',
      captionTR: 'Yenilenebilir Enerji, Savunma Sanayi, Ulaştırma ve Havacılık sektörlerinde faaliyet gösteren Aspower, alanında uzman ve tecrübeli AR-GE mühendisleri, üretim ekibi ile proje ve yönetim kadrosu sayesinde sektördeki yenilikçi çözümlere hızlıca adapte olup hayata geçirmekte ve ileri seviye teknolojiler sunmaktadır.',
      captionEN: 'Aspower, operating in Renewable Energy, Defense Industry, Transportation and Aviation sectors, quickly adapts to and implements innovative solutions in the sector and offers advanced technologies thanks to its expert and experienced R&D engineers, production team and project and management staff.', // Replace with actual English translation
    },
    {
      id: 3,
      image: 'nicelik.png',
      titleTR: 'Güç Elektroniği',
      titleEN: 'Power Electronics',
      captionTR: 'Yenilenebilir Enerji, Savunma Sanayi, Ulaştırma ve Havacılık sektörlerinde faaliyet gösteren Aspower, alanında uzman ve tecrübeli AR-GE mühendisleri, üretim ekibi ile proje ve yönetim kadrosu sayesinde sektördeki yenilikçi çözümlere hızlıca adapte olup hayata geçirmekte ve ileri seviye teknolojiler sunmaktadır.',
      captionEN: 'Aspower, operating in Renewable Energy, Defense Industry, Transportation and Aviation sectors, quickly adapts to and implements innovative solutions in the sector and offers advanced technologies thanks to its expert and experienced R&D engineers, production team and project and management staff.', // Replace with actual English translation
    },
    {
      id: 4,
      image: 'ozel-cozumler.jpg',
      titleTR: 'Özel Çözümler',
      titleEN: 'Special Solutions',
      captionTR: 'Yenilenebilir Enerji, Savunma Sanayi, Ulaştırma ve Havacılık sektörlerinde faaliyet gösteren Aspower, alanında uzman ve tecrübeli AR-GE mühendisleri, üretim ekibi ile proje ve yönetim kadrosu sayesinde sektördeki yenilikçi çözümlere hızlıca adapte olup hayata geçirmekte ve ileri seviye teknolojiler sunmaktadır.',
      captionEN: 'Aspower, operating in Renewable Energy, Defense Industry, Transportation and Aviation sectors, quickly adapts to and implements innovative solutions in the sector and offers advanced technologies thanks to its expert and experienced R&D engineers, production team and project and management staff.', // Replace with actual English translation
    },
  ];

  const handleIncrement = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleIncrement();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[80vh] md:h-screen relative">
      <div className="slider">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`h-[80vh] md:h-screen text-white flex items-end md:items-start justify-start p-8 md:px-10 xl:px-20 transition-all duration-500 absolute w-full ${index === currentSlide ? '' : 'opacity-0'}`}
          >
            <Image
              className="object-cover absolute top-0 left-0 w-full h-full"
              src={`/${slide.image}`}
              alt={slide.titleTR}
              layout="fill"
              objectFit="cover"
            />
            <div className="w-full xl:w-1/4 md:mt-[60vh] xl:mt-[30vh] 2xl:mt-[50vh] z-50">
              <h1 className="text-3xl md:text-4xl md:font-light md:max-w-[70%]">{locale === 'tr' ? slide.titleTR : slide.titleEN}</h1>
              <p className="text-xl font-light hidden md:block">{locale === 'tr' ? slide.captionTR : slide.captionEN}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute flex gap-3 z-10 bottom-4 slider-controls">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={`w-[.35rem] h-[.35rem] rounded-full ${index === currentSlide ? 'bg-[#65D5EF]' : 'bg-white'}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;