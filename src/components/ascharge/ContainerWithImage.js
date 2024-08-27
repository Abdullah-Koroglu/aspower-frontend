import React from 'react'
import Image from 'next/image'

const ContainerWithImage = ({locale}) => {
  const data = {
    "titleTR": "Yazılım Desteği",
    "descriptionTR": "Ar-Ge ekibimiz tarafından tasarlanan mobil uygulamalar ve şarj yönetim sistemimiz; operatörlere üst düzeyde kontrol ve kullanıcı dostu bir deneyim sunmaktadır. Kullanıcılarınız mobil uygulama üzerinden rezervasyon yapabilir, şarj noktalarını görüntüleyebilir, şarj bakiyesi hakkında bilgi sahibi olup APP üzerinden şarj başlatma ve bitirme işlemlerini gerçekleştirebilir.",
    "description2TR": "OCPP ile uyumlu şarj ağı yönetimi çözümümüz sayesinde, faturalandırma ve ödeme yöntemlerine uzaktan da erişim sağlanabilmektedir.",
    "titleEN": "Software Support",
    "descriptionEN": "Our mobile applications and charging management system, designed by our R&D team, offer operators high-level control and a user-friendly experience. Your users can make reservations via the mobile app, view charging points, get information about their charging balance, and start and stop charging through the app.",
    "description2EN": "Thanks to our OCPP-compliant charging network management solution, billing and payment methods can also be accessed remotely.",
    "image": "/Refs/telefon-app.png"
  }
  
  return (
    <div
      className="mt-16 bg-[#111B2D] text-white px-4 md:px-10 xl:px-20 overflow-visible relative md:h-96 flex items-center"
    >
      <div className="flex flex-col md:flex-row justify-between gap-4 md:my-8 max-md:mt-4 max-md:pb-0 p-4 overflow-visible">
        <div>
          <h2 className="mb-4 text-2xl xl:text-5xl">{locale === 'tr' ? data.titleTR : data.titleEN}</h2>
          <div className="flex flex-col xl:flex-row items-start gap-8 justify-between">
            <div className="w-full md:w-96">
              <p className="text-sm">{locale === 'tr' ? data.descriptionTR : data.descriptionEN}</p>
            </div>
            <div
              className="w-96"
            >
              <p className="text-sm">{locale === 'tr' ? data.description2TR : data.description2EN}</p>
            </div>

          </div>
        </div>
        <Image
          className={`w-[calc(100vw-4rem)] md:w-60 xl:w-96 h-[26rem] top-[-2rem] object-top rounded-2xl md:absolute right-10 xl:right-64`}
          width={2000}
          height={1000}
          src={data.image}
          alt={'image'}
        />
      </div>
    </div>
  )
}

export default ContainerWithImage