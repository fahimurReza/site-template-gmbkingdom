const Models = () => {
  const model = [
    { title: "Direct", subtitle: "Contracts Available" },
    { title: "Ontime", subtitle: "Project Delivery" },
    { title: "DFW", subtitle: "Metroplex Coverage" },
    { title: "Complete", subtitle: "Accountability" },
  ];
  return (
    <section className="base-padding bg-brand-gray-bg">
      <div className="grid gap-y-6 grid-cols-2 sm:grid-cols-4 py-6">
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
