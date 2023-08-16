import React from "react";

const LocationInfo = ({ currentLocation }) => {
  return (
    <section className="grid gap-4 ">
      <h2 className="text-[#8EFF8B] font-medium text-center">
       
        ¡ Wellcome to the <span className="font-bold text-xl">{currentLocation?.name}</span> universe!
      </h2>
      <ul className="flex  justify-around flex-wrap gap-6">
        <li>
          <span className="text-[#938686]  font-medium">Type  </span>
          <span className="font-semibold">{currentLocation?.type}</span>
        </li>
        <li>
          <span className="text-[#938686] font-medium">Dimension </span>
          <span className="font-semibold truncate">{currentLocation?.dimension}</span>
        </li>
        <li>
          <span className="text-[#938686]  font-medium">Population </span>
          <span className="font-semibold">
            {currentLocation?.residents.length}
          </span>
        </li>
      </ul>
    </section>
  );
};

export default LocationInfo;
