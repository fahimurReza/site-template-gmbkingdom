const ShareIcon = () => {
  return (
    <main
      className={`bg-brand-gray-bg p-4.5 rounded-2xl w-fit border-[5px] border-white 
      shadow-md group-hover:bg-brand-orange group-hover:scale-110 duration-200
      `}
    >
      <svg
        className="h-10 w-10 text-brand-gray-dark group-hover:text-white transition-colors duration-300"
        width="567"
        height="667"
        viewBox="0 0 567 667"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M343.433 111.111C343.433 49.746 393.407 0 455.05 0C516.693 0 566.667 49.746 566.667 111.111C566.667 172.476 516.693 222.222 455.05 222.222C423.923 222.222 395.793 209.532 375.57 189.116L221.057 294.317C222.483 301.417 223.233 308.75 223.233 316.24C223.233 331.073 220.3 345.253 214.986 358.213L384.41 469.527C403.64 453.87 428.243 444.443 455.05 444.443C516.693 444.443 566.667 494.19 566.667 555.557C566.667 616.92 516.693 666.667 455.05 666.667C393.407 666.667 343.433 616.92 343.433 555.557C343.433 539.483 346.873 524.183 353.057 510.37L185.002 399.957C165.399 416.993 139.72 427.35 111.616 427.35C49.9723 427.35 0 377.603 0 316.24C0 254.874 49.9723 205.128 111.616 205.128C147.063 205.128 178.618 221.575 199.048 247.173L348.797 145.214C345.313 134.453 343.433 122.987 343.433 111.111Z"
          fill="currentColor"
        />
      </svg>
    </main>
  );
};

export default ShareIcon;
