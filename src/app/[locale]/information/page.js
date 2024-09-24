import locales from '@/locales'
import Banner from '@/components/products/Banner'
import React from 'react'
import { handleBody } from '@/components/helper'

const page = ({params}) => {
  const {locale} = params
  const currentLocale = locales[locale]
  const bodyEN = [
    {subtitle: "INFORMATION ON THE PROCESSING AND PROTECTION OF PERSONAL DATA"},
    {text: "Aspower Enerji Ve Elektronik Sanayi Ticaret Anonim Şirketi (“Company”) attaches importance to the processing and storage of all kinds of personal data of individuals associated with the Company in accordance with the Law on Protection of Personal Data No. 6698 (“PDPL”). As the Data Controller, we process and store your personal data in accordance with the PDPL."},
    {subtitle: "Definitions"},
    {text: "In this information text;"},
    {text: "Personal Data: Any kind of information about a real person whose identity is certain or can be determined, Law on Protection of Personal Data (“PDPL”): Law No. 6698 on Protection of Personal Data, published in the Official Gazette on April 7, 2016,"},
    {text: "Company: Aspower Enerji Ve Elektronik Sanayi Ticaret Anonim Şirketi, Data Processor: The real or legal person who processes Personal Data on behalf of the data controller based on the authorization given by him,"},
    {text: "Data Controller: The real or legal person who determines the purposes and means of processing Personal Data, is responsible for the establishment and management of the data recording system."},
    {subtitle: "Purposes of Processing and Transfer of Personal Data"},
    {text: "Personal Data; in accordance with the purposes of the Company's human resources policies, commercial partnerships, management and communication activities and strategies, the correct planning, execution and management of its products and services, ensuring that Personal Data Owners benefit from them in the best way and are specially tailored according to their requests, needs and desires, ensuring the highest level of data security, developing the services offered on the website and eliminating errors on the site, contacting the Personal Data Owners who submit their requests and complaints and ensuring the management of requests and complaints, event management, providing information to authorized institutions due to legislation, creating and monitoring visitor records, within the scope of the personal data processing conditions specified in Articles 5 and 6 of the Law and within the scope of the personal data transfer conditions specified in Articles 8 and 9 of the Law, are obtained by the Company partners-business partners, successors and/or third parties/institutions designated by them, shared with them, recorded, transferred to electronic systems. If the processing activity carried out for the mentioned purposes does not meet any of the conditions foreseen within the scope of the Law, explicit consent is obtained by the Company regarding the relevant processing process."},
    {subtitle: "Method of Collecting Personal Data and Legal Reason"},
    {text: "Personal Data; in order to ensure compliance with the purpose of the Law regulating the audit of compliance with the Law and the scope of the Law, it is collected by the Company or the data processors appointed by the Company through various methods such as verbal, written, electronic media; technical and other methods, call center, Company website, mobile application, etc. in order to fulfill the responsibilities arising from the law completely and correctly."},
    {subtitle: "Rights of Personal Data Owner in accordance with PDPL"},
    {text: "The Company informs you of your rights in accordance with Article 10 of the Law; guides on how these rights will be used; and carries out the necessary internal operations, administrative and technical regulations. In accordance with Article 11 of the Law, the Company informs the individuals to whom Personal Data is processed; to learn whether Personal Data is processed, to request information if Personal Data is processed, to learn the purpose of processing Personal Data and whether they are used in accordance with their purpose, to know the third parties to whom Personal Data is transferred at home or abroad, to request correction of Personal Data if it is incomplete or incorrectly processed, to request deletion or destruction of Personal Data within the framework of the conditions stipulated in Article 7 of the Law, to request notification of the transactions made pursuant to Articles (d) and (e) of Article 11 of the Law to third parties to whom Personal Data is transferred, to object to the emergence of a result against the person by analyzing the processed data exclusively through automatic systems, to request the removal of the damage in case of damage due to the processing of Personal Data contrary to the law."},
    {text: "Personal data owners can reach the Application Form that can be accessed from the link below by filling out and signing the form and sending it to the Company free of charge: "},
    {text: "(i) After filling out the application form, a wet signed copy can be sent by hand or by notary to the address Ikitelli Osb Mahallesi Dersan B Blok Sk. B Blok Apt. No: 1/137 Başakşehir/ISTANBUL."},
    {linkText: "You can access the Application Form from here.", href: "/bilgi_talep_formu.doc"},
    {text: "(ii) You can submit your applications via email to kvkk@aspower.com.tr. You can submit your applications via KEP to our KEP address aspower@hs01.kep.tr."},
    {text: "Depending on the nature of your request, the information and documents that will allow identity verification must be provided to us completely and accurately. If the requested information and documents are not provided properly, there may be disruptions in the complete and qualified conduct of the investigations to be carried out by the Company based on your request. In this case, the Company declares that it reserves its legal rights. Therefore, your application must be sent completely and with the requested information and documents according to the nature of your request."},
    {text: "In order for third parties to submit an application on behalf of personal data owners, a special power of attorney issued through a notary public on behalf of the person to apply must be available."}
  ];
  
  const bodyTR = [
    {subtitle: "KİŞİSEL VERİLERİN İŞLENMESİ VE KORUNMASI AYDINLATMA METNİ"},
    {text: "Aspower Enerji Ve Elektronik Sanayi Ticaret Anonim Şirketi (“Şirket”) olarak ürün ve hizmetlerimizden faydalanan kişiler dahil, Şirket ile ilişkili tüm şahıslara ait her türlü kişisel verilerin 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVK Kanunu”)’na uygun olarak işlenerek, muhafaza edilmesine önem vermekteyiz. Veri Sorumlusu sıfatıyla, kişisel verilerinizi aşağıda izah edildiği surette ve mevzuat tarafından emredilen sınırlar çerçevesinde işlemekteyiz."},
    {subtitle: "Tanımlar"},
    {text: "İşbu aydınlatma metninde geçen;"},
    {text: "Kişisel Veri: Kimliği belirli veya belirlenebilir gerçek kişiye ilişkin her türlü bilgiyi, Kişisel Verilerin Korunması Kanunu (“KVKK”): 7 Nisan 2016 tarihinde Resmi Gazete’de yayınlanarak yürürlüğe giren 6698 sayılı Kişisel Verilerin Korunması Kanunu’nu,"},
    {text: "Şirket: Aspower Enerji Ve Elektronik Sanayi Ticaret Anonim Şirketi’ni Veri İşleyen: Veri sorumlusunun verdiği yetkiye dayanarak onun adına Kişisel Verileri işleyen gerçek veya tüzel kişiyi, Veri Sorumlusu: Kişisel Verilerin işleme amaçlarını ve vasıtalarını belirleyen, veri kayıt sisteminin kurulmasından ve yönetilmesinden sorumlu olan gerçek veya tüzel kişiyi, ifade eder."},
    {subtitle: "Kişisel Verilerin İşlenme ve Aktarılma Amaçları"},
    {text: "Kişisel Veriler; hukuka ve Kanun’un amacına uygun olarak Şirket’in, insan kaynakları politikalarının, ticari ortaklıklarının, yönetim ve iletişim faaliyetlerinin ve stratejilerinin doğru olarak planlanması, yürütülmesi ve yönetilmesi, ürün ve hizmetlerinden Kişisel Veri Sahipleri’nin en iyi şekilde faydalandırılması ve onların talep, ihtiyaç ve isteklerine göre özel hale getirilerek önerilmesi,  veri güvenliğinin en üst düzeyde sağlanması,  internet sitesinde sunulan hizmetlerin geliştirilmesi ve sitede oluşan hataların giderilmesi, kendisine talep ve şikâyetlerini ileten Kişisel Veri Sahipleri ile iletişime geçmesi ve talep ve şikâyet yönetiminin sağlanması, etkinlik yönetimi, yetkili kuruluşlara mevzuattan kaynaklı bilgi verilmesi, ziyaretçi kayıtlarının oluşturulması ve takibi amaçlarıyla sınırlı olarak Kanun’un 5. ve 6. maddelerinde belirtilen kişisel veri işleme şartları kapsamında işlenir ve Kanun’un 8. ve 9. maddelerinde belirtilen kişisel veri aktarma şartları kapsamında Şirket ortakları-iş ortakları, halefleri ve/veya bunların belirleyeceği üçüncü kişiler/kuruluşlar tarafından elde edilmekte veya bunlarla paylaşılmakta, kaydedilmekte, elektronik sistemlerine aktarılmaktadır, Bahsi geçen amaçlarla gerçekleştirilen işleme faaliyetinin, Kanun kapsamında öngörülen şartlardan herhangi birini karşılamıyor olması halinde, ilgili işleme sürecine ilişkin olarak Şirket tarafından açık rızanız temin edilmektedir."},
    {subtitle: "Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi"},
    {text: "Kanun’un amacını düzenleyen 1. Madde ile Kanun’un kapsamını düzenleyen 2. Madde’ye uygunluğunun denetimi amacıyla, Kişisel Veriler; her türlü sözlü, yazılı, elektronik ortamda; teknik ve sair yöntemlerle, çağrı merkezi, Şirket internet sitesi, mobil uygulama gibi muhtelif yollardan, Politika’da yer verilen amaçların gerçekleştirilmesi amacıyla mevzuat, sözleşme, talep ve isteğe dayalı hukuki sebepler çerçevesinde yasadan doğan sorumlulukların eksiksiz ve doğru bir şekilde yerine getirilebilmesi için toplanır ve Şirket veya Şirket tarafından görevlendirilen veri işleyenler tarafından işlenir."},
    {subtitle: "Kişisel Veri Sahibi’nin KVK Kanunu Uyarınca Hakları"},
    {text: "Şirket, Kanun’un 10.maddesi uyarınca size haklarınızı bildirmekte; söz konusu hakların nasıl kullanılacağına dair yol göstermekte ve tüm bunlar için gerekli iç işleyişi, idari ve teknik düzenlemeleri gerçekleştirmektedir. Şirket, Kanun’un 11.maddesi uyarınca Kişisel Veriler’i alınan kişilere; Kişisel Veri işlenip işlenmediğini öğrenme, Kişisel Veriler’i işlenmişse buna ilişkin bilgi talep etme, Kişisel Veriler’in işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme, Yurt içinde veya yurt dışında Kişisel Veriler’in aktarıldığı üçüncü kişileri bilme, Kişisel Veriler’in eksik veya yanlış işlenmiş olması halinde bunların düzeltilmesini isteme, Kanun’un 7. maddesinde öngörülen şartlar çerçevesinde Kişisel Veriler’in silinmesini veya yok edilmesini isteme,  Kanun’un 11.  Maddesinin  (d)  ve  (e)  bentleri uyarınca yapılan işlemlerin, kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,  İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme,  Kişisel Veriler’in kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması halinde zararın giderilmesini talep etme haklarının olduğunu açıklar."},
    {text: "Kişisel Veri Sahipleri sayılan haklarına ilişkin taleplerini kimliklerini tespit edecek bilgi ve belgelerle ve aşağıda belirtilen yöntemlerle veya KVK Kurulu’nun belirlediği diğer yöntemlerle aşağıdaki bağlantıdan ulaşılabilecek Başvuru Formu’nu doldurup imzalayarak Şirket’e ücretsiz olarak iletebileceklerdir: "},
    {text: "(i)    Başvuru formu doldurulduktan sonra ıslak imzalı bir nüshasının bizzat elden veya noter aracılığı ile İkitelli Osb Mahallesi Dersan B Blok Sk. B Blok Apt. No: 1/137 Başakşehir/İSTANBUL adresine iletilebilir."},
    {linkText: "Başvuru formuna buradan erişebilirsiniz.", href: "/bilgi_talep_formu.doc"},
    {text: "(ii) E-posta yoluyla yapmak istediğiniz başvurularınızı kvkk@aspower.com.tr e-posta adresine yapabilirsiniz. KEP yoluyla yapmak istediğiniz başvurularınızı aspower@hs01.kep.tr KEP adresimize yapabilirsiniz."},
    {text: "Talebinizin niteliğine göre kimlik tespitine olanak sağlayacak bilgi ve belgelerin eksiksiz ve doğru olarak tarafımıza sağlanması gerekmektedir. İstenilen bilgi ve belgelerin gereği gibi sağlanmaması durumunda, Şirket tarafından talebinize istinaden yapılacak araştırmaların tam ve nitelikli şekilde yürütülmesinde aksaklıklar yaşanabilecektir. Bu durumda, Şirket kanuni haklarını saklı tuttuğunu beyan eder. Bu nedenle, başvurunuzun talebinizin niteliğine göre eksiksiz ve istenilen bilgileri ve belgeleri içerecek şekilde gönderilmesi gerekmektedir."},
    {text: "Kişisel veri sahipleri adına üçüncü kişilerin başvuru talebinde bulunabilmesi için veri sahibi tarafından başvuruda bulunacak kişi adına noter kanalıyla düzenlenmiş özel vekâletname bulunmalıdır."}
  ];

  const body =  locale === 'tr' ? bodyTR: bodyEN;

  
  return (
    <div>
      <Banner text={'KVKK Aydınlatma Metni'} locale={locale}/>
      <div className="flex items-start justify-start px-4 md:px-20 py-20 gap-8">
      <div className="flex flex-col h-fit items-start mx-auto max-w-[70rem]">
        <h2 className="text-2xl md:text-5xl sans w-2/3">{'KVKK Aydınlatma Metni'}</h2>
        <div className="mt-10 mb-20">
        {handleBody(body)}
        </div>
      </div>
    </div>
    </div>
  )
}

export default page