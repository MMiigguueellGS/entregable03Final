import React from "react";

const Loader = () => {
  return (
    <section className="z-[100] fixed  left-0 right-0 top-0 bottom-0  bg-black/100 flex  items-center justify-center" >
      <section className="grid gap-4 ">
    
        <h2 className="text-[#8EFF8B] text-center efect__loader font-bold font-Fira-Code">
          Rick && Morty
        </h2>

      
        <div className="grid  grid-cols-6 gap-1 rounded-2xl  bg-transparent justify-around items-center w-[260px] ">
          <div className="bg-[url('/images/header-logo.png')] bg-cover bg-center displace loader__animation1"></div>
          <div className="bg-[url('/images/header-logo.png')] bg-cover bg-center displace  loader__animation2 "></div>
          <div className="bg-[url('/images/header-logo.png')] bg-cover bg-center displace  loader__animation3"></div>
          <div className="bg-[url('/images/header-logo.png')] bg-cover bg-center displace  loader__animation4"></div>
          <div className="bg-[url('/images/header-logo.png')] bg-cover bg-center displace  loader__animation5"></div>
          <div className="bg-[url('/images/header-logo.png')] bg-cover bg-center displace  loader__animation6 "></div>
        </div>
      </section>
    </section>
  );
};

export default Loader;
