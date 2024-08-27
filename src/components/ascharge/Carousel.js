import Image from 'next/image'
import React from 'react'

const Carousel = ({locale}) => {
  const items = [
    {
      "titleTR": "Lokasyon Partnerligi",
      "descriptionTR": "Lokasyon partnerliği sistemimiz ile değerlendirmek istediğiniz alanlarınızda sizlerle işbirliği yapma fırsatı sunuyoruz. İşyeri, okul, otopark, sosyal tesis vb. şarj istasyonlarına ihtiyaç duyulan alanları bizlerle paylaşma durumunda sizlerle iş birliği oluşturarak ihtiyaçlarınıza çözüme kavuşturmayı amaçlıyoruz.",
      "titleEN": "Location Partnership",
      "descriptionEN": "With our location partnership system, we offer you the opportunity to collaborate in the areas you wish to utilize. By sharing areas such as workplaces, schools, parking lots, social facilities, etc., where charging stations are needed, we aim to collaborate with you to find solutions to your needs.",
      "image": "/Refs/lokasyon-1.png"
    },
    {
      "titleTR": "Ticari Partnerlik",
      "descriptionTR": "Ticari partnerlik kapsamında firmamız, müşterilerinin ticari girişimlerinde katma değer sağlayan tutumlar sergilemektedir. Yüksek adette ürün tedariği, yerinde teknik destek ve yerli yazılım ile sizleri olası tehlikelere karşı koruma altına alıyoruz. Ayrıca Mobil uygulamanıza ekleyebileceğimiz API desteği sayesinde, şarj istasyonlarınızın uygunluk durumunu takip etmeyi kolaylaştırıyoruz.",
      "titleEN": "Commercial Partnership",
      "descriptionEN": "As part of our commercial partnership, our company adopts approaches that add value to our customers' commercial ventures. We provide high-volume product supply, on-site technical support, and local software to protect you against potential risks. Additionally, with API support that can be integrated into your mobile app, we make it easier to monitor the availability of your charging stations.",
      "image": "/Refs/ticari-1.png"
    }
  ]
  
  const RenderItem = ({ item, index }) => {
    return (
      <div className={`flex flex-col md:items-end ${index % 2 === 0 ? 'md:flex-row-reverse': 'md:flex-row'}`}>
        <div className={`${index % 2 === 1 ? 'px-4 md:pr-4 xl:pr-8': 'px-4 md:pl-4 xl:pl-8'} md:w-1/3 xl:w-1/4 mb-8 md:mb-0`}>
          <h2 className="mb-4 md:mb-0 text-lg xl:text-xl">{locale === 'tr' ? item.titleTR : item.titleEN}</h2>
          <p className="text-xs xl:text-sm text-[#005770]">{locale === 'tr' ? item.descriptionTR : item.descriptionEN}</p>
        </div>
        <Image
          className={`lg:w-3/4 md:w-2/3 md:rounded-2xl`}
          width={3000}
          height={3000}
          src={item.image}
          alt={item.description}
        />
      </div>
    )
  }

  return (
    <div className="mt-20 md:mt-0 flex flex-col gap-16 md:p-10 xl:p-20 ">
      {
        items.map((item, index) => {
          return (
            <RenderItem item={item} index={index} key={index} />
          )
        })
      }
    </div>
  )
}

export default Carousel