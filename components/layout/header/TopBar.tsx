const TopBar = () => {
  return (
    <div className="base-padding bg-linear-to-r from-teal-950 to-teal-800 font-medium text-sm text-white h-8 flex items-center justify-between">
      <p className="hidden md:block">Commercial & Residential Concrete</p>
      <div className="flex items-center cursor-pointer ml-auto">
        <p>Call 323-555-0123</p>
      </div>
    </div>
  );
};

export default TopBar;
