import RightArrow from "../common/RightArrow";

const ServiceButton = () => {
  return (
    <button
      className={`bg-white text-teal-950 px-6 py-2 rounded-md hover:bg-gray-200 
        transition-colors border border-gray-200 font-semibold text-sm flex group`}
    >
      All Services <RightArrow />
    </button>
  );
};

export default ServiceButton;
