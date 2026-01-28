import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image
        src="/logo.svg"
        alt="logo"
        width={220}
        height={220}
        className="mr-2"
      />
    </div>
  );
};

export default Logo;
