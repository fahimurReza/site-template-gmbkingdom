import React from "react";

const GoogleMap = () => {
  return (
    <main className="space-y-6">
      <header className="uppercase text-xs font-semibold tracking-[4px]">
        Regional Office
      </header>

      <div className="w-full mt-6 sm:mt-12 aspect-[4/2.5] max-h-125 rounded-xl overflow-hidden shadow-lg">
        <iframe
          title="Regional Office Location"
          width="600"
          height="400"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3340.4309427598214!2d-96.89279502432173!3d33.15031157350994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c3a25a2ff84c9%3A0x1c44adcb96c502a!2s279%20Main%20St%20suite%20%23128%2C%20Frisco%2C%20TX%2075034%2C%20USA!5e0!3m2!1sen!2sbd!4v1769976759461!5m2!1sen!2sbd"
        ></iframe>
      </div>
    </main>
  );
};

export default GoogleMap;
