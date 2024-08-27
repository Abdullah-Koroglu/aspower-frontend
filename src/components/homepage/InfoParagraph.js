import React from 'react';

const InfoParagraph = ({locale}) => {
  const data = {
    titleTR: 'ASPOWER',
    titleEN: 'ASPOWER',
    paragraph1TR: 'ASPOWER, 2019 yılında kurulan bir teknoloji şirketidir. Yenilenebilir enerji, savunma sanayi, ulaştırma ve havacılık sektörlerinde faaliyet gösteremektedir. Uzman ve tecrübeli AR-GE mühendisleri, üretim ekibi ile proje ve yönetim kadrosu sayesinde, sektördeki yenilikçi çözümleri hızlıca adapte olup hayata geçirmekte ve ileri teknolojiler sunmaktadır.',
    paragraph1EN: 'ASPOWER is a technology company founded in 2019. It operates in the renewable energy, defense industry, transportation, and aviation sectors. Thanks to its expert and experienced R&D engineers, production team, and project and management staff, it quickly adapts to and implements innovative solutions in the sector and offers advanced technologies.',
    paragraph2TR: 'Sundukları projeler sayesinde uluslararası birçok projede yer alan ASPOWER, geliştirdiği ileri teknolojiler ve inovatif çözümlerle de sektörde birçok ödül kazanmış ve sürdürülebilirlik alanında önemli başarılar elde etmiştir.',
    paragraph2EN: 'ASPOWER has participated in many international projects thanks to the projects they offer. With the advanced technologies and innovative solutions it has developed, it has also won many awards in the sector and achieved significant success in the field of sustainability.'
  }
  return (
    <div className="pt-4 justify-center rounded-lg flex flex-col px-4  md:px-10 xl:px-20 mb-6 md:mb-16 h-full w-full">
      <h1 className="text-[#111B2D] text-xl md:text-2xl xl:text-4xl font-medium">{locale === 'tr' ? data.titleTR : data.titleEN}</h1>
      <div className="flex flex-col md:flex-row gap-4 text-[#005770] text-sm">
        <p className="md:w-1/2 xl:w-1/3">{locale === 'tr' ? data.paragraph1TR : data.paragraph1EN}</p>
        <p className="md:w-1/2 xl:w-1/3">{locale === 'tr' ? data.paragraph2TR : data.paragraph2EN}</p>
      </div>
    </div>
  );
};

export default InfoParagraph;