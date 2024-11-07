import { Exclude,demo,menu2 } from "../assets/assets"
export default function Navbar(){
    
    return(
        <>
        <div className="box-border font-custom  flex z-[999] sticky top-0 justify-between  items-center p-5 h-[72px] bg-[#FFFFFF]  lg:px-16">
            <div>
                <div className="flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="33" height="29" viewBox="0 0 33 29" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.66665 18.3333C14.4531 18.3333 18.3333 14.4531 18.3333 9.66666C18.3333 4.88021 14.4531 1.00001 9.66665 1.00001C4.88019 1.00001 1 4.88021 1 9.66666C1 14.4531 4.88019 18.3333 9.66665 18.3333ZM9.66665 19.3333C15.0054 19.3333 19.3333 15.0054 19.3333 9.66666C19.3333 4.32792 15.0054 1.35835e-05 9.66665 1.35835e-05C4.32791 1.35835e-05 0 4.32792 0 9.66666C0 15.0054 4.32791 19.3333 9.66665 19.3333ZM22.5556 18.3333C27.342 18.3333 31.2222 14.4531 31.2222 9.66665C31.2222 4.88019 27.342 1 22.5556 1C17.7691 1 13.8889 4.88019 13.8889 9.66665C13.8889 14.4531 17.7691 18.3333 22.5556 18.3333ZM22.5556 19.3333C27.8943 19.3333 32.2222 15.0054 32.2222 9.66665C32.2222 4.32791 27.8943 0 22.5556 0C17.2168 0 12.8889 4.32791 12.8889 9.66665C12.8889 15.0054 17.2168 19.3333 22.5556 19.3333ZM16.111 28C20.8975 28 24.7777 24.1198 24.7777 19.3333C24.7777 14.5468 20.8975 10.6666 16.111 10.6666C11.3246 10.6666 7.44439 14.5468 7.44439 19.3333C7.44439 24.1198 11.3246 28 16.111 28ZM16.111 29C21.4498 29 25.7777 24.672 25.7777 19.3333C25.7777 13.9946 21.4498 9.66665 16.111 9.66665C10.7723 9.66665 6.44439 13.9946 6.44439 19.3333C6.44439 24.672 10.7723 29 16.111 29Z" fill="#FFA800"/>
</svg>  Contrast<span className="text-[#FFA800]">.ai</span></div>
            </div>

            <div className=' hidden cursor lg:flex gap-8'>
                <div className="hover:text-[#FFA800] ease-in-out  duration-500">Features</div>
                <div className="hover:text-[#FFA800] ease-in-out  duration-500">Resources</div>
                <div className="hover:text-[#FFA800] ease-in-out duration-500">Solutions</div>
                <div className="hover:text-[#FFA800] ease-in-out  duration-500">Marketers</div>
                <div className="hover:text-[#FFA800] ease-in-out  duration-500">Pricing</div>

            </div>

            <div className="hidden lg:flex gap-3 ">
             <div className="px-8 py-3 rounded-full border text-[#FFA800] border-[#FFA800] hover:text-white duration-300 hover:bg-[#FAA800]">login</div>
             <div className="bg-[#FFA800] px-8 py-3 text-white rounded-full hover:bg-white hover:text-[#FAA800] duration-300 hover:border-[#FAA800] border">Demo</div>
            </div>
            

            <div className="flex gap-3 items-center lg:hidden">
                <div className="text-[#FFA800] border-[#FFA800] border px-5   rounded-full">Free Trial</div>
                <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<rect width="24" height="24" rx="4.8" transform="matrix(-1 0 0 1 24 0)" fill="white" fill-opacity="0.7"/>
<rect x="-0.1" y="0.1" width="23.8" height="23.8" rx="4.7" transform="matrix(-1 0 0 1 23.8 0)" stroke="#FFA800" stroke-opacity="0.5" stroke-width="0.2"/>
<path d="M17.52 8.16003L6.48002 8.16003" stroke="#FFA800" stroke-width="1.2" stroke-linecap="round"/>
<path d="M17.52 12L6.48002 12" stroke="#FFA800" stroke-width="1.2" stroke-linecap="round"/>
<path d="M17.52 15.84L6.48002 15.84" stroke="#FFA800" stroke-width="1.2" stroke-linecap="round"/>
</svg></div>
            </div>
        </div>
        </>
    )
}