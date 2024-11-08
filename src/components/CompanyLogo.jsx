import { logo2, logo3, logo4, logo5, logo6,ball } from "../assets/assets";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
export default function Companylogo() {
  const ani = useRef(null);
  useEffect(() => {
    
    gsap.to(ani.current, { duration: 20, x: "-100%", repeat: -1, yoyo: true });
  });

  return (
      <div className="overflow-x-hidden w-screen" >
    
    <div className="overflow-x-hidden font-custom  ">
    <div className="w-screen relative py-10 lg:py-0  bg-[#FFF7E7] lg:bg-white lg:flex lg:items-center overflow-x-hidden">
      <div className="  hidden w-[100%]  lg:grid grid-cols-10 absolute z-0 overflow-hidden">
         
      <div className="  border border-[#ffe1a4] border-b-0   h-[150px]"></div>
        <div className="border border-[#ffe1a4] border-b-0  h-[150px]"></div>
        <div className="border border-[#ffe1a4]  border-b-0   h-[150px]"></div>
        <div className="border border-[#ffe1a4] border-b-0   h-[150px]"></div>
        <div className="border border-[#ffe1a4] border-b-0   h-[150px]"></div>
        <div className="border border-[#ffe1a4] border-b-0   h-[150px]"></div>
        <div className="border border-[#ffe1a4] border-b-0   h-[150px]"></div>
        <div className="border border-[#ffe1a4] border-b-0   h-[150px]"></div>
        <div className="border border-[#ffe1a4] border-b-0  h-[150px]"></div>
        <div className="border border-r-0 border-[#ffe1a4] border-b-0  h-[150px]"></div>
      </div>  

     



      <div className="px-2 lg:w-[30%] lg:px-5 z-10 lg:bg-white lg:py-4  ">
        <p className=" text-center 2xl:text-2xl">
          Join more than{" "}
          <span className="text-[#FFA800] font-bold text-3xl">
            <br className="hidden lg:block"></br>100+
          </span>{" "}
          <br className="hidden lg:block"></br>leading companies
          <br className="md:hidden"></br> who trust Contrast
        </p>
        
      </div>

      <div className="z-10 lg:w-[90%] lg:overflow-hidden lg:flex justify-center items-center">
        <div
          ref={ani}
          className="flex gap-14 translate-x-[100%] w-screen pt-8 "
        >
          <img src={logo2} alt="noimage" />
          <img src={logo3} alt="noimage" />
          <img src={logo4} alt="noimage" />
          <img src={logo5} alt="noimage" />
          <img src={logo6} alt="noimage" />
          <img src={logo2} alt="noimage" />
          <img src={logo3} alt="noimage" />
          <img src={logo4} alt="noimage" />
          <img src={logo5} alt="noimage" />
          <img src={logo6} alt="noimage" />
        </div>
      </div>
    </div>
    </div>
    {/*bottom */}



    
    <div className="hidden w-screen  lg:grid grid-cols-10  z-20 overflow-x-hidden h-[80px] ">
  <div className="border-t border-l border-r border-[#ffe1a4] h-full"></div>
  <div className="border-t border-l border-r border-[#ffe1a4] h-full"></div>
  <div className="border-t border-l border-r border-[#ffe1a4] h-full"></div>
  <div className="border-t border-l border-r border-[#ffe1a4] h-full"></div>
  <div className="border-t border-l border-r border-[#ffe1a4] h-full"></div>
  <div className="border-t border-l border-r border-[#ffe1a4] h-full"></div>
  <div className="border-t border-l border-r border-[#ffe1a4] h-full"></div>
  <div className="border-t border-l border-r border-[#ffe1a4] h-full"></div>
  <div className="border-t border-l border-r border-[#ffe1a4] h-full"></div>
  <div className="border-t border-l border-r-0 border-[#ffe1a4] h-full"></div>
  <div className="absolute w-[130px] right-0">
    <img src={ball} alt='noimage' />
  </div>
</div>








   
  </div>
    
  );
}
