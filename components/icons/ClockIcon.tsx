interface ClockIconProps {
  className?: string;
  stroke?: string;
}

const ClockIcon = ({ className, stroke = "35" }: ClockIconProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 752 752"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M375.833 67.5C205.546 67.5 67.5 205.546 67.5 375.833C67.5 546.12 205.546 684.167 375.833 684.167C546.12 684.167 684.167 546.12 684.167 375.833C684.167 205.546 546.12 67.5 375.833 67.5ZM17.5 375.833C17.5 177.931 177.931 17.5 375.833 17.5C573.737 17.5 734.167 177.931 734.167 375.833C734.167 573.737 573.737 734.167 375.833 734.167C177.931 734.167 17.5 573.737 17.5 375.833ZM375.833 217.5C389.64 217.5 400.833 228.693 400.833 242.5V365.477L476.843 441.49C486.607 451.253 486.607 467.08 476.843 476.843C467.08 486.607 451.253 486.607 441.49 476.843L358.157 393.51C353.467 388.823 350.833 382.463 350.833 375.833V242.5C350.833 228.693 362.027 217.5 375.833 217.5Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={stroke}
      />
    </svg>
  );
};

export default ClockIcon;
