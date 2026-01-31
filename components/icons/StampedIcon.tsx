interface StampedIconProps {
  className?: string;
}

const StampedIcon = ({ className }: StampedIconProps) => {
  return (
    <main className={className}>
      <svg
        className="h-8 w-8 text-brand-gray-dark group-hover:text-white transition-colors duration-300"
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M624 475.968V640h144a128 128 0 0 1 128 128H128a128 128 0 0 1 128-128h144V475.968a192 192 0 1 1 224 0zM128 896v-64h768v64H128z"
        />
      </svg>
    </main>
  );
};

export default StampedIcon;
