const OurLocation = () => {
  return (
    <section className="pt-10 base-padding">
      <h2 className="text-4xl text-brand-teal-light font-semibold text-center bg-white">
        Our Location
      </h2>
      <div className="mt-10 mb-16 w-full aspect-video max-h-75">
        <iframe
          title="Regional Office Location"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3340.4309427598214!2d-96.89279502432173!3d33.15031157350994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c3a25a2ff84c9%3A0x1c44adcb96c502a!2s279%20Main%20St%20suite%20%23128%2C%20Frisco%2C%20TX%2075034%2C%20USA!5e0!3m2!1sen!2sbd!4v1769976759461!5m2!1sen!2sbd"
        ></iframe>
      </div>
    </section>
  );
};

export default OurLocation;
