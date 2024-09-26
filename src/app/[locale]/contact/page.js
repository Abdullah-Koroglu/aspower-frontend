import Contact from '@/components/ascharge/Contact'
import locales from '@/locales'
import Banner from '@/components/products/Banner'
import React from 'react'
import DownloadCatalogue from '@/components/ascharge/DownloadCatalogue'

function page({params}) {
  const { locale } = params
  const currentLocale = locales[locale]
  return (
    <div>
      <Banner locale={locale} text={currentLocale.contact_form} />
      <Contact locale={locale} />
      <DownloadCatalogue locale={locale} />
    </div>
  )
}

export default page