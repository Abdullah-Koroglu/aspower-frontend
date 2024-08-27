import Image from 'next/image';
import products from '@/data/productList';
import Link from 'next/link';
import locales from '@/locales';

export default function Footer({ locale }) {
  const currentLocale = locales[locale]
  return (
    <div className="bg-[#111B2D]">
      <div className="footer flex justify-between items-start flex-wrap overflow-hidden text-sm xl:text-base text-neutral-300 px-4 md:px-8 lg:px-16 3xl:w-2/3 pt-12 mx-auto pb-8 max-md:gap-8">
        <div className="md:pr-10 xl:pr-20 md:border-r border-gray-500 md:w-1/4 md:h-[25rem] xl:h-[22rem]">
          <p className="w-fit font-semibold text-white">
            ASPOWER ENERJİ VE ELEKTRONİK SANAYİ TİCARET A.Ş
          </p>
          <p className="mt-8">
            {currentLocale.company_description}
          </p>
        </div>
        <div className="md:px-8 xl:px-40 md:border-r border-gray-500 md:w-1/4 md:mx-auto flex flex-col gap-6 md:h-[25rem] xl:h-[22rem]">
          <p className="w-fit font-semibold text-white">
            {currentLocale.corporate_title}
          </p>
          <Link href="/institution-profile">
            <p className="w-fit hover:text-white">
              {currentLocale.company_profile}
            </p>
          </Link>
          <Link href="/certificates">
            <p className="w-fit hover:text-white">
              {currentLocale.certificates}
            </p>
          </Link>
          <Link href="/career">
            <p className="w-fit hover:text-white">
              {currentLocale.human_resources}
            </p>
          </Link>
        </div>
        <div className="md:px-8 xl:px-36 md:border-r border-gray-500 md:w-1/4 flex flex-col gap-6 h-[30rem] md:h-[25rem] xl:h-[22rem]">
          <p className="w-fit font-semibold text-white">
            {currentLocale.products_title}
          </p>

          {
            products.filter(category => category.passive !== true).map((product, index) => {
              return <Link key={index} href={product.href}>
                <p className="w-fit hover:text-white">
                  {locale === 'tr' ? product.titleTR : product.titleEN}
                </p>
              </Link>
            })
          }
        </div>

        <div className="md:px-8 xl:px-20 md:w-1/4 md:h-[25rem] xl:h-[22rem]">
          <p className="font-semibold text-white">
            ASPOWER ENERJİ VE ELEKTRONİK SANAYİ TİCARET A.Ş
          </p>
          <p className="mt-8">
            Genel Müdürlük & Fabrika İkitelli OSB Dersan B Blok (Trios) Sok. No:1 Kat:3 İç Kapı:137 Başakşehir/İstanbul
          </p>
          <p>
            Tel: +90 212 955 00 00
          </p>
          <p>
            Fax: +90 212 955 00 01
          </p>
          <p>
            Web: www.aspower.com.tr
          </p>
          <p>
            E-mail: info@aspower.com.tr
          </p>
          <p>
            Satış: teklif@aspower.com.tr
          </p>
        </div>
      </div>
      <div className="footer flex items-end flex-wrap overflow-hidden text-neutral-300 font-medium px-4 md:px-8 lg:px-16 3xl:w-2/3 mx-auto pb-8 pt-8">
        <Image alt="logo" className="w-28 md:w-40" src="/logo-beyaz.svg" width={300} height={300} />
        <div className="ml-4 text-xs xl:text-base">© Aspower 2024. {currentLocale.preserved}</div>
      </div>
      <div className="footer flex justify-center items-center flex-wrap overflow-hidden text-neutral-300 font-medium px-4 md:px-8 lg:px-16 3xl:w-2/3 mx-auto pb-8 pt-8 bg-[#0e1524]">
        Designed and Developed by <Link className="text-lime-300 ml-1 hover:text-white transition-all" href="http://ad-nouveau.com/" target="_blank" rel="noopener noreferrer">Ad Nouveau</Link>
      </div>
    </div>
  );
}
