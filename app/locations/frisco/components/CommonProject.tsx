import React from "react";

const CommonProject = () => {
  return (
    <section className="pt-8">
      <div className="rounded-2xl shadow-2xl p-6 sm:p-8 bg-white">
        <h2 className="text-2xl font-semibold text-brand-teal-light">
          Common Project Types
        </h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-brand-gray-dark">
          <div className="bg-gray-50 border border-gray-200 rounded-xl px-5 py-3">
            <p className="max-w-5xl text-brand-gray-dark">
              Downtown office cores and podium parking decks
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl px-5 py-3">
            <p className="max-w-5xl text-brand-gray-dark">
              Design-build tilt-wall distribution hubs
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl px-5 py-3">
            <p className="max-w-5xl text-brand-gray-dark">
              Streetscape, utility, and drainage improvements
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommonProject;
