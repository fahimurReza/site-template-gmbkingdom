import React from "react";

const PopularServices = () => {
  return (
    <section className="mt-8">
      <div className="rounded-2xl shadow-2xl p-6 sm:p-8 bg-white">
        <h2 className="text-2xl font-semibold text-brand-teal-light">
          Popular Services in Dallas
        </h2>
        <div className="grid grid-cols-12 mt-4 bg-gray-50 border border-gray-200 rounded-2xl px-5 py-3">
          <div className="col-span-10 pb-1 flex flex-col">
            <h2 className="text-lg font-semibold text-brand-teal-light">
              Concrete Foundations
            </h2>
            <p className="text-brand-gray-dark text-sm pt-1.5 max-w-5xl">
              Dallas's expansive clay soils require engineered foundation
              solutions. We deliver complete foundation packages with proper
              soil mitigation strategies.
            </p>
          </div>
          <div className="col-span-2 content-start text-end text-brand-orange/80 text-2xl font-bold">
            # 1
          </div>
        </div>
        <div className="grid grid-cols-12 mt-4 bg-gray-50 border border-gray-200 rounded-2xl px-5 py-3">
          <div className="col-span-10 pb-1 flex flex-col">
            <h2 className="text-lg font-semibold text-brand-teal-light">
              Tilt-Wall Construction
            </h2>
            <p className="text-brand-gray-dark text-sm pt-1.5 max-w-5xl">
              Industrial development along I-20, I-45, and I-35E corridors
              drives demand for tilt-wall warehouses and distribution centers.
            </p>
          </div>
          <div className="col-span-2 content-start text-end text-brand-orange/80 text-2xl font-bold">
            # 2
          </div>
        </div>
        <div className="grid grid-cols-12 mt-4 bg-gray-50 border border-gray-200 rounded-2xl px-5 py-3">
          <div className="col-span-10 pb-1 flex flex-col">
            <h2 className="text-lg font-semibold text-brand-teal-light">
              Parking Lots
            </h2>
            <p className="text-brand-gray-dark text-sm pt-1.5 max-w-5xl">
              Retail, office, and mixed-use developments throughout Dallas
              require durable concrete parking with proper drainage and ADA
              compliance.
            </p>
          </div>
          <div className="col-span-2 content-start text-end text-brand-orange/80 text-2xl font-bold">
            # 3
          </div>
        </div>
        <div className="grid grid-cols-12 mt-4 bg-gray-50 border border-gray-200 rounded-2xl px-5 py-3">
          <div className="col-span-10 pb-1 flex flex-col">
            <h2 className="text-lg font-semibold text-brand-teal-light">
              Structural Slabs
            </h2>
            <p className="text-brand-gray-dark text-sm pt-1.5 max-w-5xl">
              Multi-story developments in Downtown, Uptown, and surrounding
              areas require elevated structural slabs and podium decks.
            </p>
          </div>
          <div className="col-span-2 content-start text-end text-brand-orange/80 text-2xl font-bold">
            # 4
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularServices;
