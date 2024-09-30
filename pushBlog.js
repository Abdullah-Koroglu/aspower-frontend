const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const blogs = [{
  image: '/blog8.png',
  images: ['/blog8.png'],
  titleTR: 'ASPOWER Enerji TSSK-8.Proje Pazarı ve İş Birliği Zirvesi’nde!',
  titleEN: 'ASPOWER Energy at TSSK-8th Project Market and Cooperation Summit!',
  bodyTR: [
    { text: 'ASPOWER Enerji olarak Teknokent Savunma Sanayii Kümelenmesi 8. Proje Pazarı ve İş Birliği Zirvesinde Yüksek Teknoloji ürünlerimizi sergilemiş ve değerli katılımcılarımıza ürünlerimiz hakkında bilgilendirmelerimizi yapmış bulunmaktayız.' },
  ],
  bodyEN: [
    { text: 'As ASPOWER Energy, we exhibited our High Technology products at the 8th Project Market and Cooperation Summit of the Technopark Defense Industry Cluster and informed our valued participants about our products.' },
  ],
  descTR: 'ASPOWER Enerji olarak Teknokent Savunma Sanayii Kümelenmesi 8. Proje Pazarı ve...',
  descEN: 'As ASPOWER Energy, we exhibited our High Technology products at the 8th Project Market and...',
  id: "aspower-enerji-tssk-8-proje-pazari-ve-is-birligi-zirvesinde"
},
{
  image: '/blog5.png',
  images: ['/blog5.png'],
  titleTR: 'Genel Müdürümüz Sn. Ceyhun Karasayar\'ın Ekotürk Televizyonundaki Röportajı',
  titleEN: 'Interview of Our General Manager Mr. Ceyhun Karasayar on Ekotürk Television',
  bodyTR: [
    { text: 'EKOTÜRK televizyonu Çevre Dostu Şirketler programına konuk olan Genel Müdürümüz Sayın Ceyhun Karasayar\'ın Elektrikli Araç Şarj Sistemleri, Yenilenebilir Enerji, Enerji Depolama Sistemleri ve bu alanlarda yerli üretimin stratejik önemi konulu röportajı 1 Ekim Pazar saat 19:00\'da yayınlandı.' },
  ],
  bodyEN: [
    { text: 'The interview of our General Manager Mr. Ceyhun Karasayar on Electric Vehicle Charging Systems, Renewable Energy, Energy Storage Systems and the strategic importance of domestic production in these fields, who was a guest on EKOTÜRK television\'s Environmentally Friendly Companies program, was broadcast on Sunday, October 1st at 19:00.' },
  ],
  descTR: 'EKOTÜRK televizyonu Çevre Dostu Şirketler programına konuk olan Genel Müdürümüz Sayın Ceyhun Karasayar\'ın...',
  descEN: 'The interview of our General Manager Mr. Ceyhun Karasayar on Electric Vehicle Charging Systems, Renewable Energy,...',
  id: "genel-mudurumuz-sn-ceyhun-karasayarin-ekoturk-televizyonundaki-roportaji"
},
{
  image: '/blog3.png',
  images: ['/blog3.png'],
  titleTR: 'Elektrikli Araçlar için Hızlı Şarj İstasyonu Hibe Programı Hakkında',
  titleEN: 'About the Fast Charging Station Grant Program for Electric Vehicles',
  bodyTR: [
    { text: 'Sanayi ve Teknoloji Bakanlığı tarafından yayınlanmış olan Elektrikli Araçlar için Hızlı Şarj İstasyonu Hibe Programına 15 Haziran 2022 ye kadar başvurular devam etmektedir.', },
    { text: 'İhaleye katilmayi düşünenen yatırımcılar için hazırladığımız excel çalışmasına buradan ulaşabilirsiniz.', },
    { text: 'Sizlere yerli Şarj istasyonları, şarj ağı yönetim yazılımı ve mobil uygulama için uçtan uca destek vermeye hazırız.' },
  ],
  bodyEN: [
    { text: 'Applications for the Fast Charging Station Grant Program for Electric Vehicles, published by the Ministry of Industry and Technology, continue until June 15, 2022.', },
    { text: 'You can access the excel study we have prepared for investors who are considering participating in the tender here.', },
    { text: 'We are ready to provide you with end-to-end support for domestic charging stations, charging network management software and mobile applications.' },
  ],
  descTR: 'Sanayi ve Teknoloji Bakanlığı tarafından yayınlanmış olan Elektrikli Araçlar için Hızlı Şarj İstasyonu...',
  descEN: 'Applications for the Fast Charging Station Grant Program for Electric Vehicles, published by the Ministry...',
  id: "elektrikli-araclar-icin-hizli-sarj-istasyonu-hibe-programi-hakkinda"
},
{
  image: '/blog7.png',
  images: ['/blog7.png'],
  titleTR: 'ASPOWER Enerji TSSK-8.Proje Pazarı ve İş Birliği Zirvesi’nde!',
  titleEN: 'ASPOWER Energy at TSSK-8th Project Market and Cooperation Summit!', // Assuming this is the same event as the first entry
  bodyTR: [
    { text: '15 Uluslararası Savunma Sanayi Fuarı', },
    { text: 'https://idef.com.tr' },
  ],
  bodyEN: [
    { text: '15th International Defense Industry Fair', },
    { text: 'https://idef.com.tr' },
  ],
  descTR: '15 Uluslararası Savunma Sanayi Fuarı',
  descEN: '15th International Defense Industry Fair',
  id: "15-uluslararasi-savunma-sanayi-fuari"
},
{
  image: '/blog1.png',
  images: ['/blog1.png'],
  titleTR: 'TRT Haber',
  titleEN: 'TRT News',
  bodyTR: [
    { text: 'T.C. Sanayi ve Teknoloji Bakanlığı | Republic Of Turkey Ministry of Industry and Technology \'nın 81 ilde hızlı şarj istasyonlarının kurulmasına yönelik destek programıyla ilgili Milli Teknoloji Genel Müdürü Zekeriya Çoştu, EPDK bahçesinde kurulumunu gerçekleştirdiğimiz, bir vizyon projesi olan Türkiye\'nin ilk %100 yerli üretim Off-Grid (Şebekeden Bağımsız) çalışan Elektrikli Araç DC Hızlı Şarj İstasyonu önünde TRT Haber\'e süreç hakkında bilgi verdi.', },
    { text: 'Yayın esnasında Energy Market Regulatory Authority (EMRA) (EPDK) başkan yardımcısı Hacı Ali Ulutaş, Elektrikli Araçlar Şarj Hizmeti Grup Başkanı Vedat Akdağ ve Genel müdürümüz Ceyhun Karasayar, sayın Coştu’ya eşlik ettiler.', },
    { text: 'Haberde yer alan aracı şarj eden şarj istasyonları, şebekeden bağımsız olarak, güneş enerjisinden elde edilen enerjiyi, Lityum-iyon bataryalarda depolayarak son kullanıcılara tamamen yeşil enerji imkanı sunmaktadır. ASPOWER olarak, ülkemizin kaynaklarını kullanarak yerli üretim ile en yeni teknolojileri üretiyor ve geliştiriyoruz.', },
    { text: 'Haber Linki: https://lnkd.in/djsfmwJD' },
  ],
  bodyEN: [

    { text: 'Zekeriya Çoştu, General Manager of National Technology, provided information to TRT Haber about the support program of the Ministry of Industry and Technology of the Republic of Turkey for the establishment of fast charging stations in 81 provinces, in front of Turkey\'s first 100% domestic production Off-Grid Electric Vehicle DC Fast Charging Station, which we installed in the EPDK garden, a vision project.', },
    { text: 'During the broadcast, Energy Market Regulatory Authority (EMRA) (EPDK) Vice President Hacı Ali Ulutaş, Electric Vehicles Charging Service Group President Vedat Akdağ and our General Manager Ceyhun Karasayar accompanied Mr. Coştu.', },
    { text: 'The charging stations that charge the vehicle in the news offer end users a completely green energy opportunity by storing the energy obtained from solar energy in Lithium-ion batteries, independently of the grid. As ASPOWER, we produce and develop the latest technologies with domestic production using our country\'s resources.', },
    { text: 'News Link: https://lnkd.in/djsfmwJD' },

  ],
  descTR: 'T.C. Sanayi ve Teknoloji Bakanlığı | Republic Of Turkey Ministry of Industry and Technology \'nın...',
  descEN: 'Zekeriya Çoştu, General Manager of National Technology, provided information to TRT Haber about the support program...',
  id: "trt-haber"
},
{
  image: '/blog2.png',
  images: ['/blog2.png'],
  titleTR: 'Petroleum İstanbul Fuarı',
  titleEN: 'Petroleum Istanbul Fair',
  bodyTR: [
    { text: '31 Mart- 2 Nisan tarihleri arasında gerçekleşen Petroleum İstanbul fuarında yerli mühendislik altyapısıyla geliştirmiş olduğumuz “Elektrikli Araçların Hızlı Şarj Sistemleri” ürünümüzü tanıttık.', },
    { text: 'Sayın EPDK Başkanı Mustafa Yılmaz, standımızı ziyaret ederek ürünümüz hakkında detaylı bilgi aldı ve incelemelerde bulundu.', },
    { text: 'Sayın Yılmaz’a ziyaretleri ve yerli imkânlarımızla geliştirmiş olduğumuz ürünümüze vermiş olduğu destekleri için çok teşekkür ederiz.' },
  ],
  bodyEN: [
    { text: 'We introduced our "Fast Charging Systems for Electric Vehicles" product, which we developed with local engineering infrastructure, at the Petroleum Istanbul fair held between March 31 and April 2.', },
    { text: 'Mr. EPDK President Mustafa Yılmaz visited our stand, received detailed information about our product and made examinations.', },
    { text: 'We would like to thank Mr. Yılmaz for his visits and the support he has given to our product, which we have developed with local facilities.' },
  ],
  descTR: '31 Mart- 2 Nisan tarihleri arasında gerçekleşen Petroleum İstanbul fuarında...',
  descEN: 'We introduced our "Fast Charging Systems for Electric Vehicles" product, which we developed with local...',
  id: "petroleum-istanbul-fuari"
},
{
  image: '/blog6.png',
  images: ['/blog6.png'],
  titleTR: 'Yeni Bir Sektör Doğuyor!',
  titleEN: 'A New Sector is Emerging!',
  bodyTR: [
    { text: 'Sanayi ve Teknoloji Bakanlığı, elektrikli araçlar için gerekli altyapıyı ülkemize kazandırmak amacıyla Türkiye’nin 1.560 farklı noktasına yüksek hızlı şarj istasyonları kurulması için 300 milyon TL bütçeli hibe programı başlattı.', },
    { text: 'Sektörümüz için çok önemli bir adım olduğunu düşündüğümüz bu hibe programında, yatırımcıların kurdukları şarj ünitelerinin asgari % 25’inin yerli malı belgesine sahip olması halinde, yerli malı belgeli makine ve teçhizata sağlanan destek tutarı % 20 oranında artırılacak.', },
    { text: 'ASPOWER olarak yerli katkı oranı %94 olan “Yerli Malı Tesciline sahip Hızlı Şarj İstasyonu Ürünümüz” ile Bakanlığımız’ın gerçekleştirdiği hibe programında yer almayı planlayan, ülkemizin 81 ilinde tohumları atılacak şarj istasyonları ile sektörde bir oyuncu olmayı düşünen tüm yatırımcılara yerli ürünümüzle destek vermek, süreç ve sektör hakkında bilgilendirme yapmak isteriz.' },
  ],
  bodyEN: [
    { text: 'The Ministry of Industry and Technology has launched a 300 million TL grant program to establish high-speed charging stations at 1,560 different points in Turkey in order to provide the necessary infrastructure for electric vehicles.', },
    { text: 'In this grant program, which we think is a very important step for our sector, if at least 25% of the charging units established by investors have a domestic product certificate, the support amount provided for domestic product certified machinery and equipment will be increased by 20%.', },
    { text: 'With our "Fast Charging Station Product with Domestic Contribution Rate of 94%", we would like to support all investors who are considering participating in the grant program carried out by our Ministry, who are planning to be a player in the sector with charging stations to be planted in 81 provinces of our country, and to inform them about the process and the sector.' },
  ],
  descTR: 'Sanayi ve Teknoloji Bakanlığı, elektrikli araçlar için gerekli altyapıyı ülkemize kazandırmak amacıyla...',
  descEN: 'The Ministry of Industry and Technology has launched a 300 million TL grant program to establish high-speed charging stations...',
  id: "yeni-bir-sektor-doguyor"
},
{
  image: '/blog4.png',
  images: ['/blog4.png'],
  titleTR: 'SAHA Istanbul',
  titleEN: 'SAHA Istanbul',
  bodyTR: [
    { text: 'SAHA İstanbul Savunma Havacılık ve Uzay Kümelenmesi tarafından organize edilen dünyanın ilk 3 boyutlu Sanal Savunma Havacılık ve Uzay Sanayi Fuarı SAHA EXPO’ya hoş geldiniz! Bu fuar gerçek bir fuarın tüm fonksiyonlarına sahiptir. Sanal Fuarda, gerçek bir fuarda olduğu gibi stantlar arasında gezebilir, ürünleri ve katalogları inceleyebilir, kartvizit değişimleri yapabilir, ürünlere ve firmalara ait tanıtım videolarını izleyebilirsiniz. SAHA EXPO’da ayrıca alım heyetleri, delegasyonlar, katılımcı firmalar ve firmalar tarafından davet edilen profesyoneller arasında ikili görüşmeler de yapılacak. Fuar 3 ana salondan oluşmaktadır. Fuara girdikten sonra bu salonları ayrı ayrı gezebilir veya menüleri kullanarak ilgi duyduğunuz firmaların stantlarına doğrudan ulaşabilirsiniz.', },
    { text: 'https://sanalfuar.sahaexpo.com/' },
  ],
  bodyEN: [
    { text: 'Welcome to the world\'s first 3D Virtual Defense Aviation and Space Industry Fair SAHA EXPO organized by SAHA Istanbul Defense Aviation and Space Cluster! This fair has all the functions of a real fair. In the Virtual Fair, you can visit between stands as in a real fair, examine products and catalogs, exchange business cards, and watch promotional videos of products and companies. In SAHA EXPO, bilateral meetings will also be held between procurement delegations, delegations, participating companies, and professionals invited by companies. The fair consists of 3 main halls. After entering the fair, you can visit these halls separately or directly reach the stands of the companies you are interested in using the menus.', },
    { text: 'https://sanalfuar.sahaexpo.com/' },

  ],
  descTR: 'SAHA İstanbul Savunma Havacılık ve Uzay Kümelenmesi tarafından organize edilen dünyanın ilk 3...',
  descEN: 'Welcome to the world\'s first 3D Virtual Defense Aviation and Space Industry Fair SAHA EXPO organized by...',
  id: "saha-istanbul"
}
];


const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');


const generateBody = (data) => {
  const body = [];
  data?.map(item => {
    if (item.text)
      body.push(
        {
          "type": "paragraph",
          "children": [
            {
              "type": "text",
              "text": item.text
            }
          ]
        }
      )


    if (item.subtitle)
      body.push(
        {
          "type": "heading",
          "children": [
            {
              "type": "text",
              "text": item.subtitle
            }
          ],
          "level": 3
        },
      )

    if (item.bulletpoints)
      body.push(
        {
          "type": "list",
          "format": "unordered",
          "children": [
            item.bulletpoints.map(bullet => {
              return {
                "type": "list-item",
                "children": [
                  {
                    "type": "text",
                    "text": bullet
                  }
                ]
              }
            })
          ]
        }
      )

  })

  return body;
}


async function uploadFileToStrapi(filePath) {
  try {
    // Read the file from the local system
    const file = fs.createReadStream(filePath);

    // Create a FormData object and append the file
    const form = new FormData();
    form.append('files', file);

    // Make a POST request to Strapi's upload endpoint
    const response = await axios.post('http://185.250.210.23:1338/api/upload', form, {
      headers: {
        ...form.getHeaders(),
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzI3NjI4NDcxLCJleHAiOjE3MzAyMjA0NzF9.M61ufkFhHm6kahVK0bG94axCq7ickcueygZrvRekLxg`,
      },
    });

    // Log the response from Strapi
    console.log('File uploaded successfully:', response.data?.[0].id);
    return parseInt(response.data?.[0].id)
  } catch (error) {
    console.log(filePath);
    console.error('Error uploading file:', error);
  }
}

async function postBlogToStrapi(product) {
  try {
    const response = await axios.post('http://185.250.210.23:1338/api/blogs', { data: product });
    console.log(`Product ${product.Title} posted successfully:`, response.data);
  } catch (error) {
    console.error(`Error posting product ${product.Title}:`, error);
  }
}


const run = async () => {

  for (const itemIndex in blogs) {
    const item = blogs[itemIndex];
    const bannerPath = item.images?.[0] ? path.join(__dirname, `/public${item.images?.[0]}`) : null;
    const Banner = bannerPath ? await uploadFileToStrapi(bannerPath) : null;

    
    
    const bodyTR = {
      locale: 'tr',
      Title: item.titleTR,
      body: generateBody(item.bodyTR),
      Banner: parseInt(Banner),
      slug: item.id,
    }
    
    const bodyEN = {
      locale: 'en',
      Title: item.titleEN,
      body: generateBody(item.bodyEN),
      Banner: parseInt(Banner),
      slug: `${item.id}-en`,
    }
    console.log(bodyEN);

    await postBlogToStrapi(bodyTR);
    await sleep(300)
    await postBlogToStrapi(bodyEN);
    await sleep(300)
  }
}

run()