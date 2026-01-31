interface EmailIconProps {
  className?: string;
}

const EmailIcon = ({ className }: EmailIconProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 800 600"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M400 498.96L0 145.959V600H800V145.959L400 498.96ZM400.04 392.48L0 39.2407V0H800V39.2407L400.04 392.48Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default EmailIcon;
