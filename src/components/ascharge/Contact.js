'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import locales from '@/locales';
import products from '@/data/productList';
import { usePathname } from 'next/navigation';

const Contact = ({ locale }) => {
  const pathname = usePathname()
  const currentLocale = locales[locale]
  const defaultFormData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    consent: true,
    emailSubscription: false,
  }
  const [selectedCategory, setSelectedCategory] = useState('dc-arac-sarj-sistemi');
  const [partnership, setPartnership] = useState('Lokasyon');
  const [formData, setFormData] = useState(defaultFormData);

  const returnProducts = () => {
    let locationArray = pathname.split('/')
    locationArray = locationArray.filter((item) => item !== '');
    if (locationArray[0] === 'ascharge' || locationArray[1] === 'ascharge') {
      return products.slice(0, 3)
    } else {
      return products
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Contact form submitted successfully!');
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
    <div id="contact" className="flex w-full flex-col xl:flex-row">
      <div
        style={{ backgroundImage: `url(/Refs/${partnership === "Lokasyon" ? 'lokasyon.jpg' : 'ticari.jpg'})` }}
        className="xl:w-1/2 p-8 py-32 md:p-20 md:px-30 lg:px-36 2xl:px-56 flex items-center justify-center contact-image">
        <div className="md:w-full p-8 md:p-16 drop-shadow-lg rounded-3xl flex flex-col justify-center items-center gap-8 bg-[#111B2D] text-white">
          <div className="flex border-2 border-white rounded-full">
            <div
              onClick={() => setPartnership('Lokasyon')}
              className={`transition p-1 px-4 2xl:px-12 rounded-full cursor-pointer ${partnership === 'Lokasyon' ? 'bg-white text-cyan-950' : ''}`}>
              {currentLocale.location}
            </div>
            <div
              onClick={() => setPartnership('Ticari')}
              className={`transition p-1 px-4 2xl:px-12 rounded-full cursor-pointer ${partnership !== "Lokasyon" ? 'bg-white text-cyan-950' : ''}`}>
              {currentLocale.commercial}
            </div>
          </div>
          <h3 className="text-lg xl:text-2xl font-light mb-0">{currentLocale.partnership}</h3>
          <Link
            href="/maintenance"
            className={`transition-all tab-selector bg-sky-300 hover:bg-sky-200 p-1 md:p-2 px-10 md:px-16 self-center rounded-full`}
          >
            <h2 className="text-lg md:text-2xl text-white md:mb-1">
              {currentLocale.details}
            </h2>
          </Link>
        </div>
      </div>
      <div className="xl:w-1/2 bg-slate-50 xl:p-20 p-4 md:px-30 lg:px-36 2xl:px-44 flex items-center justify-center">
        <div className="w-full p-8 px-6 md:px-16 md:p-16 drop-shadow-lg rounded-3xl flex flex-col justify-center bg-white">
          <h3 className="w-full border-b border-black text-center mb-8">
            {currentLocale.contact_form}
          </h3>
          <select
            className="border-gray-300 text-[#005770] rounded-md"
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          >
            <option value="Ürün Teklif / Bilgi Talebi">{currentLocale.productInfoForm}</option>
            <option value="Bayilik Teklifi">{currentLocale.branchForm}</option>
            <option value="Ticari Partnerlik Talebi">{currentLocale.commercialForm}</option>
            <option value="Lokasyon Partnerliği Talebi">{currentLocale.locationForm}</option>
          </select>
          {
            formData.subject !== 'Bayilik Teklifi' && (
              <div className="flex gap-4 my-4">
                <select
                  className="border-gray-300 text-[#005770] rounded-md w-[calc(50%-.5rem)]"
                  onChange={(e) => {
                    setFormData({ ...formData, message: returnProducts().find(product => product.id === e.target.value)?.items[0].titleTR })
                    setSelectedCategory(e.target.value)
                  }}
                >
                  {
                    returnProducts().map((category, index) => (
                      <option disabled={category.passive} key={index} value={category.id}>{locale === 'tr' ? category.titleTR : category.titleEN}</option>
                    ))
                  }
                </select>
                <select
                  onChange={(e) => { setFormData({ ...formData, message: e.target.value }) }}
                  className="border-gray-300 text-[#005770] rounded-md w-[calc(50%-.5rem)]"
                >
                  {
                    returnProducts().find(product => product.id === selectedCategory)?.items.map((product, index) => (
                      <option key={index} value={product.titleTR}>{locale === 'tr' ? product.titleTR : product.titleEN}</option>
                    ))
                  }
                </select>
              </div>
            )
          }
          <input
            className="w-full p-2 mb-4 border-0 border-b border-black outline-none ring-0 focus:ring-0 focus:outline-none"
            placeholder={currentLocale.full_name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            value={formData.name}
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
          <div className="flex gap-4">
            <input
              type="checkbox"
              className="mr-2 mt-1 outline-none ring-0 focus:ring-0 focus:outline-none text-[#65D5EF] rounded-full bg-gray-200 border-0"
              checked={formData.consent}
              onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
            />
            <span className="text-sm text-gray-600 text-left form-links" dangerouslySetInnerHTML={{ __html: currentLocale.privacy_policy }} />
          </div>

          <div className="flex mt-4 gap-4">
            <input
              type="checkbox"
              className="mr-2 mt-1 outline-none ring-0 focus:ring-0 focus:outline-none text-[#65D5EF] rounded-full bg-gray-200 border-0"
              checked={formData.emailSubscription}
              onChange={(e) => setFormData({ ...formData, emailSubscription: e.target.checked })}
            />
            <span className="text-sm text-gray-600">
              {currentLocale.newsletter_signup}
            </span>
          </div>
          <button
            onClick={handleSubmit}
            className={`transition-all tab-selector bg-sky-300 hover:bg-sky-200 md:p-2 p-1 px-10 md:px-16 self-end rounded-full mt-14`}
          >
            <h2 className="text-lg md:text-2xl text-white mb-1">
              {currentLocale.submit}
            </h2>
          </button>
        </div>
      </div>
    </div>

  );
};

export default Contact;

