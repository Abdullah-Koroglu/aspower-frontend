import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import locales from '@/locales'

const ImageContainer = ({ locale }) => {
  const currentLocale = locales[locale]
  const data = {
    "titleTR": "Mobil Hızlı Şarj Sistemi",
    "descriptionTR": "Mobil Hızlı Şarj Sistemi ile müşterilerinize taşınabilir şarj istasyonu hizmeti sunabilmeniz için çalışmaktayız. Fiziksel altyapıya kavuşturulan araçlara kurulacak batarya ve şarj yönetim sistemi ile şarj istasyonuna hareket kazandırmaktayız. Özellikle yolda kalmış vb. sebeplerden şarj istasyonlarına gidemeyen müşterilerin konumuna giderek işlemlerinizi hızlı ve kolayca gerçekleştirebilirsiniz.",
    "titleEN": "Mobile Fast Charging System",
    "descriptionEN": "We work to provide your customers with a portable charging station service with our Mobile Fast Charging System. By equipping vehicles with battery and charging management systems, we bring mobility to the charging station. Especially for customers who cannot reach charging stations due to reasons such as being stranded on the road, you can quickly and easily perform your operations by going to their location.",
    "image": "/Refs/mobil-sarj-araci.png"
  }

  return (
    <div style={{ backgroundSize: 'cover', backgroundPosition: 'center center' }} className="bg-[url('/Refs/mobil-sarj-araci-mobil.jpg')] md:bg-[url('/Refs/mobil-sarj-araci.png')] flex justify-between gap-4 p-4 pt-10 md:max-xl:px-10 xl:pt-24">
      <div className="flex items-end gap-8 justify-between xl:p-16 max-md:pb-[38rem] max-xl:pb-32">
        <div className="w-96 text-white">
          <h2 className="mb-8 text-2xl xl:text-5xl">{locale === 'tr' ? data.titleTR : data.titleEN}</h2>
          <p className="text-sm mb-8">{locale === 'tr' ? data.descriptionTR : data.descriptionEN}</p>
          <Link href="/ascharge/products" className={`text-lg md:text-2xl text-white transition-all tab-selector bg-sky-300 hover:bg-sky-200 p-2 px-12 md:px-20 rounded-full self-start my-16 mt-8`}>{currentLocale.review}</Link>
        </div>
      </div>
    </div>
  )
}

export default ImageContainer