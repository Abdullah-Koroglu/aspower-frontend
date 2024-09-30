import locales from '@/locales'
import CatalogueSelector from './CatalogueSelector';

const DownloadCatalogue = async ({locale}) => {
  const currentLocale = locales[locale]
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/catalogues`)
  const data = await res.json()

  return <CatalogueSelector data={data.data} currentLocale={currentLocale} />
};

export default DownloadCatalogue;