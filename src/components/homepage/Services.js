import React from 'react';
import Image from 'next/image';
import { ConditionalLink } from '../common';

const Services = ({locale}) => {
  const services = [
    {
        id: 1,
        href: '/ascharge',
        attributes: {
            titleTR: 'Ascharge',
            titleEN: 'Ascharge',
            descriptionTR: 'ASPOWER’ın elektrikli araç şarj sistemleri için özel olarak uzmanlaşmış alt markasıdır. 7kW - 800kW arası şarj istasyonlarına sahip ASCHARGE %94 yerli üretimden faydalanmaktadır. Halihazırda 350’den fazla lokasyonda faaliyet göstermekte ve daha da geniş sahalara ulaşabilmek için çalışmalarını sürdürmektedir.',
            descriptionEN: 'ASCHARGE is ASPOWER\'s specialized sub-brand for electric vehicle charging systems. With charging stations ranging from 7kW to 800kW, ASCHARGE utilizes 94% domestic production. It currently operates in more than 350 locations and continues its efforts to reach even wider areas.',
            image: {
                width: 1000,
                height: 1000,
                name: 'image1',
                url: '/Ascharge.jpg'
            }
        }
    },
    {
        id: 2,
        attributes: {
            titleTR: 'Yerli Yazılım',
            titleEN: 'Domestic Software',
            descriptionTR: 'Yerli yazılım gücümüz, uluslarası veri trafiğinde karşılaşabileceğimiz olası izinsiz erişim risklerine karşı önlem oluşturmaktadır. Yazılım anlamında teknik servis ve efektif güncelleme alma opsiyonları ve avantajları sunmaktadır.',
            descriptionEN: 'Our domestic software power creates a precaution against possible unauthorized access risks that we may encounter in international data traffic. It offers technical service and effective update options and advantages in terms of software.',
            image: {
                width: 1000,
                height: 1000,
                name: 'image2',
                url: '/Yazilim.jpg'
            }
        }
    },
    {
        id: 3,
        href: '/support',
        attributes: {
            titleTR: 'Teknik Destek',
            titleEN: 'Technical Support',
            descriptionTR: 'ASPOWER müşterilerinin teknik destek ihtiyaçlarını güçlü AR-GE ekibiyle yerinde çözer ve satış sonrasında karşılaşılabilecek olası problemlerde yine hem ekipman hem de kendi mühendis ve teknisyen ekibiyle oldukça güçlü bir destek sağlamaktadır.',
            descriptionEN: 'ASPOWER solves the technical support needs of its customers on-site with its strong R&D team and provides very strong support with both equipment and its own engineer and technician team in possible problems that may be encountered after sales.',
            image: {
                width: 1000,
                height: 1000,
                name: 'image3',
                url: '/Teknik-Destek.png'
            }
        }
    }
]
  return (
    <div className="pt-4 justify-center rounded-lg flex flex-col md:flex-row gap-4 md:mx-10 xl:mx-20 mb-6 xl:mb-16 h-full">
      {services.map((service, index) => {
        const { titleTR, titleEN, descriptionTR, descriptionEN, image } = service.attributes;
        const { width, height, name, url } = image;
        return <ConditionalLink item={service} className="relative flex flex-col gap-4 xl:w-1/3" key={service.id}>
          <Image
                className={`max-md:my-0 md:rounded-2xl h-full`}
                alt={name}
                width={width}
                height={height}
                // src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`}
                src={`${url}`}
                priority
              />
          <div className="absolute xl:w-2/3 left-4 bottom-4 pr-4">
            <h1 className="font-semibold text-xl xl:text-4xl text-[#005770]">{locale === 'tr' ? titleTR : titleEN}</h1>
            <p className="text-xs xl:text-sm text-[#005770]">{locale === 'tr' ? descriptionTR : descriptionEN}</p>
          </div>
        </ConditionalLink>
      })}
      {/* Your component content goes here */}
    </div>
  );
};

export default Services;