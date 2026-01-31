const Professional = () => {
  return (
    <main
      className={`bg-brand-gray-bg p-4.5 rounded-2xl w-fit border-[5px] border-white 
      shadow-md group-hover:bg-brand-orange group-hover:scale-110 duration-200
      `}
    >
      <div className="relative">
        <svg
          className="h-10 w-10 text-brand-gray-dark group-hover:text-white transition-colors duration-300"
          width="650"
          height="600"
          viewBox="0 0 650 600"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.675 0H0V600H650V575.925L25.1 574.675L24.675 0ZM350 25C350 11.175 338.8 0 325 0H250C236.175 0 225 11.175 225 25V525H350V25ZM200 175C200 161.2 188.8 150 175 150H100C86.175 150 75 161.2 75 175V525H200V175ZM500 325C500 311.175 488.8 300 475 300H400C386.175 300 375 311.175 375 325V525H500V325ZM625 450H550C536.175 450 525 461.175 525 475V525H650V475C650 461.175 638.8 450 625 450Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </main>
  );
};

export default Professional;
