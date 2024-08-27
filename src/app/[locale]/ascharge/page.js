import React from 'react';
import Banner from '@/components/ascharge/Banner';
import TabContainer from '@/components/ascharge/TabContainer';
import DescWithSingleImage from '@/components/ascharge/DescWithSingleImage';
import Carousel from '@/components/ascharge/Carousel';
import ContainerWithImage from '@/components/ascharge/ContainerWithImage';
import ImageContainer from '@/components/ascharge/ImageContainer';
import Contact from '@/components/ascharge/Contact';
import DownloadCatalogue from '@/components/ascharge/DownloadCatalogue';

const Page = ({ params }) => {
  const { locale } = params
  return (
    <main className={`flex min-h-[calc(100vh-10rem)] justify-center w-full overflow-hidden`}>
      <div className="flex flex-col w-screen 3xl:w-2/3 h-full">
        <Banner locale={locale}/> 
        <TabContainer locale={locale}/> 
        <DescWithSingleImage locale={locale}/>
        <Carousel locale={locale} />
        <ContainerWithImage locale={locale} />
        <ImageContainer locale={locale} />
        <Contact locale={locale} />
        <DownloadCatalogue locale={locale} />
      </div>
    </main>
  );
};

export default Page;