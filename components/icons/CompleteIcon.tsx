interface CompleteIconProps {
  className?: string;
}

const CompleteIcon = ({ className }: CompleteIconProps) => {
  return (
    <svg
      className={className}
      width="550"
      height="650"
      viewBox="0 0 550 650"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M425 75H550V650H0V75H125.05V125H425V75ZM118.45 344.75L83.05 380.1L224.5 521.5L472 274L436.6 238.7L224.5 450.8L118.45 344.75ZM175 75V0H375V75H175Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default CompleteIcon;
