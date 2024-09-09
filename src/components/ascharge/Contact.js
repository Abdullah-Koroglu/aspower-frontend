'use client';
import React, { useState } from 'react';
import { Checkbox } from "@nextui-org/react";
import Link from 'next/link';
import locales from '@/locales';

const Contact = ({ locale }) => {
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
  const [partnership, setPartnership] = useState('Lokasyon');
  const [formData, setFormData] = useState(defaultFormData);

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
            href={"maintenance"}
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
          <input
            className="w-full p-2 mb-4 border-0 border-b border-black outline-none ring-0 focus:ring-0 focus:outline-none"
            placeholder={currentLocale.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            value={formData.subject}
          />
          <input
            className="w-full p-2 mb-20 border-0 border-b border-black outline-none ring-0 focus:ring-0 focus:outline-none"
            placeholder={currentLocale.details}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            value={formData.message}
          />
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
            <span className="text-sm text-gray-600 text-left">
              {currentLocale.privacy_policy}
            </span>
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

