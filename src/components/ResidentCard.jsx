import React, { useEffect, useState } from "react";
import axios from "axios";
const ResidentCard = ({ residentUrl }) => {
  const [ResidentInfo, setResidentInfo] = useState(null)
  useEffect(() => {
    axios
      .get(residentUrl)
      .then(({ data }) => setResidentInfo(data))
      .catch((err) => console.log(err));
  }, []);

  const residentStatus ={
    Alive: "bg-green-500",
    Dead: "bg-red-500",
    unknown: "bg-slate-500"
  }
  return (
    <article className=" h-[480px] w-[310px] border-2 border-green-500 ">
      <header className="border-b-2 border-green-500 relative w-full">
        <img className="h-full w-full object-cover object-center overflow-hidden " src={ResidentInfo?.image} alt="" />
        <div className="flex items-center gap-2 px-4 absolute bottom-[10%] left-[33%] border-2 border-green-500 bg-neutral-950">
          <div className={`h-[10px] aspect-square ${residentStatus[ResidentInfo?.status]} rounded-full`}></div>
          {ResidentInfo?.status}
        </div>
      </header>
      <section className=" p-3 w-full ">
        <h3 className="font-bold text-[28px] truncate">{ResidentInfo?.name}</h3>
        <ul className="border-t-2 border-[#8fff8b44] py-2 grid gap-2">
          <li className="grid grid-cols-2"><span className="text-[#938686] font-medium">Species</span> <span className="font-semibold truncate">{ResidentInfo?.species}</span></li>
          <li className="grid grid-cols-2"><span className="text-[#938686] font-medium" >Origin </span><span className="font-semibold truncate">{ResidentInfo?.origin.name}</span></li>
          <li className="grid grid-cols-2"><span className="text-[#938686] font-medium">Times apper</span><span className="font-semibold truncate">{ResidentInfo?.episode.length}</span> </li>
        </ul>
      </section>
    </article>
  );
};

export default ResidentCard;
