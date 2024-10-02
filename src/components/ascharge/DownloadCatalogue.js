'use client'
import { useEffect, useState } from 'react';
import locales from '@/locales';
import CatalogueSelector from './CatalogueSelector';

const DownloadCatalogue = ({ locale }) => {
  const [data, setData] = useState(null);
  const currentLocale = locales[locale];

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/catalogues?populate[katalog][populate]=Dosya`);
      const result = await res.json();

      setData(result.data);
    };
    fetchData();
  }, [locale]); // Fetches data whenever locale changes

  if (!data) return <div>Loading...</div>;

  return <CatalogueSelector data={data} locale={locale} currentLocale={currentLocale} />;
};

export default DownloadCatalogue;