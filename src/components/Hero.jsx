import { ring2, chat,chats, submit,ball } from "../assets/assets";
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export default function Hero() {
  const items = ["Blogs", "Emails", "Posts", "Articles", "Advertisement"];
  const textRefs = useRef([]);
  const ballRef=useRef(null);

  useEffect(() => {
    textRefs.current = textRefs.current.slice(0, items.length);

    
    const tl = gsap.timeline();

  
    textRefs.current.forEach((el, index) => {
    
      tl.to(el, { 
        y: 0,             
        opacity: 1,       
        duration: 0.8,     
        ease: "power2.out" 
      }, index * 2)  
      .to(el, { 
        y: -50,           
        opacity: 0,       
        duration: 0.8, 
        ease: "power2.in" 
      }, `+=1`); 
    });

   
    tl.to(textRefs.current[items.length - 1], { 
      opacity: 1,        
      y: 0,              
      duration: 0        
    });

  }, [items.length]);

  useEffect(()=>{
    

    gsap.to(ballRef.current,{
      duration:4,
      x:"-26%",
      y:"50%",
      yoyo:true,
      repeat:-1
    })

  },[])

  
   

  return (
    <>
      <div className="lg:flex lg:w-screen lg:h-[calc(100vh-60px)] font-custom ">
        <div className="  box-border opacity-[.2] absolute flex justify-center items-center w-screen h-[400px] lg:hidden">
          <img src={ring2} alt="noimage" />
        </div>
        {/* left */}
        <div className=" w-screen lg:w-[70%] lg:pl-5 lg:flex lg:flex-col lg:justify-center">
          <div>
            
            <div className="placeholder-opacity-10  px-10 text-[40px] font-bold text-center md:text-[75px] md:pt-24 md:pb-10 lg:text-[45px] lg:py-10  lg:text-start">
             <div className="lg:hidden">
              Automate Your{" "}
              <span className="text-[#FFA800] underline  ">
                Content
              </span>
            </div>
              <div className=" hidden lg:flex items-center gap-2">
              <p className="hidden lg:inline ">Automate Your</p>
             {/*animation */}
             <div className=" hidden relative h-[55px] overflow-y-hidden overflow-x-hidden w-[360px] lg:flex justify-start bg-white items-center ">
      {items.map((item, index) => (
        <div
          key={index}
          ref={(el) => (textRefs.current[index] = el)}
          className="absolute translate-y-[50px]   text-center  text-[#FFA800] opacity-0"
           
        >
          {item}
        </div>
      ))}
    </div>
    </div>

              <p> To Revolutionize Marketing</p>
            </div>
          </div>
          <div>
            <p className=" py-10 px-4 text-center md:px-32 lg:pt-0 lg:px-10  lg:text-start">
              Easily craft SEO-optimized blogs,engaging social posts, and
              effective emails with AI-all from one platform.
            </p>
          </div>


          <div className="flex justify-between text-xl px-10 py-5  md:justify-center md:gap-7 lg:hidden">
            <button className="text-white bg-[#FFA800] px-6 py-3 rounded-full">
              Get a Demo
            </button>
            
            <button className="text-[#FFA800] border border-[#FFA800] px-5 py-3 rounded-full">
              Try Free Trial
            </button>
          </div>

          <div className="hidden lg:flex gap-5 lg:px-10  ">
          <button className="text-white bg-[#FFA800] border border-[#FFA800] hover:bg-white hover:text-[#FFA800] duration-300 hover:border  px-6 py-3 rounded-full">
              Demo
            </button>
            
            <button className="text-black font-semibold px-5 py-3 rounded-full border border-black hover:text-[#FAA800] duration-300 hover:border-[#FAA800] ">
              How It Work
            </button>
            
          </div>
        </div>
      {/*right */}
        <div className=" w-[30%] hidden relative overflow-y-hidden  overflow-x-hidden  lg:flex lg:flex-col h-[100%] justify-center ">
          <div ref={ballRef} className="absolute -translate-y-[50%] w-[700px]">
          <img  src={ball} />
          </div>
            <div className="  h-[359px] w-[270px] left-8 relative ">
            <div className="   border-[#FFA800] border-l-8 border-b-8    h-[335px] w-[277px] absolute rounded-tl-[50px] rounded-br-[50px] z-[99] right-[0%] top-[1%]  ">  <img src={chats} alt='error' /></div>
            <div className="p-5 z-10 relative h-[330px] w-[270px]   opacity-[.8] bg-white    rounded-tl-[50px] rounded-br-[50px] shadow-2xl">
           
           {/*  <img src={chat} />*/}
          
            

            <div className=" absolute top-[87%] flex justify-between">
              <input
                className="border-gray-400 border rounded-full"
                type="text"
              />
              <button>
                
                <div><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
<circle cx="18" cy="18" r="18" fill="#FFB539"/>
<path d="M12.5913 24.8116V10.0547L28.8239 17.4331L12.5913 24.8116ZM14.3 22.0447L24.424 17.4331L14.3 12.8216V16.0497L19.4261 17.4331L14.3 18.8166V22.0447Z" fill="white"/>
</svg></div>
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
