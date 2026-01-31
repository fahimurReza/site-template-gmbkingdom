interface LocationIconProps {
  className?: string;
}

const LocationIcon = ({ className }: LocationIconProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 500 650"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M250 0C112.5 0 0 112.5 0 250C0 460 225 637.5 235 645C240 647.5 245 650 250 650C255 650 260 647.5 265 645C275 637.5 500 460 500 250C500 112.5 387.5 0 250 0ZM250 350C195 350 150 305 150 250C150 195 195 150 250 150C305 150 350 195 350 250C350 305 305 350 250 350Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default LocationIcon;
