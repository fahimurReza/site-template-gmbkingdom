import React from "react";

const CommonProject = () => {
  return (
    <section className="pt-4">
      <div className="rounded-2xl shadow-2xl px-9 pt-7 pb-8  bg-gray-50">
        <h2 className="text-2xl font-semibold text-brand-teal">
          Popular Services in Dallas
        </h2>
        <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-4 text-brand-gray-dark">
          <div className="bg-brand-gray-bg border border-gray-200 rounded-xl px-5 py-3">
            <p className="max-w-5xl">
              Downtown office cores and podium parking decks
            </p>
          </div>
          <div className="bg-brand-gray-bg border border-gray-200 rounded-xl px-5 py-3">
            <p className="max-w-5xl">
              Design-build tilt-wall distribution hubs
            </p>
          </div>
          <div className="bg-brand-gray-bg border border-gray-200 rounded-xl px-5 py-3">
            <p className="max-w-5xl">
              Streetscape, utility, and drainage improvements
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommonProject;
