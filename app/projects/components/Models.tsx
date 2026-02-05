const Models = () => {
  const model = [
    { title: "450+", subtitle: "Projects Completed" },
    { title: "45M+", subtitle: "Sq Ft Poured" },
    { title: "6,800+", subtitle: "Tilt-Wall Panels" },
    { title: "25+", subtitle: "Years Serving DFW" },
  ];
  return (
    <section className="base-padding bg-brand-gray-bg">
      <div className="grid grid-cols-4 py-6">
        {model.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center content-center"
          >
            <h2 className="text-2xl text-brand-orange font-semibold">
              {item.title}
            </h2>
            <p className="text-sm font-medium text-brand-teal-light">
              {item.subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Models;
