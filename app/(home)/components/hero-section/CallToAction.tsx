import PhoneIcon from "@/components/common/PhoneIcon";

const CallToAction = () => {
  return (
    <div className="flex gap-10 mt-14">
      <button className="w-full sm:w-64 px-6 py-3 bg-bt-primary text-white font-semibold rounded-lg hover:bg-bt-primary-hover transition flex items-center justify-center gap-3 text-lg">
        <div className="flex items-center gap-3">
          <PhoneIcon className="w-5 h-5 rotate-90" />
          <span>(469) 535-6405</span>
        </div>
      </button>
      <button className="w-full sm:w-64 px-6 py-3 bg-white/10 border border-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition text-lg">
        Learn More
      </button>
    </div>
  );
};

export default CallToAction;
