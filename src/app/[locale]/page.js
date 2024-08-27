import Banner from '@/components/homepage/Banner'
import Sections from '@/components/homepage/Sections';
import InfoParagraph from '@/components/homepage/InfoParagraph';
import Services from '@/components/homepage/Services';
import DoubleSection from '@/components/homepage/DoubleSection';
import DownloadCatalogue from '@/components/ascharge/DownloadCatalogue';

const Home = async ({ params }) => {
  const { locale } = params

  return (
    <main className={`flex min-h-[calc(100vh-10rem)] justify-center w-full overflow-hidden`}>
      <div className="flex flex-col gap-4 w-screen 3xl:w-2/3 h-full">
        <Banner locale={locale}/>
        <Sections locale={locale}/>
        <InfoParagraph locale={locale}/>
        <Services locale={locale}/>
        <DoubleSection locale={locale}/>
        <DownloadCatalogue locale={locale}/>
      </div>
    </main>
  );
}

export default Home