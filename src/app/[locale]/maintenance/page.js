import locales from '@/locales'
import Banner from '@/components/products/Banner'
import React from 'react'

const page = ({params}) => {
  const {locale} = params
  const currentLocale = locales[locale]
  const bodyTR = 
  ['SATIŞ ÖNCESİ',
    'Güç tesbiti',
    'Elektriksel problem yaşayan ve bunun giderilmesi için uzman görüşüne ihtiyaç duyan müşterilerimize verdiğimiz keşif ve danışmanlık hizmetidir. Satış grubunun yönlendirmesiyle uzman mühendis ve teknikerlerimiz tarafından problem yaşanan yerde gerekli ölçüm yapılır. Bu ölçümler sonrasında müşterinin beklentileri de göz önünde tutularak en ekonomik çözüm geliştirilir. Bu sonuçlar bir rapor halinde isteği yapan satış gurubundaki ilgiliye verilir. Bu hizmetimiz ücretsizdir.',
    'Özel Tip Güç Çözümleri Proje Danışmanlık Hizmetleri',
    'Özellikle Savunma ,Tersane ve Ulaştırma Sektörlerinin özel tip UPS , Redresör , İnvertör , Konvertör taleplerine uygun Arge , Tasarım , Üretim , Fabrika ve Saha Testleri ve Eğitim hizmetlerini , Proje Yönetimini tecrübeli konusunda uzman proje yöneticilerimiz ve kadromuz ile uzun yıllardır başarı ile gerçekleştirmekteyiz. Özel projelerde edinimiş bilgi ve birikimimiz sayesinde ,projelerinizin sorunsuz ve zamanında tamamlanmasını sağlayacak çözümlerimiz ile hizmetinizdeyiz.',
    'SATIŞ SONRASI',
    'Devreye Alma',
    'Satışı gerçekleştirilen çözümlerimiz , uygun tesisat altyapısı müşteriler tarafından hazır hale getirildiğinde uzman teknik servis personeli tarafından devreye alınır. Yetkili personel tarafınca devreye alınan tüm ürünlerimiz devreye alımından itibaren 2 yıl servis garantisi , 10 yıl boyunca yedek parça garantisi altındadır.',
    'Bakım Sözleşmesi Hizmetleri:',
    'Bakım Sözleşmeleri, garanti süreleri dolmuş cihazların arızalanmaması için gerekli önlemleri almak ve cihazlara periyodik olarak bakım yapılarak ekonomik ömürlerini uzatmayı amaçlamaktadır. Periyodik bakımlara rağmen cihazdan veya kullanım hatalarından dolayı cihazın arızalanması durumunda cihaza müdahale edilmektedir. Müşterilerimize sunduğumuz iki türlü sözleşme bulunmaktadır.',
    '1. Parça Dahil:',
    'Bu sözleşme kapsamında cihazlara yıllık periyodik bakım yapılır.',
    'Cihazın arızalanması durumunda teknik servisimiz müdahale edecektir. Bu müdahalede kullanılacak yedek parçalar için ücret istenmeyecektir.',
    'Yalnız kullanıcı hatası nedeniyle oluşan arızalarda parça ücreti müşteriye aittir. Aküler sarf malzemeleri olduğu için bu sözleşme kapsamına girmez.',
    '2. Parça Hariç:',
    'Bu sözleşme kapsamına cihazlara yıllık periyodik bakım yapılır.',
    'Cihazın arızalanması durumunda teknik servisimiz müdahale edecektir. Bu müdahalede sadece parça bedeli talep edilecektir.',
    'Satış Sonrası Servis Hizmetleri',
    'Firmamızdan satın almış olduğunuz ürünler malzeme ve işçilik hatalarına karşı 24 ay firmamızın garantisi altındadır. Garanti içi veya dışı olduğuna bakılmaksızın müşterilerimizden gelen arızalı cihazlar en kısa süre içinde onarılarak tekrar çalışır hale getirilmektedir. Cihazın büyüklüğüne ve arızanın cinsine göre gerekirse müşteri yerinde gerekirse teknik servis istasyonumuzda cihazınızın tüm arızaları giderilir',
    'AKÜ DEĞİŞİM VE GERİ DÖNÜŞÜM HİZMETLERİ',
    'Akü Değişim Hizmeti',
    'Aküler UPS (Kesintisiz Güç Kaynağı) Sistemi’nin en kritik elemanlarıdır.Akülerin ise tasarımına , kullanım şartlarına göre değişkenlik gösteren kullanım ömrü bulunmaktadır. Sisteminiz içindeki tek bir akünün bile arıza yapması ,Sisteminizin çalışmamasına , kritik yüklerinizin korunmamasına , iş sürekliliğinizin kesintiye uğramasına , veri , zaman ve işgücü kaybınıza sebep olabilir. Sistemlerinizin akü kontrollerini ASPOWER yetkili teknik personel ve servislerine yaptırarak , arızalı aküleri tesbit ettirebilir , değişim hizmeti alarak iş sürekliliğinizi koruyabilirsiniz.',
    'Akü Geri Dönüşüm Hizmeti',
    'Atılan elektronik techizat artan kullanım sebebiyle sanayileşmiş dünyadaki en hızlı büyüyen atık akımlarından biridir. Akülerinizin ömrü dolduğunda çevre sorumluluğu bilincinde kararlar vererek zararlı atıkların azalmasına yardımcı olabilirsiniz. ASPOWER Enerji olarak ömrünü doldurmuş akülerinizin çevre sorumluluğu bilinci ile , Atık Akü Yönetmenliğine uygun olarak imha edilmesini sağlıyoruz. Akü değişimi ve geri dönüşümü ile ilgili daha fazla bilgi almak isterseniz, lütfen bizlerle irtibata geçiniz.'
  ]

  const bodyEN = [
    "PRE-SALES",
    "Power Determination",
    "This is a consultation and discovery service provided to customers experiencing electrical problems and needing expert opinions to resolve them. Based on the sales team’s direction, our expert engineers and technicians perform the necessary measurements at the problem site. After these measurements, considering the customer’s expectations, the most economical solution is developed. These results are provided in a report to the relevant sales team member who requested it. This service is free of charge.",
    "Custom Power Solutions Project Consulting Services",
    "For defense, shipbuilding, and transportation sectors' custom UPS, rectifiers, inverters, converters, and other requirements, we have been successfully providing R&D, design, production, factory and field tests, and training services with our experienced and specialized project managers and team for many years. With the knowledge and expertise gained from special projects, we provide solutions that ensure your projects are completed smoothly and on time.",
    "POST-SALES",
    "Commissioning",
    "Our solutions, once sold, are commissioned by our expert technical service personnel once the installation infrastructure has been prepared by the customers. All products commissioned by authorized personnel are covered by a 2-year service warranty and a 10-year spare parts warranty from the commissioning date.",
    "Maintenance Contract Services",
    "Maintenance contracts are designed to take necessary precautions to prevent malfunctions of devices after warranty periods have expired and to extend their economic lifespan by performing periodic maintenance. In case of device malfunctions due to device or usage errors despite periodic maintenance, the device is intervened. We offer two types of contracts to our customers.",
    "1. Parts Included:",
    "Under this contract, annual periodic maintenance is performed on devices.",
    "In case of device malfunctions, our technical service will intervene. No charge will be made for the spare parts used during this intervention.",
    "Only in the case of malfunctions due to user error, the cost of parts is the customer's responsibility. Batteries are consumables and are not covered under this contract.",
    "2. Parts Excluded:",
    "Under this contract, annual periodic maintenance is performed on devices.",
    "In case of device malfunctions, our technical service will intervene. Only the cost of parts will be charged.",
    "Post-Sales Service",
    "Products purchased from us are covered by a 24-month warranty against material and workmanship defects. Regardless of whether the warranty is valid or expired, defective devices reported by customers are repaired and restored to working condition as quickly as possible. Depending on the size of the device and the nature of the defect, repairs may be conducted either on-site or at our technical service station.",
    "BATTERY REPLACEMENT AND RECYCLE SERVICES",
    "Battery Replacement Service",
    "Batteries are the most critical components of an UPS (Uninterruptible Power Supply) system. The lifespan of batteries varies according to their design and usage conditions. Even a single faulty battery in your system can lead to system failure, failure to protect critical loads, interruption of business continuity, and loss of data, time, and labor. By having ASPOWER’s authorized technical personnel and services perform battery checks, you can identify faulty batteries and obtain replacement services to maintain your business continuity.",
    "Battery Recycling Service",
    "Electronic equipment waste is one of the fastest-growing waste streams in the industrialized world due to increased usage. When your batteries reach the end of their life, you can help reduce harmful waste by making environmentally responsible decisions. At ASPOWER Energy, we ensure that your expired batteries are disposed of in accordance with the Waste Battery Regulation with environmental responsibility. For more information on battery replacement and recycling, please contact us."
  ]

  const body =  locale === 'tr' ? bodyTR: bodyEN;
  
  return (
    <div>
      <Banner text={currentLocale.preSalePostSale} locale={locale} />
      <div className="flex items-start justify-start px-4 md:px-20 py-20 gap-8">
      <div className="flex flex-col h-fit items-start mx-auto max-w-[70rem]">
        <h2 className="text-2xl md:text-5xl sans w-2/3">{currentLocale.preSalePostSale}</h2>
        <div className="mt-10 mb-20 text-[#005770]">
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