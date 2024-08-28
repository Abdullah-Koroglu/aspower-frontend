'use client'
import DownloadCatalogue from '@/components/ascharge/DownloadCatalogue'
import locales from '@/locales'
import Banner from '@/components/products/Banner'
import React, { useState } from 'react'

const page = ({params}) => {
  const {locale} = params
  const currentLocale = locales[locale]
  const defaultFormData = {
    firmName: '',
    responsibleName: '',
    email: '',
    phone: '',
    city: '',
    deviceModel: '',
    deviceSerial: '',
    batteryType: '',
    alarmMessage: '',
    batteryCount: '',
    deviceCount: '',
    description: '',
  }
  const [formData, setFormData] = useState(defaultFormData);
  const [file, setFile] = useState(null);
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
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
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/support-email`, {
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
      <Banner text={currentLocale.techSupportTitle} />

      <div className="w-full flex flex-col md:flex-row bg-[#EFF4F9]">
        <div
          style={{
            backgroundImage: `url('/teknik-destek-image.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className="relative flex items-center justify-center md:w-1/2 p-16 md:px-20">
          <div className="bg-[#111B2D] rounded-3xl text-white md:max-w-[60%] p-4 py-8 md:p-16 md:py-32 text-center flex flex-col items-center justify-center gap-16 drop-shadow-lg">
            <p className="text-lg font-light">{currentLocale.techSupportText}</p>
          </div>
        </div>
        <div className="md:w-1/2 bg-slate-50 p-4 md:p-20 px-4 md:px-56 flex items-center justify-center">
          <div className="w-full p-8 md:p-16 drop-shadow-lg rounded-3xl flex flex-col justify-center bg-white">
            <h3 className="w-full border-b border-black text-center mb-8">
              {currentLocale.support_form}
            </h3>
            <input
              className="w-full p-2 mb-4 border-0 border-b border-black outline-none ring-0 focus:ring-0 focus:outline-none"
              placeholder={currentLocale.company_name}
              onChange={(e) => setFormData({ ...formData, firmName: e.target.value })}
              value={formData.firmName}
            />
            <input
              className="w-full p-2 mb-4 border-0 border-b border-black outline-none ring-0 focus:ring-0 focus:outline-none"
              placeholder={currentLocale.responsible_person}
              onChange={(e) => setFormData({ ...formData, responsibleName: e.target.value })}
              value={formData.responsibleName}
            />
            <input
              className="w-full p-2 mb-4 border-0 border-b border-black outline-none ring-0 focus:ring-0 focus:outline-none"
              placeholder={currentLocale.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              value={formData.email}
            />
            <input
              className="w-full p-2 mb-4 border-0 border-b border-black outline-none ring-0 focus:ring-0 focus:outline-none"
              placeholder={currentLocale.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              value={formData.phone}
            />
            <input
              className="w-full p-2 mb-4 border-0 border-b border-black outline-none ring-0 focus:ring-0 focus:outline-none"
              placeholder={currentLocale.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              value={formData.city}
            />
            <input
              className="w-full p-2 mb-4 border-0 border-b border-black outline-none ring-0 focus:ring-0 focus:outline-none"
              placeholder={currentLocale.device_model}
              onChange={(e) => setFormData({ ...formData, deviceModel: e.target.value })}
              value={formData.deviceModel}
            />
            <input
              className="w-full p-2 mb-4 border-0 border-b border-black outline-none ring-0 focus:ring-0 focus:outline-none"
              placeholder={currentLocale.faulty_device_count}
              onChange={(e) => setFormData({ ...formData, deviceCount: e.target.value })}
              value={formData.deviceCount}
            />
            <input
              className="w-full p-2 mb-4 border-0 border-b border-black outline-none ring-0 focus:ring-0 focus:outline-none"
              placeholder={currentLocale.device_serial}
              onChange={(e) => setFormData({ ...formData, deviceSerial: e.target.value })}
              value={formData.deviceSerial}
            />
            <input
              className="w-full p-2 mb-4 border-0 border-b border-black outline-none ring-0 focus:ring-0 focus:outline-none"
              placeholder={currentLocale.battery_type_count}
              onChange={(e) => setFormData({ ...formData, batteryCount: e.target.value })}
              value={formData.batteryCount}
            />
            <input
              className="w-full p-2 mb-4 border-0 border-b border-black outline-none ring-0 focus:ring-0 focus:outline-none"
              placeholder={currentLocale.alarm_message}
              onChange={(e) => setFormData({ ...formData, alarmMessage: e.target.value })}
              value={formData.alarmMessage}
            />
            <input
              className="w-full p-2 mb-20 border-0 border-b border-black outline-none ring-0 focus:ring-0 focus:outline-none"
              placeholder={currentLocale.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              value={formData.description}
            />
            <div className="flex flex-col md:flex-row w-full justify-end md:gap-8">
              <label
                className="transition-all tab-selector bg-[#ACC2C6] hover:bg-[#bdd5da] p-2 px-10 md:px-16  self-end rounded-full md:mt-14 whitespace-nowrap text-2xl text-white pb-2"
                htmlFor="file_input"
              >
                <h2 className="whitespace-nowrap text-lg md:text-2xl text-white mb-1">
                  {currentLocale.select_file}
                </h2>
              </label>
              <input
                onChange={handleFileChange}
                className="hidden w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="file_input_help"
                id="file_input"
                type="file"
              />
              <button
                onClick={handleSubmit}
                className={`transition-all tab-selector bg-sky-300 hover:bg-sky-200 p-2 px-10 md:px-16  self-end rounded-full mt-4 md:mt-14`}
              >
                <h2 className="text-lg md:text-2xl text-white mb-1">
                  {currentLocale.submit}
                </h2>
              </button>
            </div>
          </div>

        </div>
      </div>


      <DownloadCatalogue locale={locale}/>
    </div>
  )
}

export default page