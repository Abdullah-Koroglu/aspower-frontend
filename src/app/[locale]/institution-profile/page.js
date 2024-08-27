import locales from '@/locales'
import Banner from '@/components/products/Banner'
import React from 'react'

const page = ({params}) => {
  const {locale} = params
  const currentLocale = locales[locale]
  const bodyEN = [
    "Industry, technology, communication, transportation, healthcare services, daily life... In every aspect of life, the need for continuous energy supply in a high-quality form to ensure uninterrupted progress and development has become indisputable.",
    "ASPOWER is a company established and specialized in providing energy in the desired form, with high quality and uninterrupted service. With over 30 years of experience in the power electronics sector, ASPOWER produces and supplies various uniquely designed power electronics products to both domestic and export markets.",
    "In addition to standard products such as Uninterruptible Power Supplies, Frequency Converters, Inverters, Battery Chargers, Rectifiers, Electric Vehicle DC Fast Charging Systems, Solar Energy Inverters, Energy Storage Systems, and Motor Control Units, our company, with its strong R&D infrastructure, can locally develop and manufacture custom-designed products tailored to user needs and suitable for different environmental conditions and/or requirements.",
    "Rapidly becoming one of the esteemed companies in our country, ASPOWER, thanks to its R&D infrastructure, has the knowledge and engineering capability to meet all kinds of needs in the field of power electronics. With the understanding of 'Customer Satisfaction First,' ASPOWER designs, manufactures, and provides service for high-efficiency devices with advanced technology that are sensitive to society and the environment, utilizing local and national resources.",
    "ASPOWER, which places the sustainability of our environment and the continuous improvement of its employees' living standards at the center of its policies along with quality processes and products, holds ISO 9001, ISO 14001, OHS 18001, ISO 45001, TSE-HYB 12643, and Domestic Goods Certificates.",
    "ASPOWER, offering high-quality power electronics products not only in our country but also worldwide, aims to create a growing added value by closely following global developments with local and national resources and contributing to society and the country by ensuring that our resources are utilized within our country."
  ];
  
  const bodyTR = [
    "Sanayi, teknoloji, haberleşme, ulaşım, sağlık hizmetleri, gündelik yaşam… Hayatın her alanında kesintisiz olarak ilerlemenin ve gelişimin sağlanmasında enerjinin sürekliliği ve kaliteli formda arzının gerekliliği tartışılmaz olmuştur.",
    "ASPOWER, enerjinin istenen formda, kaliteli ve kesintisiz olarak kullanıcının hizmetine sunulması için kurulmuş ve bu alanda uzmanlaşmış bir firma olarak faaliyet göstermektedir. Bu amaç kapsamında güç elektroniği sektöründe 30 yılı aşkın tecrübeli personelleri ile hem ülkemize hem de ihraç pazarlarına çeşitli özgün tasarımlı güç elektroniği ürünlerini üretmekte ve tedarik etmektedir.",
    "Başta Kesintisiz Güç Kaynağı olmak üzere Frekans Konvertörü, İnvertör, Akü Şarj Cihazı, Redresör, Elektrikli Araç DC Hızlı Şarj Sistemleri, Güneş Enerjisi İnvertörü, Enerji Depolama Sistemleri, Motor Kontrol Üniteleri gibi standart ürünlerin yanı sıra Şirketimiz, güçlü AR-GE altyapısıyla kullanıcının ihtiyacına özel olarak talep ettiği, farklı çevresel koşullara ve/veya isterlere uygun Özel Tasarım Ürünlerini de bünyesinde yerli olarak geliştirip üretilebilmektedir.",
    "Ülkemizin saygın firmaları arasına hızla giren ASPOWER, AR-GE altyapısı sayesinde, güç elektroniği alanında müşterilerinin her türlü ihtiyacını karşılayacak bilgi birikimine ve mühendislik kabiliyetine sahiptir. “Önce müşteri memnuniyeti” anlayışı ile birlikte topluma ve çevreye duyarlı, ileri düzey teknoloji ile verimliliği yüksek cihazları yerli ve milli imkânlarla özgün bir şekilde tasarlamakta, üretmekte ve servisini vermektedir.",
    "Kaliteli süreçlerle ve ürünlerle birlikte çevremizin sürdürülebilirliğini sağlamayı ve personellerinin yaşam standartlarını sürekli olarak iyileştirmeyi politikalarının merkezine alan ASPOWER ISO 9001, ISO 14001 , OHS 18001, ISO 45001 , TSE-HYB 12643 ve Yerli Malı Belgeleri haizdir.",
    "Sadece ülkemizde değil tüm dünyaya güç elektroniği alanında kaliteli ürünler sunan ASPOWER, yerli ve milli kaynaklarla, dünyadaki gelişmeleri yakından takip ederek büyüyen bir katma değer oluşturmayı ve kaynaklarımızın ülkemiz içerisinde değerlendirilmesine sağladığı katkı yoluyla topluma ve ülkeye fayda sağlamayı amaç edinmiştir."
  ];

  const body =  locale === 'tr' ? bodyTR: bodyEN;

  
  return (
    <div>
      <Banner text={currentLocale.company_profile} locale={locale}/>
      <div className="flex items-start justify-start px-4 md:px-20 py-20 gap-8">
      <div className="flex flex-col h-fit items-start mx-auto max-w-[70rem]">
        <h2 className="text-2xl md:text-5xl sans w-2/3">{currentLocale.company_profile}</h2>
        <div className="mt-10 mb-20">
          {
          body
          ?.map((item, index) => (
            <p key={index} className="text-xl font-base mb-4 text-[#005770]">{item}</p>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}

export default page