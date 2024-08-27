'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const DescWithSingleImage = ({locale}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const pageData = [
    {
      titleTR: 'Nicelik',
      titleEN: "Quantity",
      descriptionTR: 'Yerli üretim araç şarj sistemlerimiz ile 350’yi aşkın lokasyonda aktif olarak sizlere hizmet vermekteyiz. Hem yurt dışı hem yurt içindeki hacmimizi genişletmek, iş ortaklarımıza daha yüksek üretim kapasitesi sunabilmek için inşa ettiğimiz 4000 m2 üretim alanına sahip yeni fabrikamızla çalışmalarımıza hız kesmeden devam ediyoruz.',
      descriptionEN: "With our locally produced vehicle charging systems, we are actively serving in more than 350 locations. We continue our work at full speed with our new factory, which has a 4000 m2 production area, built to expand our volume both domestically and internationally and to offer higher production capacity to our business partners.",
      image: '/nicelik.png'
    },
    {
      titleTR: 'Referanslar',
      titleEN: "References",
      descriptionTR: 'Firmamız, 7kW - 800kW arası şarj istasyonlarını %94 yerli olarak üretmekte aynı zamanda sektörün önde gelen isimlerinden; Aselsan, Türk Telekom, Smart Güneş Teknolojileri, Eksim Holding gibi öncü firmalarla birlikte çalışmaktadır.',
      descriptionEN: "Our company produces charging stations ranging from 7kW to 800kW with 94% local production and collaborates with leading companies in the sector such as Aselsan, Türk Telekom, Smart Solar Technologies, Eksim Holding.",
      image: '/Referanslar.png'
    },
    {
      titleTR: 'Uygulamalar',
      titleEN: "Applications",
      descriptionTR: 'Elektrikli araç şarj sistemlerimiz, müşterilerinizin yaşamını sürdürürken verdikleri molalarda istasyonlarınız sayesinde onlara eşlikçi olabilmenizi sağlamaktadır. Bir çok partnerimiz ile alışveriş merkezlerinde, işyerlerinde, sosyal tesislerde, otoyollarda vb. alanlarda ihtiyaçlara özel cihazlarımızla şarj hizmeti sunmaktayız.',
      descriptionEN: "Our electric vehicle charging systems allow you to accompany your customers during their stops at your stations while they continue their lives. We offer charging services in shopping malls, workplaces, social facilities, highways, etc., with devices tailored to meet specific needs, in collaboration with many partners.",
      image: '/Uygulamalar.jpeg'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === pageData.length - 1 ? 0 : prevSlide + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [])
  return (
    <div className="flex flex-col md:flex-row gap-4 my-8 mt-28">
      <div className="flex flex-col mb-8 md:mb-0 ml-4 md:ml-10 xl:ml-20 pr-4 items-center md:w-[45vw] xl:w-[25vw] md:h-[66vh] xl:h-44 justify-between">
        {pageData.map((data, index) => <div 
          onMouseEnter={() => setCurrentSlide(index)} 
          className={`transition-all ${index === currentSlide ? 'text-[#005770]': 'hidden md:block text-[#ACC2C6]'}`}
        >
          <h2 className="text-xl mb-4 transition-all">{locale === 'tr' ? data.titleTR : data.titleEN}</h2>
          <p className="text-sm transition-all">{locale === 'tr' ? data.descriptionTR : data.descriptionEN}</p>
        </div>)
        }
      </div>
      <Image
        className={`md:h-[66vh] md:w-[50vw] xl:w-[70vw] md:rounded-l-2xl transition-all ml-auto`}
        alt={'image1'}
        width={3000}
        height={3000}
        src={pageData[currentSlide].image}
        priority
      />
    </div>
  )
}

export default DescWithSingleImage