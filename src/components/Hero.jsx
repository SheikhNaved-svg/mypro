
import {useRef,useEffect} from 'react';
import gsap from 'gsap';

import { ring2, a1, chat, chats, submit, ball } from "../assets/assets";


export default function Hero() {
    const items = ["Blogs", "Emails", "Posts", "Articles", "Advertisement"];
  const textRefs = useRef([]);
  const ballRef = useRef(null);
  const chat1 = useRef(null);
  const ringone=useRef(null);
  const ringtwo=useRef(null)

  useEffect(() => {
    gsap.to(ballRef.current, {
      duration: 4,
      x: "-10%",
      y: "10%",
      yoyo: true,
      repeat: -1,
    });
    const timeline = gsap.timeline();
    timeline
      .to(chat1.current, { duration: 1.5, y: "-15%" })
      .to(chat1.current, { duration: 1.5, y: "-35%" })
      .to(chat1.current, { duration: 1.5, y: "-60%" })
      .to(chat1.current, { duration: 1.5, y: "-100%" });

     
  }, []);

  useEffect(()=>{
       gsap.to(ringone.current,{duration:4,rotate:360,yoyo:true,repeat:1})
       gsap.to(ringtwo.current,{duration:4,rotate:360,yoyo:true,repeat:1})
  },[])

  useEffect(() => {
    textRefs.current = textRefs.current.slice(0, items.length);

    const tl = gsap.timeline();

    textRefs.current.forEach((el, index) => {
      tl.to(
        el,
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        },
        index * 2
      ).to(
        el,
        {
          y: -50,
          opacity: 0,
          duration: 0.8,
          ease: "power2.in",
        },
        `+=1`
      );
    });

    tl.to(textRefs.current[items.length - 1], {
      opacity: 1,
      y: 0,
      duration: 0,
    });
  }, [items.length]);
  return (
    <div>
      
      {/*full container*/}
      <div className="w-screen  font-custom box-border">

        {/*sm container*/}
        <div className="lg:hidden relative   px-5 py-10 md:px-20 md:pt-16 ">

          {/*animation*/}
          <div className=" relative opacity-[.1] flex justify-center w-[calc(100vw-40px)]">
          <div ref={ringone} className="absolute   ">
          <svg xmlns="http://www.w3.org/2000/svg" width="260" height="254" viewBox="0 0 260 254" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M52.3077 126.104C76.9623 162.037 126.078 171.18 162.011 146.525C197.944 121.871 207.087 72.7549 182.433 36.8219C157.778 0.888824 108.662 -8.25417 72.7292 16.4004C36.7961 41.055 27.6531 90.171 52.3077 126.104ZM50.5042 127.341C75.8422 164.271 126.32 173.667 163.249 148.329C200.178 122.991 209.574 72.5135 184.236 35.5844C158.898 -1.34469 108.421 -10.7411 71.4917 14.5969C34.5626 39.9349 25.1662 90.4124 50.5042 127.341ZM113.479 215.259C138.134 251.192 187.25 260.335 223.183 235.68C259.116 211.025 268.259 161.909 243.604 125.976C218.95 90.0433 169.834 80.9003 133.901 105.555C97.9675 130.209 88.8245 179.325 113.479 215.259ZM111.676 216.496C137.014 253.425 187.491 262.822 224.42 237.483C261.349 212.145 270.746 161.668 245.408 124.739C220.07 87.8098 169.592 78.4133 132.663 103.751C95.734 129.089 86.3375 179.567 111.676 216.496ZM16.0273 216.559C40.6819 252.492 89.7979 261.635 125.731 236.98C161.664 212.326 170.807 163.21 146.152 127.277C121.498 91.3435 72.3818 82.2005 36.4488 106.855C0.515733 131.51 -8.62726 180.626 16.0273 216.559ZM14.2238 217.796C39.5618 254.725 90.0393 264.122 126.968 238.784C163.897 213.446 173.294 162.968 147.956 126.039C122.618 89.11 72.1404 79.7135 35.2113 105.052C-1.71778 130.39 -11.1142 180.867 14.2238 217.796Z" fill="#FFA800"/>
</svg>
          </div>
          <div ref={ringtwo} className="absolute top-[50px]  ">
          <svg xmlns="http://www.w3.org/2000/svg" width="271" height="244" viewBox="0 0 271 244" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M81.4621 160.338C125.04 160.338 160.367 125.011 160.367 81.4333C160.367 37.8554 125.04 2.52858 81.4621 2.52858C37.8842 2.52858 2.55735 37.8554 2.55735 81.4333C2.55735 125.011 37.8842 160.338 81.4621 160.338ZM81.4621 162.525C126.248 162.525 162.554 126.219 162.554 81.4333C162.554 36.6475 126.248 0.341343 81.4621 0.341343C36.6762 0.341343 0.370117 36.6475 0.370117 81.4333C0.370117 126.219 36.6762 162.525 81.4621 162.525ZM189.584 160.338C233.162 160.338 268.489 125.011 268.489 81.4333C268.489 37.8554 233.162 2.52855 189.584 2.52855C146.006 2.52855 110.679 37.8554 110.679 81.4333C110.679 125.011 146.006 160.338 189.584 160.338ZM189.584 162.525C234.37 162.525 270.676 126.219 270.676 81.4333C270.676 36.6474 234.37 0.341309 189.584 0.341309C144.798 0.341309 108.492 36.6474 108.492 81.4333C108.492 126.219 144.798 162.525 189.584 162.525ZM135.522 241.43C179.1 241.43 214.427 206.103 214.427 162.525C214.427 118.947 179.1 83.6204 135.522 83.6204C91.9444 83.6204 56.6175 118.947 56.6175 162.525C56.6175 206.103 91.9444 241.43 135.522 241.43ZM135.522 243.617C180.308 243.617 216.614 207.311 216.614 162.525C216.614 117.739 180.308 81.4331 135.522 81.4331C90.7364 81.4331 54.4303 117.739 54.4303 162.525C54.4303 207.311 90.7364 243.617 135.522 243.617Z" fill="#FFA800"/>
</svg>
          </div>
          </div>
              {/*first*/}
              <div className="text-[35px] md:text-[60px] font-bold text-center">
                <div>Automate Your</div>
                <div className="text-[#FAA800] underline">Content</div>
                <div>To Revolutionize</div>
                <div>Marketing</div>
              </div>
              {/*second*/}
              <div className="text-center py-20">
              Easily craft SEO-optimized blogs, engaging social posts, and effective emails with AI—all from one platform.
              </div>
              {/*third*/}
              <div className="w-full flex justify-between md:justify-center md:gap-10">
              <button className="text-white bg-[#FFA800] px-4 md:px-8 py-4 rounded-full">
              Get a Demo
            </button>

            <button className="text-[#FFA800] border border-[#FFA800] px-3 md:px-7 py-4 rounded-full">
              Try Free Trial
            </button>
              </div>

        </div>
        {/*large device*/}
        <div className="hidden bg-red-500  w-full px-10 py-10 xl:p-20 2xl:justify-around 2xl:px-20 2xl:py-36 lg:flex justify-between items-center ">
          {/*left container*/}
          <div className="   flex flex-col  ">
            
            <div className="firstbox text-[45px] xl:text-[60px] 2xl:text-[75px] font-bold">
              <div className="flex gap-2 items-center flex-wrap">
                <div>Automate Your</div>
                <div className=" relative h-[55px] xl:h-[65px] 2xl:h-[95px] overflow-y-hidden overflow-x-hidden w-[320px] xl:w-[440px] 2xl:w-[580px] lg:flex justify-start bg-white items-center ">
      {items.map((item, index) => (
        <div
          key={index}
          ref={(el) => (textRefs.current[index] = el)}
          className="absolute translate-y-[50px]   text-center  text-[#FFA800] z-[100] opacity-0"
           
        >
          {item}
        </div>
      ))}
    </div>
                </div>


              <div>To Revolutionize Marketing</div>
            </div>
            <div className="secbox py-10 2xl:text-xl ">
              Easily craft SEO-optimized blogs,engaging social posts, and
              effective emails <br></br>with AI-all from one platform.
            </div>
            <div className="thirdbox 2xl:text-xl  flex gap-5">
             
              <button
  className="text-white bg-[#FFA800] border border-[#FFA800] hover:bg-white hover:text-[#FFA800] duration-300 hover:border-white px-6 py-3 rounded-full  hover:shadow-[0_0_5px_#FFA800]"
>
  Demo
</button>


              <button className="text-black group  font-semibold flex px-5 py-3 rounded-full border border-black hover:text-[#FAA800] duration-300 hover:border-[#FAA800] ">
                <div className='orange hidden group-hover:block'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="26"
                  viewBox="0 0 25 26"
                  fill="none"
                >
                  <g clip-path="url(#clip0_761_2021)">
                    <path
                      d="M7.8735 6.25403V17.4983L17.2437 11.8762L7.8735 6.25403Z"
                      fill="#FFA800"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_761_2021">
                      <rect
                        width="24.9863"
                        height="24.9863"
                        fill="white"
                        transform="translate(0 0.631836)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                </div>
                <div className='black group-hover:hidden '>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" fill="none">
<g clip-path="url(#clip0_780_2123)">
<path d="M7.87354 6.25403V17.4983L17.2438 11.8762L7.87354 6.25403Z" fill="#2F2F2F"/>
</g>
<defs>
<clipPath id="clip0_780_2123">
<rect width="24.9863" height="24.9863" fill="white" transform="translate(0 0.631836)"/>
</clipPath>
</defs>
</svg>

                </div>
                How It Work
              </button>
            </div>
            
          </div>
          {/*right container */}
          <div className=" bg-white relative overflow-y-hidden z-0  overflow-x-hidden  ">
          <div ref={ballRef}  className="absolute -translate-y-[30%] translate-x-[20%] w-[700px]">
            <img src={ball} />
          </div>
          <div className="  h-[420px] w-[330px] left-3 relative ">
            <div className=" flex flex-col items-center  border-[#FFA800] border-l-8 border-b-8 overflow-y-hidden    h-[100%] w-[100%] absolute rounded-tl-[50px] rounded-br-[50px] z-[99] right-[0%] top-[1%]  ">
              <div className="absolute  flex-col flex items-center  h-[88%] overflow-y-hidden w-[100%]">
                {/*working*/}
                <img
                  ref={chat1}
                  className="absolute top-[100%]"
                  src={a1}
                  alt="error"
                />
              </div>
              <div className=" absolute top-[89%] flex gap-3">
                <input
                  className="border-gray-400 border rounded-full"
                  type="text"
                />
                <button>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                    >
                      <circle cx="18" cy="18" r="18" fill="#FFB539" />
                      <path
                        d="M12.5913 24.8116V10.0547L28.8239 17.4331L12.5913 24.8116ZM14.3 22.0447L24.424 17.4331L14.3 12.8216V16.0497L19.4261 17.4331L14.3 18.8166V22.0447Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
            <div className="p-5 z-10 relative h-[100%] w-[330px]   opacity-[.8] bg-white    rounded-tl-[50px] rounded-br-[50px] shadow-lg">
              {/*  <img src={chat} />*/}
            </div>
          </div>
        </div>
        </div>
        
    </div>
    </div>
  );
}
