interface PermitIconProps {
  className?: string;
}

const PermitIcon = ({ className }: PermitIconProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 600 798"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M299.6 2.9L0 0V797.7H599.6V250H298.446C297.781 250 299.6 2.9 299.6 2.9ZM352.218 461.131H505L381.442 551.47L428.583 697.65L305.026 607.259L181.417 697.65L228.558 551.47L105 461.131H257.782L304.974 297.65L352.218 461.131Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M350.801 0.799805V199.75H598.151L350.801 0.799805Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default PermitIcon;
