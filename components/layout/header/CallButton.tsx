import PhoneIcon from "@/components/icons/PhoneIcon";

interface CallButtonProps {
  number: string;
}

const CallButton = ({ number }: CallButtonProps) => {
  return (
    <a
      href={`tel:${number}`}
      className={`bg-brand-orange hover:bg-brand-orange-light text-white rounded
        p-2 transition flex items-center justify-center shadow-sm`}
      aria-label="Call us now"
    >
      <PhoneIcon className="h-5.5 w-5.5" />
    </a>
  );
};

export default CallButton;
