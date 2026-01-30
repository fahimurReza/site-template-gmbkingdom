import Image from "next/image";
import Button from "@/components/ui/Button";

const ServiceCard = () => {
  return (
    <main className="bg-white p-8 rounded-xl shadow-md">
      <div className="flex justify-start items-start">
        <Image
          src="/patio.svg"
          alt="patio icon"
          width={54}
          height={54}
          className="mb-4"
        />
      </div>
      <h2 className="text-2xl font-bold text-tx-theme mt-4">
        Patio Construction
      </h2>
      <h2 className="text-tx-secondary text-sm mt-3">
        Engineered foundations for commercial and industrial structures across
        North Texas.
      </h2>
      <ul className="mt-5 space-y-3 text-xs text-tx-secondary">
        <li className="flex items-start gap-3 font-medium">
          <div className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-orange-600/40"></div>
          <span>Mat, spread, and pier-supported systems</span>
        </li>
        <li className="flex items-start gap-3 font-medium">
          <div className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-orange-600/40"></div>
          <span>Laser layout and precision anchor placement</span>
        </li>
        <li className="flex items-start gap-3 font-medium">
          <div className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-orange-600/40"></div>
          <span>Thermal control plans for large placements</span>
        </li>
      </ul>
      <div className="pt-6 mt-10 flex justify-between mx-auto border-t border-gray-100">
        <Button variant="whiteSmall">Details</Button>
        <Button variant="secondarySmall">Quote</Button>
      </div>
    </main>
  );
};

export default ServiceCard;
