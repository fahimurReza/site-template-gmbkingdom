interface RightArrowProps {
  className?: string;
}

const RightArrow = ({ className }: RightArrowProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 169 300"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.49984 294.508C-1.83328 287.186 -1.83328 275.314 5.49984 267.992L123.667 150L5.49984 32.0077C-1.83328 24.6858 -1.83328 12.8133 5.49984 5.49139C12.8331 -1.83047 24.7225 -1.83047 32.0558 5.49139L163.5 136.742C170.833 144.064 170.833 155.936 163.5 163.258L32.0558 294.508C24.7225 301.831 12.8331 301.831 5.49984 294.508Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default RightArrow;
