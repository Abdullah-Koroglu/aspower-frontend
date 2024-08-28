import React from 'react';
import locales from '@/locales'

const Banner = ({locale}) => {
  const currentLocale = locales[locale]
  return (
    <div className="w-full flex relative banner">
      <video
        className="h-[80vh] object-cover"
        width="320"
        height="240"
        controls={false}
        loop={true}
        autoPlay={true}
        muted={true}
        playsInline={true}
      >
        <source
          src="/ASP-Hero-Video-WEB.mp4"
          type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="h-full p-4 md:p-8 xl:p-16 md:px-10 xl:px-20 z-0 absolute flex w-full items-center justify-between text-white font-light">
        <div>
          <h2 className="text-3xl md:text-5xl md:font-light w-56 md:w-80">
            {currentLocale.electric_vehicle_charging_systems}
          </h2>
        </div>
        <div className="z-10 text-right flex flex-col gap-16 self-end">
          <div>
            <h className="mb-0 text-3xl md:text-5xl">{currentLocale.wide}</h>
            <h3 className="mb-0 text-lg md:text-2xl">{currentLocale.wide_product_range}</h3>
          </div>
          <div>
            <h3 className="mb-0 text-3xl md:text-5xl">{currentLocale.twenty_plus}</h3>
            <h3 className="mb-0 text-lg md:text-2xl">{currentLocale.twenty_plus_brands_preference}</h3>
          </div>
          <div>
            <h3 className="mb-0 text-3xl md:text-5xl">{currentLocale.local_production}</h3>
            <h3 className="mb-0 text-lg md:text-2xl">{currentLocale.local_software}</h3>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Banner;