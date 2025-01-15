import Image from "next/image";
import constants from "../utils/constantUtils";

export default function LogoClouds() {
  return (
    <div className="bg-white py-24 sm:py-32" style={{ paddingTop: "1rem" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg/8 font-semibold text-gray-900">
          Skills & Technologies
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {constants.logoList.map((item) => (
            <Image
              key={item.id}
              alt={item.alt}
              src={item.src}
              width={158} 
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              />
          ))}
        </div>
      </div>
    </div>
  );
}
