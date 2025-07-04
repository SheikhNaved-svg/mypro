import React from 'react'

const Whyus = () => {
  return (
    <div className='flex justify-center'>
    <div className='relative max-w-screen-xl w-full '>
    <div className='lg:pl-12 md:pl-8  lg:pr-[30%] md:pr-[20%] absolute left-5 top-[-50px]  md:top-0  bg-white'>
    <div className="w-full flex flex-col-reverse md:flex-row gap-8 md:gap-4 lg:gap-10 py-5 md:py-10 px-5 lg:px-10 border border-[#919191] ">
        {/* Left Content */}
        <p className="text-[#6C6C6C] md:text-[14px] lg:text-[18px]  leading-[180%] tracking-[-1.5%] w-full md:w-[60%]">
          With ProCare’s 8-point referral management system and triple confirmation guarantee you
          receive unparalleled customer service every time, day or night. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Quis ipsum suspendisse ultrices gravida.
        </p>

        {/* Right Content */}
        <div className=' w-full md:w-[40%] mt-8'>
          <h4 className="text-[16px] font-semibold text-[#8E110F] leading-[100%] mb-4">why us</h4>
          <h2 className="text-[24px]  md:text-[34px]  font-semibold leading-[100%] text-[#414143] ">
            The answer <br className='hidden md:block'></br>
            is genius.
          </h2>
        </div>
      </div>
      </div>
      </div>
      </div>
  )
}

export default Whyus;
