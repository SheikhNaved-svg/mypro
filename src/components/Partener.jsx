import {img1,img2,img3,img4,img5,img6,img7,img8,img9} from '../assets/assets'
export default function Partener(){
    return(
        <div className='px-10 xl:px-28 2xl:px-40 py-20 flex flex-col gap-16 items-center w-screen font-custom bg-white'>
            <h1 className="text-3xl lg:text-6xl font-medium font-custom md:hidden lg:block">
            Trusted by Partners

            </h1>
            <h1 className='hidden md:block lg:hidden text-3xl font-semibold font-custom'>Our Trusted Partners</h1>

            <div className=' flex flex-col md:flex-row w-full md:justify-between  '>
                   <div className='md:w-[45%] md:border lg:border-0 md:border-[#FAA800] rounded-[20px] md:px-5 lg:px-10'>
                        <p className='text-center text-xl text-gray-600 py-3 lg:border border-[#FAA800] rounded-xl'>Implemetation Partners</p>
                        <div className="border-t-2 py-10 lg:border-0 border-[#FAA800] md:border-t flex flex-col gap-5 ">
                            <div className='flex justify-between'>
                                <div className='border border-black rounded-md flex justify-center items-center w-[130px] h-[50px]'><img src={img1} alt='noimage' />  </div>
                                <div className='border border-black rounded-md flex justify-center items-center w-[130px] h-[50px] '><img src={img2} alt='onimage' /> </div>
                            </div>
                            <div className='flex justify-between' >
                                <div className='border border-black rounded-md flex justify-center items-center w-[130px] h-[50px] '><img src={img3} /> </div>
                                <div className='border border-black rounded-md flex justify-center items-center w-[130px] h-[50px] '><img src={img4} />  </div>
                            </div>
                            <div className='flex justify-center'>
                                 <div className='border border-black rounded-md flex justify-center items-center w-[130px] h-[50px] '><img src={img5} /></div>
                            </div>
                        </div>
                    </div>

<div className='hidden lg:block'>
<svg xmlns="http://www.w3.org/2000/svg" width="2" height="375" viewBox="0 0 2 375" fill="none">
<path d="M1 0V375" stroke="url(#paint0_linear_179_895)" stroke-width="2"/>
<defs>
<linearGradient id="paint0_linear_179_895" x1="1.5" y1="0" x2="1.5" y2="375" gradientUnits="userSpaceOnUse">
<stop offset="0.045" stop-color="#FFA800" stop-opacity="0"/>
<stop offset="0.525" stop-color="#FFA800"/>
<stop offset="1" stop-color="#996500" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
</div>

                <div className='md:w-[45%] lg:border-0 md:px-5 lg:px-10 md:border md:border-[#FAA800] rounded-[20px]'>
                    <p className='text-center text-xl lg:border border-[#FAA800] rounded-xl text-gray-600 py-3'>Software Partners</p>
                    <div className='border-[#FAA800] lg:border-0 border-t-2 md:border-t py-10 flex flex-col gap-5'>
                        <div className='flex justify-between'>
                            <div className='border border-black rounded-md flex justify-center items-center w-[130px] h-[50px]'> <img src={img6} /></div>
                                <div className='border border-black rounded-md flex justify-center items-center w-[130px] h-[50px]'><img src={img7} /></div>

                        </div>
                        <div className='flex justify-between'>
                            <div className='border border-black rounded-md flex justify-center items-center w-[130px] h-[50px]'><img src={img8} /></div>
                            <div className='border border-black rounded-md flex justify-center items-center w-[130px] h-[50px]'><img src={img9} /></div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}