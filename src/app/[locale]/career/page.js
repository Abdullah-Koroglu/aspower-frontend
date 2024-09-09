'use client'
import DownloadCatalogue from '@/components/ascharge/DownloadCatalogue'
import locales from '@/locales'
import Banner from '@/components/products/Banner'
import React, { useState } from 'react'

const page = ({ params }) => {
  const { locale } = params;
  const currentLocale = locales[locale];
  const defaultFormData = {
    applicationType: '',    // Başvuru Türü
    nationalID: '',          // TC Kimlik No
    fullName: '',            // Adınız Soyadınız
    gender: '',              // Cinsiyet
    placeOfBirth: '',        // Doğum Yeriniz
    dateOfBirth: '',         // Doğum Tarihiniz
    maritalStatus: '',       // Medeni Durumu
    militaryStatus: '',      // Askerlik Durumu
    email: '',               // E-Mail
    phone: '',               // Telefon
    applicationDetails: '',  // Başvuru Detayı/Açıklamalar
    city: '',                // Şehir
    address: ''              // Adres
  }
  const [formData, setFormData] = useState(defaultFormData);
  const [file, setFile] = useState(null);
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    const form = new FormData();

    // Append all form data
    for (let key in formData) {
      form.append(key, formData[key]);
    }

    // Append the file
    if (file) {
      form.append('attachment', file);
    }

    // Send the POST request
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/career-email`, {
        method: 'POST',
        body: form,
      });

      if (response.ok) {
        alert('Support form submitted successfully!');
        setFormData(defaultFormData);
      } else {
        alert('Failed to submit the form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form. Please try again.');
    }
  };
  return (
    <div>
      <Banner text={currentLocale.career} locale={locale} />

      <div className="w-full flex flex-col md:flex-row bg-[#EFF4F9]">
        <div
          style={{
            backgroundImage: `url('/teknik-destek-image.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className="relative flex items-center justify-center md:w-1/2 p-16 md:px-20 px-4">
          <div className="bg-[#111B2D] rounded-3xl text-white md:max-w-[60%] md:px-16 px-8 md:py-32 py-16 text-center flex flex-col items-center justify-center gap-16 drop-shadow-lg">
            <p className="text-lg font-light">{currentLocale.careerText}</p>
          </div>
        </div>
        <div className="md:w-1/2 bg-slate-50 p-20 md:px-20 2xl:px-56 px-4 flex items-center justify-center">
          <div className="w-full p-6 pt-16 md:p-16 drop-shadow-lg rounded-3xl flex flex-col justify-center bg-white">
            <h3 className="w-full border-b border-black text-center mb-8">
              {currentLocale.applicationForm}
            </h3>
            <select
              className="w-full p-2 mb-4 border-0 border-b border-black outline-none ring-0 focus:ring-0 focus:outline-none"
              id="applicationType"
              name="applicationType"
              value={formData.applicationType}
              onChange={handleInputChange}
            >
              <option value="">{currentLocale.applicationType}</option>
              <option value="Stajyer">{currentLocale.intern}</option>
              <option value="Genel Başvuru">{currentLocale.generalApplication}</option>
              <option value="Üretim">{currentLocale.production}</option>
              <option value="Teknik Servis">{currentLocale.technicalService}</option>
              <option value="Satış Pazarlama">{currentLocale.salesMarketing}</option>
              <option value="Ar-Ge: Yazılım Mühendisi">{currentLocale.r_and_d_software_engineer}</option>
              <option value="Ar-Ge: Donanım Mühendisi">{currentLocale.r_and_d_hardware_engineer}</option>
            </select>

            <input
              type="text"
              className="w-full p-2 mb-4 border-0 border-b border-black outline-none ring-0 focus:ring-0 focus:outline-none"
              placeholder={currentLocale.tc_id}
              name="nationalID"
              value={formData.nationalID}
              onChange={handleInputChange}
            />

            <input
              type="text"
              className="w-full p-2 mb-4 border-0 border-b border-black outline-none ring-0 focus:ring-0 focus:outline-none"
              placeholder={currentLocale.full_name}
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
            />

            <select
              className="w-full p-2 mb-4 border-0 border-b border-black outline-none ring-0 focus:ring-0 focus:outline-none"
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
            >
              <option value="">{currentLocale.gender}</option>
              <option value="Erkek">{currentLocale.male}</option>
              <option value="Kadın">{currentLocale.female}</option>
            </select>

            <input
              type="text"
              className="w-full p-2 mb-4 border-0 border-b border-black outline-none ring-0 focus:ring-0 focus:outline-none"
              placeholder={currentLocale.place_of_birth}
              name="placeOfBirth"
              value={formData.placeOfBirth}
              onChange={handleInputChange}
            />

            <input
              type="date"
              className="w-full p-2 mb-4 border-0 border-b border-black outline-none ring-0 focus:ring-0 focus:outline-none"
              placeholder={currentLocale.date_of_birth}
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
            />

            <select
              id="maritalStatus"
              name="maritalStatus"
              className="w-full p-2 mb-4 border-0 border-b border-black outline-none ring-0 focus:ring-0 focus:outline-none"
              value={formData.maritalStatus}
              onChange={handleInputChange}
            >
              <option value="">{currentLocale.maritalStatus}</option>
              <option value="Bekar">{currentLocale.single}</option>
              <option value="Evli">{currentLocale.married}</option>
            </select>

            <select
              id="militaryStatus"
              name="militaryStatus"
              className="w-full p-2 mb-4 border-0 border-b border-black outline-none ring-0 focus:ring-0 focus:outline-none"
              value={formData.militaryStatus}
              onChange={handleInputChange}
            >
              <option value="">{currentLocale.militaryStatus}</option>
              <option value="Yapıldı">{currentLocale.completed}</option>
              <option value="Yapılmadı">{currentLocale.notCompleted}</option>
              <option value="Muaf">{currentLocale.exempt}</option>
              <option value="Tecilli">{currentLocale.deferred}</option>
            </select>

            <input
              type="email"
              className="w-full p-2 mb-4 border-0 border-b border-black outline-none ring-0 focus:ring-0 focus:outline-none"
              placeholder={currentLocale.email}
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />

            <input
              type="tel"
              className="w-full p-2 mb-4 border-0 border-b border-black outline-none ring-0 focus:ring-0 focus:outline-none"
              placeholder={currentLocale.phone}
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />

            <textarea
              className="w-full p-2 mb-4 border-0 border-b border-black outline-none ring-0 focus:ring-0 focus:outline-none"
              placeholder={currentLocale.application_details}
              name="applicationDetails"
              value={formData.applicationDetails}
              onChange={handleInputChange}
            />

            <input
              type="text"
              className="w-full p-2 mb-4 border-0 border-b border-black outline-none ring-0 focus:ring-0 focus:outline-none"
              placeholder={currentLocale.city}
              name="city"
              value={formData.city}
              onChange={handleInputChange}
            />

            <input
              type="text"
              className="w-full p-2 mb-4 border-0 border-b border-black outline-none ring-0 focus:ring-0 focus:outline-none"
              placeholder={currentLocale.address}
              name="address"
              value={formData.address}
              onChange={handleInputChange}
            />


            <div className="flex md:flex-wrap flex-col md:flex-row w-full justify-end md:gap-8  mt-4 md:mt-14">

              <label class="transition-all tab-selector bg-[#ACC2C6] hover:bg-[#bdd5da] p-1 md:p-2 px-6 md:px-16 self-end rounded-full  whitespace-nowrap text-2xl text-white pb-2" for="file_input">
                <h2 className="whitespace-nowrap text-lg md:text-2xl text-white md:mb-1">
                  {currentLocale.selectFile}
                </h2>
              </label>
              <input onChange={handleFileChange} class="hidden w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" />
              <button
                onClick={handleSubmit}
                className={`transition-all tab-selector bg-sky-300 hover:bg-sky-200 p-1 md:p-2 px-6 md:px-16 self-end rounded-full `}
              >
                <h2 className="text-lg md:text-2xl text-white mb-1">
                  {currentLocale.submit}
                </h2>
              </button>
            </div>

          </div>
        </div>
      </div>


      <DownloadCatalogue locale={locale} />
    </div>
  )
}

export default page