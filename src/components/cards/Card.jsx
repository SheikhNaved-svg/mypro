
export default function Card({ball}) {
  return (
      <div>

    <div className="w-[100vw] flex justify-between overflow-x-hidden px-16 py-10 font-custom bg-white">
     
     
      <div className="  w-[30%]  ">
        <div className=" relative   group h-[340px] ">
          <div className="bg-[#FFA800] rounded-tl-[50px] rounded-br-[50px] w-[100%] right-2 top-2 absolute h-[100%] ease-in-out duration-300 group-hover:-translate-y-6"></div>
          <div className="bg-white border shadow-[2px_-2px_5px_#D3D3D3] rounded-tl-[50px] rounded-br-[50px] w-[100%] absolute h-[100%] pt-[140px] px-6 ease-in-out duration-300 group-hover:-translate-y-6">
            <div className="px-3 pb-4 text-3xl">Story Engine</div>
            <div className="px-3">
              
            Curate content using a blend of AI tools and human creativity for superior content with Story Engine. 
            </div>
          </div>
          <div className=" h-[84px] absolute left-[32px] top-[32px] group overflow-y-hidden border border-[#FFA800] rounded-tl-[35px] rounded-br-[35px]  ">
            <div className="absolute top-2 left-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="76" height="62" viewBox="0 0 76 62" fill="none">
<mask id="path-1-inside-1_640_1254" fill="white">
<path d="M0.51532 61.0981V51.5987C0.51532 49.7328 0.99869 47.9799 1.96543 46.3401C2.93217 44.7004 4.26855 43.4564 5.97456 42.6082C8.87478 41.1381 12.1446 39.8941 15.7841 38.8763C19.4236 37.8586 23.4328 37.3497 27.8115 37.3497C32.1903 37.3497 36.1994 37.8586 39.8389 38.8763C43.4784 39.8941 46.7483 41.1381 49.6485 42.6082C51.3545 43.4564 52.6909 44.7004 53.6576 46.3401C54.6243 47.9799 55.1077 49.7328 55.1077 51.5987V61.0981H0.51532ZM7.33937 54.3128H48.2837V51.5987C48.2837 50.9768 48.1273 50.4113 47.8145 49.9024C47.5017 49.3935 47.0895 48.9977 46.5777 48.715C44.5304 47.6972 41.9003 46.6794 38.6873 45.6616C35.4744 44.6438 31.8491 44.1349 27.8115 44.1349C23.774 44.1349 20.1487 44.6438 16.9357 45.6616C13.7227 46.6794 11.0926 47.6972 9.04538 48.715C8.53358 48.9977 8.12129 49.3935 7.80852 49.9024C7.49575 50.4113 7.33937 50.9768 7.33937 51.5987V54.3128ZM27.8115 33.957C24.0583 33.957 20.8453 32.6282 18.1725 29.9707C15.4998 27.3131 14.1634 24.1184 14.1634 20.3865H13.3104C12.7986 20.3865 12.3863 20.231 12.0736 19.92C11.7608 19.609 11.6044 19.199 11.6044 18.6901C11.6044 18.1813 11.7608 17.7713 12.0736 17.4603C12.3863 17.1493 12.7986 16.9938 13.3104 16.9938H14.1634C14.1634 14.4494 14.789 12.1593 16.04 10.1237C17.2911 8.08815 18.9403 6.47665 20.9875 5.28923V8.51223C20.9875 9.02113 21.1439 9.43107 21.4566 9.74207C21.7694 10.0531 22.1817 10.2086 22.6935 10.2086C23.2053 10.2086 23.6176 10.0531 23.9303 9.74207C24.2431 9.43107 24.3995 9.02113 24.3995 8.51223V3.93217C24.9113 3.76254 25.4515 3.63532 26.0202 3.5505C26.5889 3.46569 27.186 3.42328 27.8115 3.42328C28.4371 3.42328 29.0342 3.46569 29.6028 3.5505C30.1715 3.63532 30.7117 3.76254 31.2235 3.93217V8.51223C31.2235 9.02113 31.3799 9.43107 31.6927 9.74207C32.0055 10.0531 32.4178 10.2086 32.9296 10.2086C33.4414 10.2086 33.8536 10.0531 34.1664 9.74207C34.4792 9.43107 34.6356 9.02113 34.6356 8.51223V5.28923C36.6828 6.47665 38.3319 8.08815 39.583 10.1237C40.8341 12.1593 41.4596 14.4494 41.4596 16.9938H42.3126C42.8244 16.9938 43.2367 17.1493 43.5495 17.4603C43.8622 17.7713 44.0186 18.1813 44.0186 18.6901C44.0186 19.199 43.8622 19.609 43.5495 19.92C43.2367 20.231 42.8244 20.3865 42.3126 20.3865H41.4596C41.4596 24.1184 40.1232 27.3131 37.4505 29.9707C34.7777 32.6282 31.5647 33.957 27.8115 33.957ZM27.8115 27.1717C29.6881 27.1717 31.2946 26.5074 32.631 25.1786C33.9674 23.8498 34.6356 22.2524 34.6356 20.3865H20.9875C20.9875 22.2524 21.6557 23.8498 22.992 25.1786C24.3284 26.5074 25.9349 27.1717 27.8115 27.1717ZM53.4017 40.7423L52.8899 38.1978C52.5487 38.0847 52.2217 37.9575 51.9089 37.8161C51.5962 37.6748 51.2976 37.4627 51.0133 37.18L48.6249 38.0282L46.9189 34.9748L48.7955 33.2785V31.2429L46.9189 29.5466L48.6249 26.4932L51.0133 27.3414C51.2408 27.1152 51.5251 26.9173 51.8663 26.7477C52.2075 26.578 52.5487 26.4367 52.8899 26.3236L53.4017 23.7791H56.8137L57.3255 26.3236C57.6667 26.4367 58.0079 26.578 58.3491 26.7477C58.6903 26.9173 58.9747 27.1152 59.2021 27.3414L61.5906 26.4932L63.2966 29.5466L61.42 31.2429V33.2785L63.2966 34.9748L61.5906 38.0282L59.2021 37.18C58.9178 37.4627 58.6193 37.6748 58.3065 37.8161C57.9937 37.9575 57.6667 38.0847 57.3255 38.1978L56.8137 40.7423H53.4017ZM55.1077 34.8052C55.7901 34.8052 56.3872 34.5507 56.899 34.0418C57.4108 33.5329 57.6667 32.9392 57.6667 32.2607C57.6667 31.5822 57.4108 30.9885 56.899 30.4796C56.3872 29.9707 55.7901 29.7162 55.1077 29.7162C54.4253 29.7162 53.8282 29.9707 53.3164 30.4796C52.8046 30.9885 52.5487 31.5822 52.5487 32.2607C52.5487 32.9392 52.8046 33.5329 53.3164 34.0418C53.8282 34.5507 54.4253 34.8052 55.1077 34.8052ZM61.2494 23.7791L60.567 20.2168C60.0552 20.0472 59.586 19.8352 59.1595 19.5807C58.733 19.3263 58.3491 19.0294 58.0079 18.6901L54.4253 19.8776L52.0369 15.8064L54.9371 13.2619C54.8234 12.9792 54.7665 12.753 54.7665 12.5834V11.2263C54.7665 11.0567 54.8234 10.8305 54.9371 10.5478L52.0369 8.00334L54.4253 3.93217L58.0079 5.1196C58.3491 4.78033 58.733 4.48348 59.1595 4.22903C59.586 3.97458 60.0552 3.76254 60.567 3.59291L61.2494 0.0306396H66.0262L66.7086 3.59291C67.2204 3.76254 67.6896 3.97458 68.1161 4.22903C68.5426 4.48348 68.9264 4.78033 69.2676 5.1196L72.8502 3.93217L75.2387 8.00334L72.3384 10.5478C72.4522 10.8305 72.509 11.0567 72.509 11.2263V12.5834C72.509 12.753 72.4522 12.9792 72.3384 13.2619L75.2387 15.8064L72.8502 19.8776L69.2676 18.6901C68.9264 19.0294 68.5426 19.3263 68.1161 19.5807C67.6896 19.8352 67.2204 20.0472 66.7086 20.2168L66.0262 23.7791H61.2494ZM63.6378 16.1457C64.832 16.1457 65.8414 15.7357 66.6659 14.9158C67.4905 14.096 67.9028 13.0923 67.9028 11.9049C67.9028 10.7174 67.4905 9.71379 66.6659 8.89391C65.8414 8.07402 64.832 7.66408 63.6378 7.66408C62.4436 7.66408 61.4342 8.07402 60.6096 8.89391C59.785 9.71379 59.3727 10.7174 59.3727 11.9049C59.3727 13.0923 59.785 14.096 60.6096 14.9158C61.4342 15.7357 62.4436 16.1457 63.6378 16.1457Z"/>
</mask>
<path d="M0.51532 61.0981V51.5987C0.51532 49.7328 0.99869 47.9799 1.96543 46.3401C2.93217 44.7004 4.26855 43.4564 5.97456 42.6082C8.87478 41.1381 12.1446 39.8941 15.7841 38.8763C19.4236 37.8586 23.4328 37.3497 27.8115 37.3497C32.1903 37.3497 36.1994 37.8586 39.8389 38.8763C43.4784 39.8941 46.7483 41.1381 49.6485 42.6082C51.3545 43.4564 52.6909 44.7004 53.6576 46.3401C54.6243 47.9799 55.1077 49.7328 55.1077 51.5987V61.0981H0.51532ZM7.33937 54.3128H48.2837V51.5987C48.2837 50.9768 48.1273 50.4113 47.8145 49.9024C47.5017 49.3935 47.0895 48.9977 46.5777 48.715C44.5304 47.6972 41.9003 46.6794 38.6873 45.6616C35.4744 44.6438 31.8491 44.1349 27.8115 44.1349C23.774 44.1349 20.1487 44.6438 16.9357 45.6616C13.7227 46.6794 11.0926 47.6972 9.04538 48.715C8.53358 48.9977 8.12129 49.3935 7.80852 49.9024C7.49575 50.4113 7.33937 50.9768 7.33937 51.5987V54.3128ZM27.8115 33.957C24.0583 33.957 20.8453 32.6282 18.1725 29.9707C15.4998 27.3131 14.1634 24.1184 14.1634 20.3865H13.3104C12.7986 20.3865 12.3863 20.231 12.0736 19.92C11.7608 19.609 11.6044 19.199 11.6044 18.6901C11.6044 18.1813 11.7608 17.7713 12.0736 17.4603C12.3863 17.1493 12.7986 16.9938 13.3104 16.9938H14.1634C14.1634 14.4494 14.789 12.1593 16.04 10.1237C17.2911 8.08815 18.9403 6.47665 20.9875 5.28923V8.51223C20.9875 9.02113 21.1439 9.43107 21.4566 9.74207C21.7694 10.0531 22.1817 10.2086 22.6935 10.2086C23.2053 10.2086 23.6176 10.0531 23.9303 9.74207C24.2431 9.43107 24.3995 9.02113 24.3995 8.51223V3.93217C24.9113 3.76254 25.4515 3.63532 26.0202 3.5505C26.5889 3.46569 27.186 3.42328 27.8115 3.42328C28.4371 3.42328 29.0342 3.46569 29.6028 3.5505C30.1715 3.63532 30.7117 3.76254 31.2235 3.93217V8.51223C31.2235 9.02113 31.3799 9.43107 31.6927 9.74207C32.0055 10.0531 32.4178 10.2086 32.9296 10.2086C33.4414 10.2086 33.8536 10.0531 34.1664 9.74207C34.4792 9.43107 34.6356 9.02113 34.6356 8.51223V5.28923C36.6828 6.47665 38.3319 8.08815 39.583 10.1237C40.8341 12.1593 41.4596 14.4494 41.4596 16.9938H42.3126C42.8244 16.9938 43.2367 17.1493 43.5495 17.4603C43.8622 17.7713 44.0186 18.1813 44.0186 18.6901C44.0186 19.199 43.8622 19.609 43.5495 19.92C43.2367 20.231 42.8244 20.3865 42.3126 20.3865H41.4596C41.4596 24.1184 40.1232 27.3131 37.4505 29.9707C34.7777 32.6282 31.5647 33.957 27.8115 33.957ZM27.8115 27.1717C29.6881 27.1717 31.2946 26.5074 32.631 25.1786C33.9674 23.8498 34.6356 22.2524 34.6356 20.3865H20.9875C20.9875 22.2524 21.6557 23.8498 22.992 25.1786C24.3284 26.5074 25.9349 27.1717 27.8115 27.1717ZM53.4017 40.7423L52.8899 38.1978C52.5487 38.0847 52.2217 37.9575 51.9089 37.8161C51.5962 37.6748 51.2976 37.4627 51.0133 37.18L48.6249 38.0282L46.9189 34.9748L48.7955 33.2785V31.2429L46.9189 29.5466L48.6249 26.4932L51.0133 27.3414C51.2408 27.1152 51.5251 26.9173 51.8663 26.7477C52.2075 26.578 52.5487 26.4367 52.8899 26.3236L53.4017 23.7791H56.8137L57.3255 26.3236C57.6667 26.4367 58.0079 26.578 58.3491 26.7477C58.6903 26.9173 58.9747 27.1152 59.2021 27.3414L61.5906 26.4932L63.2966 29.5466L61.42 31.2429V33.2785L63.2966 34.9748L61.5906 38.0282L59.2021 37.18C58.9178 37.4627 58.6193 37.6748 58.3065 37.8161C57.9937 37.9575 57.6667 38.0847 57.3255 38.1978L56.8137 40.7423H53.4017ZM55.1077 34.8052C55.7901 34.8052 56.3872 34.5507 56.899 34.0418C57.4108 33.5329 57.6667 32.9392 57.6667 32.2607C57.6667 31.5822 57.4108 30.9885 56.899 30.4796C56.3872 29.9707 55.7901 29.7162 55.1077 29.7162C54.4253 29.7162 53.8282 29.9707 53.3164 30.4796C52.8046 30.9885 52.5487 31.5822 52.5487 32.2607C52.5487 32.9392 52.8046 33.5329 53.3164 34.0418C53.8282 34.5507 54.4253 34.8052 55.1077 34.8052ZM61.2494 23.7791L60.567 20.2168C60.0552 20.0472 59.586 19.8352 59.1595 19.5807C58.733 19.3263 58.3491 19.0294 58.0079 18.6901L54.4253 19.8776L52.0369 15.8064L54.9371 13.2619C54.8234 12.9792 54.7665 12.753 54.7665 12.5834V11.2263C54.7665 11.0567 54.8234 10.8305 54.9371 10.5478L52.0369 8.00334L54.4253 3.93217L58.0079 5.1196C58.3491 4.78033 58.733 4.48348 59.1595 4.22903C59.586 3.97458 60.0552 3.76254 60.567 3.59291L61.2494 0.0306396H66.0262L66.7086 3.59291C67.2204 3.76254 67.6896 3.97458 68.1161 4.22903C68.5426 4.48348 68.9264 4.78033 69.2676 5.1196L72.8502 3.93217L75.2387 8.00334L72.3384 10.5478C72.4522 10.8305 72.509 11.0567 72.509 11.2263V12.5834C72.509 12.753 72.4522 12.9792 72.3384 13.2619L75.2387 15.8064L72.8502 19.8776L69.2676 18.6901C68.9264 19.0294 68.5426 19.3263 68.1161 19.5807C67.6896 19.8352 67.2204 20.0472 66.7086 20.2168L66.0262 23.7791H61.2494ZM63.6378 16.1457C64.832 16.1457 65.8414 15.7357 66.6659 14.9158C67.4905 14.096 67.9028 13.0923 67.9028 11.9049C67.9028 10.7174 67.4905 9.71379 66.6659 8.89391C65.8414 8.07402 64.832 7.66408 63.6378 7.66408C62.4436 7.66408 61.4342 8.07402 60.6096 8.89391C59.785 9.71379 59.3727 10.7174 59.3727 11.9049C59.3727 13.0923 59.785 14.096 60.6096 14.9158C61.4342 15.7357 62.4436 16.1457 63.6378 16.1457Z" fill="#FFA000" stroke="white" stroke-width="2.90798" mask="url(#path-1-inside-1_640_1254)"/>
</svg>
            </div>
            <div className=" w-[95px]   h-[100%] z-10 translate-y-[100%] group-hover:-translate-y-0 duration-500 ease-in-out ">
              {/* svg*/}
              <div className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="95"
                  height="91"
                  viewBox="0 0 95 91"
                  fill="none"
                >
                  <path
                    d="M33.3747 1.33134H93.7123V58.4106C93.7123 76.1382 79.3412 90.5093 61.6136 90.5093H1.27604V33.43C1.27604 15.7024 15.6471 1.33134 33.3747 1.33134Z"
                    fill="#FFA800"
                    stroke="#FFA800"
                    stroke-width="0.969325"
                  />
                  <mask id="path-2-inside-1_622_1255" fill="white">
                    <path d="M9.51532 72.092V62.5926C9.51532 60.7267 9.99869 58.9738 10.9654 57.334C11.9322 55.6943 13.2685 54.4503 14.9746 53.6021C17.8748 52.132 21.1446 50.888 24.7841 49.8702C28.4236 48.8524 32.4328 48.3436 36.8115 48.3436C41.1903 48.3436 45.1994 48.8524 48.8389 49.8702C52.4784 50.888 55.7483 52.132 58.6485 53.6021C60.3545 54.4503 61.6909 55.6943 62.6576 57.334C63.6243 58.9738 64.1077 60.7267 64.1077 62.5926V72.092H9.51532ZM16.3394 65.3067H57.2837V62.5926C57.2837 61.9706 57.1273 61.4052 56.8145 60.8963C56.5017 60.3874 56.0895 59.9916 55.5777 59.7089C53.5304 58.6911 50.9003 57.6733 47.6873 56.6555C44.4744 55.6377 40.8491 55.1288 36.8115 55.1288C32.774 55.1288 29.1487 55.6377 25.9357 56.6555C22.7227 57.6733 20.0926 58.6911 18.0454 59.7089C17.5336 59.9916 17.1213 60.3874 16.8085 60.8963C16.4958 61.4052 16.3394 61.9706 16.3394 62.5926V65.3067ZM36.8115 44.9509C33.0583 44.9509 29.8453 43.6221 27.1725 40.9646C24.4998 38.307 23.1634 35.1123 23.1634 31.3804H22.3104C21.7986 31.3804 21.3863 31.2249 21.0736 30.9139C20.7608 30.6029 20.6044 30.1929 20.6044 29.684C20.6044 29.1751 20.7608 28.7652 21.0736 28.4542C21.3863 28.1432 21.7986 27.9877 22.3104 27.9877H23.1634C23.1634 25.4432 23.789 23.1532 25.04 21.1176C26.2911 19.0821 27.9403 17.4705 29.9875 16.2831V19.5061C29.9875 20.015 30.1439 20.425 30.4566 20.736C30.7694 21.047 31.1817 21.2025 31.6935 21.2025C32.2053 21.2025 32.6176 21.047 32.9303 20.736C33.2431 20.425 33.3995 20.015 33.3995 19.5061V14.9261C33.9113 14.7564 34.4515 14.6292 35.0202 14.5444C35.5889 14.4596 36.186 14.4172 36.8115 14.4172C37.4371 14.4172 38.0342 14.4596 38.6028 14.5444C39.1715 14.6292 39.7117 14.7564 40.2235 14.9261V19.5061C40.2235 20.015 40.3799 20.425 40.6927 20.736C41.0055 21.047 41.4178 21.2025 41.9296 21.2025C42.4414 21.2025 42.8536 21.047 43.1664 20.736C43.4792 20.425 43.6356 20.015 43.6356 19.5061V16.2831C45.6828 17.4705 47.3319 19.0821 48.583 21.1176C49.8341 23.1532 50.4596 25.4432 50.4596 27.9877H51.3126C51.8244 27.9877 52.2367 28.1432 52.5495 28.4542C52.8622 28.7652 53.0186 29.1751 53.0186 29.684C53.0186 30.1929 52.8622 30.6029 52.5495 30.9139C52.2367 31.2249 51.8244 31.3804 51.3126 31.3804H50.4596C50.4596 35.1123 49.1232 38.307 46.4505 40.9646C43.7777 43.6221 40.5647 44.9509 36.8115 44.9509ZM36.8115 38.1656C38.6881 38.1656 40.2946 37.5012 41.631 36.1725C42.9674 34.8437 43.6356 33.2463 43.6356 31.3804H29.9875C29.9875 33.2463 30.6557 34.8437 31.992 36.1725C33.3284 37.5012 34.9349 38.1656 36.8115 38.1656ZM62.4017 51.7362L61.8899 49.1917C61.5487 49.0786 61.2217 48.9514 60.9089 48.81C60.5962 48.6687 60.2976 48.4566 60.0133 48.1739L57.6249 49.0221L55.9189 45.9687L57.7955 44.2724V42.2368L55.9189 40.5405L57.6249 37.4871L60.0133 38.3353C60.2408 38.1091 60.5251 37.9112 60.8663 37.7416C61.2075 37.5719 61.5487 37.4306 61.8899 37.3175L62.4017 34.773H65.8137L66.3255 37.3175C66.6667 37.4306 67.0079 37.5719 67.3491 37.7416C67.6903 37.9112 67.9747 38.1091 68.2021 38.3353L70.5906 37.4871L72.2966 40.5405L70.42 42.2368V44.2724L72.2966 45.9687L70.5906 49.0221L68.2021 48.1739C67.9178 48.4566 67.6193 48.6687 67.3065 48.81C66.9937 48.9514 66.6667 49.0786 66.3255 49.1917L65.8137 51.7362H62.4017ZM64.1077 45.7991C64.7901 45.7991 65.3872 45.5446 65.899 45.0357C66.4108 44.5268 66.6667 43.9331 66.6667 43.2546C66.6667 42.5761 66.4108 41.9824 65.899 41.4735C65.3872 40.9646 64.7901 40.7101 64.1077 40.7101C63.4253 40.7101 62.8282 40.9646 62.3164 41.4735C61.8046 41.9824 61.5487 42.5761 61.5487 43.2546C61.5487 43.9331 61.8046 44.5268 62.3164 45.0357C62.8282 45.5446 63.4253 45.7991 64.1077 45.7991ZM70.2494 34.773L69.567 31.2107C69.0552 31.0411 68.586 30.8291 68.1595 30.5746C67.733 30.3202 67.3491 30.0233 67.0079 29.684L63.4253 30.8715L61.0369 26.8003L63.9371 24.2558C63.8234 23.9731 63.7665 23.7469 63.7665 23.5773V22.2202C63.7665 22.0506 63.8234 21.8244 63.9371 21.5417L61.0369 18.9972L63.4253 14.9261L67.0079 16.1135C67.3491 15.7742 67.733 15.4774 68.1595 15.2229C68.586 14.9685 69.0552 14.7564 69.567 14.5868L70.2494 11.0245H75.0262L75.7086 14.5868C76.2204 14.7564 76.6896 14.9685 77.1161 15.2229C77.5426 15.4774 77.9264 15.7742 78.2676 16.1135L81.8502 14.9261L84.2387 18.9972L81.3384 21.5417C81.4522 21.8244 81.509 22.0506 81.509 22.2202V23.5773C81.509 23.7469 81.4522 23.9731 81.3384 24.2558L84.2387 26.8003L81.8502 30.8715L78.2676 29.684C77.9264 30.0233 77.5426 30.3202 77.1161 30.5746C76.6896 30.8291 76.2204 31.0411 75.7086 31.2107L75.0262 34.773H70.2494ZM72.6378 27.1396C73.832 27.1396 74.8414 26.7296 75.6659 25.9097C76.4905 25.0898 76.9028 24.0862 76.9028 22.8988C76.9028 21.7113 76.4905 20.7077 75.6659 19.8878C74.8414 19.0679 73.832 18.658 72.6378 18.658C71.4436 18.658 70.4342 19.0679 69.6096 19.8878C68.785 20.7077 68.3727 21.7113 68.3727 22.8988C68.3727 24.0862 68.785 25.0898 69.6096 25.9097C70.4342 26.7296 71.4436 27.1396 72.6378 27.1396Z" />
                  </mask>
                  <path
                    d="M9.51532 72.092V62.5926C9.51532 60.7267 9.99869 58.9738 10.9654 57.334C11.9322 55.6943 13.2685 54.4503 14.9746 53.6021C17.8748 52.132 21.1446 50.888 24.7841 49.8702C28.4236 48.8524 32.4328 48.3436 36.8115 48.3436C41.1903 48.3436 45.1994 48.8524 48.8389 49.8702C52.4784 50.888 55.7483 52.132 58.6485 53.6021C60.3545 54.4503 61.6909 55.6943 62.6576 57.334C63.6243 58.9738 64.1077 60.7267 64.1077 62.5926V72.092H9.51532ZM16.3394 65.3067H57.2837V62.5926C57.2837 61.9706 57.1273 61.4052 56.8145 60.8963C56.5017 60.3874 56.0895 59.9916 55.5777 59.7089C53.5304 58.6911 50.9003 57.6733 47.6873 56.6555C44.4744 55.6377 40.8491 55.1288 36.8115 55.1288C32.774 55.1288 29.1487 55.6377 25.9357 56.6555C22.7227 57.6733 20.0926 58.6911 18.0454 59.7089C17.5336 59.9916 17.1213 60.3874 16.8085 60.8963C16.4958 61.4052 16.3394 61.9706 16.3394 62.5926V65.3067ZM36.8115 44.9509C33.0583 44.9509 29.8453 43.6221 27.1725 40.9646C24.4998 38.307 23.1634 35.1123 23.1634 31.3804H22.3104C21.7986 31.3804 21.3863 31.2249 21.0736 30.9139C20.7608 30.6029 20.6044 30.1929 20.6044 29.684C20.6044 29.1751 20.7608 28.7652 21.0736 28.4542C21.3863 28.1432 21.7986 27.9877 22.3104 27.9877H23.1634C23.1634 25.4432 23.789 23.1532 25.04 21.1176C26.2911 19.0821 27.9403 17.4705 29.9875 16.2831V19.5061C29.9875 20.015 30.1439 20.425 30.4566 20.736C30.7694 21.047 31.1817 21.2025 31.6935 21.2025C32.2053 21.2025 32.6176 21.047 32.9303 20.736C33.2431 20.425 33.3995 20.015 33.3995 19.5061V14.9261C33.9113 14.7564 34.4515 14.6292 35.0202 14.5444C35.5889 14.4596 36.186 14.4172 36.8115 14.4172C37.4371 14.4172 38.0342 14.4596 38.6028 14.5444C39.1715 14.6292 39.7117 14.7564 40.2235 14.9261V19.5061C40.2235 20.015 40.3799 20.425 40.6927 20.736C41.0055 21.047 41.4178 21.2025 41.9296 21.2025C42.4414 21.2025 42.8536 21.047 43.1664 20.736C43.4792 20.425 43.6356 20.015 43.6356 19.5061V16.2831C45.6828 17.4705 47.3319 19.0821 48.583 21.1176C49.8341 23.1532 50.4596 25.4432 50.4596 27.9877H51.3126C51.8244 27.9877 52.2367 28.1432 52.5495 28.4542C52.8622 28.7652 53.0186 29.1751 53.0186 29.684C53.0186 30.1929 52.8622 30.6029 52.5495 30.9139C52.2367 31.2249 51.8244 31.3804 51.3126 31.3804H50.4596C50.4596 35.1123 49.1232 38.307 46.4505 40.9646C43.7777 43.6221 40.5647 44.9509 36.8115 44.9509ZM36.8115 38.1656C38.6881 38.1656 40.2946 37.5012 41.631 36.1725C42.9674 34.8437 43.6356 33.2463 43.6356 31.3804H29.9875C29.9875 33.2463 30.6557 34.8437 31.992 36.1725C33.3284 37.5012 34.9349 38.1656 36.8115 38.1656ZM62.4017 51.7362L61.8899 49.1917C61.5487 49.0786 61.2217 48.9514 60.9089 48.81C60.5962 48.6687 60.2976 48.4566 60.0133 48.1739L57.6249 49.0221L55.9189 45.9687L57.7955 44.2724V42.2368L55.9189 40.5405L57.6249 37.4871L60.0133 38.3353C60.2408 38.1091 60.5251 37.9112 60.8663 37.7416C61.2075 37.5719 61.5487 37.4306 61.8899 37.3175L62.4017 34.773H65.8137L66.3255 37.3175C66.6667 37.4306 67.0079 37.5719 67.3491 37.7416C67.6903 37.9112 67.9747 38.1091 68.2021 38.3353L70.5906 37.4871L72.2966 40.5405L70.42 42.2368V44.2724L72.2966 45.9687L70.5906 49.0221L68.2021 48.1739C67.9178 48.4566 67.6193 48.6687 67.3065 48.81C66.9937 48.9514 66.6667 49.0786 66.3255 49.1917L65.8137 51.7362H62.4017ZM64.1077 45.7991C64.7901 45.7991 65.3872 45.5446 65.899 45.0357C66.4108 44.5268 66.6667 43.9331 66.6667 43.2546C66.6667 42.5761 66.4108 41.9824 65.899 41.4735C65.3872 40.9646 64.7901 40.7101 64.1077 40.7101C63.4253 40.7101 62.8282 40.9646 62.3164 41.4735C61.8046 41.9824 61.5487 42.5761 61.5487 43.2546C61.5487 43.9331 61.8046 44.5268 62.3164 45.0357C62.8282 45.5446 63.4253 45.7991 64.1077 45.7991ZM70.2494 34.773L69.567 31.2107C69.0552 31.0411 68.586 30.8291 68.1595 30.5746C67.733 30.3202 67.3491 30.0233 67.0079 29.684L63.4253 30.8715L61.0369 26.8003L63.9371 24.2558C63.8234 23.9731 63.7665 23.7469 63.7665 23.5773V22.2202C63.7665 22.0506 63.8234 21.8244 63.9371 21.5417L61.0369 18.9972L63.4253 14.9261L67.0079 16.1135C67.3491 15.7742 67.733 15.4774 68.1595 15.2229C68.586 14.9685 69.0552 14.7564 69.567 14.5868L70.2494 11.0245H75.0262L75.7086 14.5868C76.2204 14.7564 76.6896 14.9685 77.1161 15.2229C77.5426 15.4774 77.9264 15.7742 78.2676 16.1135L81.8502 14.9261L84.2387 18.9972L81.3384 21.5417C81.4522 21.8244 81.509 22.0506 81.509 22.2202V23.5773C81.509 23.7469 81.4522 23.9731 81.3384 24.2558L84.2387 26.8003L81.8502 30.8715L78.2676 29.684C77.9264 30.0233 77.5426 30.3202 77.1161 30.5746C76.6896 30.8291 76.2204 31.0411 75.7086 31.2107L75.0262 34.773H70.2494ZM72.6378 27.1396C73.832 27.1396 74.8414 26.7296 75.6659 25.9097C76.4905 25.0898 76.9028 24.0862 76.9028 22.8988C76.9028 21.7113 76.4905 20.7077 75.6659 19.8878C74.8414 19.0679 73.832 18.658 72.6378 18.658C71.4436 18.658 70.4342 19.0679 69.6096 19.8878C68.785 20.7077 68.3727 21.7113 68.3727 22.8988C68.3727 24.0862 68.785 25.0898 69.6096 25.9097C70.4342 26.7296 71.4436 27.1396 72.6378 27.1396Z"
                    fill="#FFA000"
                    stroke="white"
                    stroke-width="2.90798"
                    mask="url(#path-2-inside-1_622_1255)"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="  w-[30%]  ">
        <div className=" relative   group h-[340px] ">
          <div className="bg-[#FFA800] rounded-tl-[50px] rounded-br-[50px] w-[100%] right-2 top-2 absolute h-[100%] ease-in-out duration-300 group-hover:-translate-y-6"></div>
          <div className="bg-white border shadow-[2px_-2px_5px_#D3D3D3] rounded-tl-[50px] rounded-br-[50px] w-[100%] absolute h-[100%] pt-[140px] px-6 ease-in-out duration-300 group-hover:-translate-y-6">
            <div className="px-3 pb-4 text-3xl">Story Builder</div>
            <div className="px-3">
            Sequence digital experiences for guided marketing journeys with Story Builder.
             
            </div>
          </div>
          <div className=" h-[84px] absolute left-[32px] top-[32px] group overflow-y-hidden border border-[#FFA800] rounded-tl-[35px] rounded-br-[35px]  ">
            <div className="absolute top-2 left-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="52" viewBox="0 0 56 52" fill="none">
<path d="M28.4568 33.2128L28.4567 33.2128C25.5224 32.7997 22.4979 32.5724 19.0817 32.5724C15.6118 32.5724 12.6061 32.7899 9.67638 33.2034M28.4568 33.2128L9.67638 33.2034M28.4568 33.2128C33.4328 33.9126 36.5457 37.7307 36.5457 41.6816V44.9781C36.5457 47.9069 33.7667 50.4313 30.1392 50.4313H8.02424C4.39679 50.4313 1.61772 47.9069 1.61772 44.9781V41.6597C1.61772 37.7246 4.7077 33.9048 9.67638 33.2034M28.4568 33.2128L9.58833 32.5795L9.67638 33.2034M45.7669 37.1578C44.5254 36.9916 43.2605 36.8559 41.975 36.7534C40.5788 36.642 39.7191 35.6093 39.8256 34.6129L39.8256 34.6127L42.4288 32.8172L42.479 32.1891L42.4289 32.8172C43.8161 32.9279 45.1817 33.0744 46.5212 33.2537L46.5214 33.2537C51.5118 33.9206 54.6398 37.725 54.6398 41.6816V44.9781C54.6398 47.9069 51.8607 50.4313 48.2333 50.4313H42.2019C40.7952 50.4313 39.8163 49.4632 39.8163 48.4543C39.8163 47.4454 40.7952 46.4772 42.2019 46.4772H48.2333C49.0475 46.4772 49.8686 45.8886 49.8686 44.9781V41.6816C49.8686 39.2811 48.025 37.4597 45.7669 37.1578ZM45.7669 37.1578L45.6832 37.7823L45.7667 37.1578C45.7667 37.1578 45.7668 37.1578 45.7669 37.1578ZM10.4724 37.1018L10.4723 37.1018C8.22624 37.4189 6.38895 39.2576 6.38895 41.6597V44.9781C6.38895 45.8891 7.21037 46.4772 8.02424 46.4772H30.1392C30.9533 46.4772 31.7745 45.8891 31.7745 44.9781V41.6816C31.7745 39.2754 29.9272 37.43 27.6637 37.1115L27.6637 37.1115C24.9904 36.7354 22.2313 36.5265 19.0817 36.5265C15.8652 36.5265 13.1263 36.7272 10.4724 37.1018ZM5.63862 12.8232C5.63862 6.53464 11.5681 1.28656 19.0817 1.28656C26.5954 1.28656 32.5248 6.53464 32.5248 12.8232V16.2994C32.5248 22.588 26.5954 27.836 19.0817 27.836C11.5681 27.836 5.63862 22.588 5.63862 16.2994V12.8232ZM19.0817 5.24073C14.3816 5.24073 10.4099 8.55255 10.4099 12.8232V16.2994C10.4099 20.5702 14.3816 23.8819 19.0817 23.8819C23.782 23.8819 27.7536 20.5701 27.7536 16.2994V12.8232C27.7536 8.55255 23.782 5.24073 19.0817 5.24073ZM36.8006 6.73985C36.8006 5.73091 37.7795 4.76276 39.1862 4.76276C45.5897 4.76276 50.6189 9.23269 50.6189 14.5613V18.0375C50.6189 23.3663 45.5897 27.836 39.1862 27.836C37.7795 27.836 36.8006 26.8678 36.8006 25.8589C36.8006 24.85 37.7795 23.8819 39.1862 23.8819C42.7759 23.8819 45.8477 21.3481 45.8477 18.0375V14.5613C45.8477 11.2506 42.7759 8.71693 39.1862 8.71693C37.7795 8.71693 36.8006 7.74878 36.8006 6.73985Z" fill="#FFA800" stroke="white" stroke-width="1.26012"/>
</svg>
            </div>
            <div className=" w-[95px]   h-[100%] z-10 translate-y-[100%] group-hover:-translate-y-0 duration-500 ease-in-out ">
              {/* svg*/}
              <div className="absolute">
              <svg xmlns="http://www.w3.org/2000/svg" width="94" height="92" viewBox="0 0 94 92" fill="none">
<path d="M33.1231 1.34965H93.4607V58.4289C93.4607 76.1565 79.0896 90.5276 61.362 90.5276H1.02446V33.4483C1.02446 15.7207 15.3955 1.34965 33.1231 1.34965Z" fill="#FFA800" stroke="#FFA800" stroke-width="0.969325"/>
<path d="M45.4568 53.7771L45.4567 53.7771C42.5224 53.3641 39.4979 53.1367 36.0817 53.1367C32.6118 53.1367 29.6061 53.3542 26.6764 53.7677M45.4568 53.7771L26.6764 53.7677M45.4568 53.7771C50.4328 54.4769 53.5457 58.2951 53.5457 62.2459V65.5424C53.5457 68.4712 50.7667 70.9957 47.1392 70.9957H25.0242C21.3968 70.9957 18.6177 68.4712 18.6177 65.5424V62.224C18.6177 58.2889 21.7077 54.4692 26.6764 53.7677M45.4568 53.7771L26.5883 53.1438L26.6764 53.7677M62.7669 57.7222C61.5254 57.5559 60.2605 57.4202 58.975 57.3178C57.5788 57.2063 56.7191 56.1737 56.8256 55.1773L56.8256 55.1771L59.4288 53.3815L59.479 52.7534L59.4289 53.3815C60.8161 53.4922 62.1817 53.6387 63.5212 53.818L63.5214 53.818C68.5118 54.4849 71.6398 58.2893 71.6398 62.2459V65.5424C71.6398 68.4712 68.8607 70.9957 65.2333 70.9957H59.2019C57.7952 70.9957 56.8163 70.0275 56.8163 69.0186C56.8163 68.0097 57.7952 67.0415 59.2019 67.0415H65.2333C66.0475 67.0415 66.8686 66.4529 66.8686 65.5424V62.2459C66.8686 59.8454 65.025 58.024 62.7669 57.7222ZM62.7669 57.7222L62.6832 58.3466L62.7667 57.7221C62.7667 57.7221 62.7668 57.7222 62.7669 57.7222ZM27.4724 57.6661L27.4723 57.6661C25.2262 57.9833 23.389 59.8219 23.389 62.224V65.5424C23.389 66.4534 24.2104 67.0415 25.0242 67.0415H47.1392C47.9533 67.0415 48.7745 66.4534 48.7745 65.5424V62.2459C48.7745 59.8397 46.9272 57.9944 44.6637 57.6758L44.6637 57.6758C41.9904 57.2998 39.2313 57.0909 36.0817 57.0909C32.8652 57.0909 30.1263 57.2916 27.4724 57.6661ZM22.6386 33.3875C22.6386 27.099 28.5681 21.8509 36.0817 21.8509C43.5954 21.8509 49.5248 27.099 49.5248 33.3875V36.8637C49.5248 43.1523 43.5954 48.4004 36.0817 48.4004C28.5681 48.4004 22.6386 43.1523 22.6386 36.8637V33.3875ZM36.0817 25.8051C31.3816 25.8051 27.4099 29.1169 27.4099 33.3875V36.8637C27.4099 41.1345 31.3816 44.4462 36.0817 44.4462C40.782 44.4462 44.7536 41.1345 44.7536 36.8637V33.3875C44.7536 29.1169 40.782 25.8051 36.0817 25.8051ZM53.8006 27.3042C53.8006 26.2952 54.7795 25.3271 56.1862 25.3271C62.5897 25.3271 67.6189 29.797 67.6189 35.1256V38.6018C67.6189 43.9306 62.5897 48.4004 56.1862 48.4004C54.7795 48.4004 53.8006 47.4322 53.8006 46.4233C53.8006 45.4144 54.7795 44.4462 56.1862 44.4462C59.7759 44.4462 62.8477 41.9125 62.8477 38.6018V35.1256C62.8477 31.8149 59.7759 29.2813 56.1862 29.2813C54.7795 29.2813 53.8006 28.3131 53.8006 27.3042Z" fill="#FFA800" stroke="white" stroke-width="1.26012"/>
</svg>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="  w-[30%]  ">
        <div className=" relative   group h-[340px] ">
          <div className="bg-[#FFA800] rounded-tl-[50px] rounded-br-[50px] w-[100%] right-2 top-2 absolute h-[100%] ease-in-out duration-300 group-hover:-translate-y-6"></div>
          <div className="bg-white border shadow-[2px_-2px_5px_#D3D3D3] rounded-tl-[50px] rounded-br-[50px] w-[100%] absolute h-[100%] pt-[140px] px-6 ease-in-out duration-300 group-hover:-translate-y-6">
            <div className="px-3 pb-4 text-3xl">Story Teller</div>
            <div className="px-3">
              {" "}
              Measure engagement with comprehensive analytics and AI-powered
              feedback for intelligent insights with Story Teller.
            </div>
          </div>
          <div className=" h-[84px] absolute left-[32px] top-[32px] group overflow-y-hidden border border-[#FFA800] rounded-tl-[35px] rounded-br-[35px]  ">
            <div className="absolute top-2 left-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="78"
                height="79"
                viewBox="0 0 78 79"
                fill="none"
              >
                <path
                  d="M23.9163 57.3969C24.6626 57.2507 25.3426 57.0756 25.891 56.8737C26.4193 56.6791 26.661 56.5184 26.7428 56.4593L26.7522 56.4529L26.7644 56.4435C26.7718 56.4378 26.7844 56.4279 26.7991 56.4147C26.8029 56.4112 26.8141 56.4012 26.8281 56.3867C27.8896 55.3175 27.9407 53.4998 26.7032 52.2623L26.7032 52.2623C25.4113 50.9706 23.4963 51.0304 22.4771 52.0493L22.8433 52.4354L22.8458 52.438L22.8801 52.4741C22.8501 52.5187 22.7556 52.6659 22.6311 52.9798C22.5207 52.9249 22.425 52.8337 22.3661 52.7113C22.3002 52.5744 22.3066 52.4518 22.3113 52.4028C22.3169 52.3452 22.33 52.3011 22.3372 52.279C22.3519 52.2341 22.3688 52.2013 22.3743 52.1908C22.387 52.1663 22.3989 52.1481 22.4014 52.1442L22.4016 52.1439C22.4032 52.1415 22.4046 52.1393 22.4058 52.1375C22.4078 52.1346 22.4092 52.1325 22.4098 52.1317C22.4101 52.1312 22.4104 52.1308 22.4107 52.1303L22.4106 52.1303L22.4058 52.1374C22.3538 52.2136 22.1989 52.4497 22.0122 52.9741L22.0121 52.9743C21.8152 53.528 21.6472 54.2158 21.5092 54.9721L21.5092 54.9721C21.3799 55.6811 21.2842 56.4077 21.2137 57.0759L21.1371 57.8013L21.8613 57.7144C22.5149 57.636 23.224 57.5325 23.9163 57.3969ZM23.9163 57.3969L23.8045 56.8261M23.9163 57.3969C23.9163 57.3969 23.9163 57.3969 23.9164 57.3969L23.8045 56.8261M23.8045 56.8261C23.3331 56.9185 22.852 56.9959 22.3853 57.0605L26.7508 56.4535L26.4745 56.0765L26.407 55.9844M23.8045 56.8261C24.5338 56.6833 25.1811 56.5153 25.69 56.3279C25.7645 56.3005 25.8322 56.274 25.8934 56.2488M25.8934 56.2488C25.9269 56.3141 25.9759 56.3789 26.0458 56.4352C26.1901 56.5512 26.3421 56.5636 26.4104 56.5636C26.5317 56.5636 26.6223 56.5241 26.6378 56.5173L26.6393 56.5167C26.6692 56.5039 26.6917 56.4912 26.7025 56.485C26.7163 56.4769 26.7279 56.4694 26.7366 56.4635L26.407 55.9844M25.8934 56.2488C26.242 56.1052 26.3838 56.0015 26.407 55.9844M25.8934 56.2488L26.4098 55.9825L26.407 55.9844M24.6249 61.0115C22.9167 61.3463 21.1673 61.5033 20.1628 61.5727C18.5949 61.6811 17.2926 60.3994 17.3794 58.8279C17.4354 57.8146 17.5699 56.0415 17.8856 54.3111C18.0432 53.4473 18.2541 52.5481 18.5419 51.7393C18.8158 50.9698 19.2233 50.0941 19.8724 49.445C22.498 46.8195 26.7511 47.1012 29.3078 49.6579L29.719 49.2467L29.3078 49.6579C31.9102 52.2601 32.0078 56.4165 29.4259 58.9985C28.7855 59.6388 27.9253 60.0498 27.1638 60.3302L27.1637 60.3302C26.3651 60.6245 25.4779 60.8442 24.6249 61.0115ZM24.6249 61.0115L24.7367 61.5823L24.6248 61.0116C24.6248 61.0116 24.6248 61.0115 24.6249 61.0115ZM46.4378 32.5274C47.7881 33.8775 49.977 33.8774 51.3272 32.5274C52.6775 31.1772 52.6775 28.9883 51.3272 27.6381C49.977 26.288 47.7881 26.288 46.4378 27.6381C46.4378 27.6381 46.4378 27.6381 46.4378 27.6381M46.4378 32.5274L46.0266 27.2268L46.4378 27.6381M46.4378 32.5274C45.0878 31.1773 45.0878 28.9883 46.4378 27.6381M46.4378 32.5274L46.4378 27.6381M38.3245 24.1536L38.5459 24.1519L38.7102 24.0034C44.4576 18.8067 51.8174 15.7067 59.5864 15.2445L60.0931 15.2143C62.1611 15.0913 63.8725 16.8023 63.7497 18.8704L63.7197 19.3765C63.2555 27.1932 60.1211 34.596 54.8671 40.3597L54.717 40.5243L54.7153 40.7471L54.6329 51.6158C54.626 52.5238 54.2623 53.3923 53.6203 54.0342L44.4353 63.2192C42.2462 65.4084 38.5043 63.8377 38.5336 60.7419L38.6002 53.7272L38.6027 53.467L38.4102 53.2917C38.3823 53.2663 38.3533 53.2384 38.322 53.2075C38.3217 53.2071 38.3214 53.2068 38.321 53.2065L25.757 40.6423C25.703 40.5883 25.6523 40.5332 25.6048 40.4768L25.4284 40.2675L25.1546 40.2701L18.1291 40.3366C15.0333 40.366 13.4626 36.6241 15.6517 34.435L24.8366 25.2501L24.8366 25.2501C25.4785 24.6082 26.3471 24.2445 27.2549 24.2376L38.3245 24.1536ZM42.4589 52.8193L42.2908 52.9874L42.2885 53.2251L42.2355 58.8003L42.222 60.2234L43.2284 59.2171L50.7817 51.6638L50.9502 51.4952L50.952 51.2569L50.9943 45.6927L51.0051 44.2734L50.0015 45.277L42.4589 52.8193ZM51.2424 38.8263L51.2438 38.825C56.3758 33.6587 59.4856 26.8273 60.0153 19.5711L60.0643 18.8997L59.3928 18.9487C52.104 19.4816 45.2439 22.6176 40.0698 27.7918L29.504 38.3576L29.0927 38.7689L29.504 39.1801L39.7851 49.4615L40.1964 49.8727L40.6076 49.4614L51.2424 38.8263ZM19.6539 35.6419L18.6476 36.6482L20.0706 36.6347L25.6459 36.5821L25.8835 36.5798L26.0516 36.4117L33.5942 28.869L34.5978 27.8654L33.1786 27.8762L27.6139 27.9184L27.3756 27.9203L27.2071 28.0888L19.6539 35.6419ZM26.7494 56.4546C26.7492 56.4548 26.7489 56.4549 26.7487 56.4551L26.8211 56.3937C26.8117 56.4032 26.7996 56.4146 26.7849 56.427C26.7805 56.4307 26.7735 56.4365 26.7644 56.4434C26.7599 56.4469 26.7549 56.4507 26.7494 56.4546Z"
                  fill="#FFA000"
                  stroke="white"
                  stroke-width="1.16319"
                />
              </svg>
            </div>
            <div className=" w-[95px]   h-[100%] z-10 translate-y-[100%] group-hover:-translate-y-0 duration-500 ease-in-out ">
              {/* svg*/}
              <div className="absolute">
              <svg xmlns="http://www.w3.org/2000/svg" width="95" height="91" viewBox="0 0 95 91" fill="none">
<path d="M33.1907 0.564374H93.5283V57.6436C93.5283 75.3712 79.1572 89.7423 61.4296 89.7423H1.09202V32.6631C1.09202 14.9354 15.4631 0.564374 33.1907 0.564374Z" fill="#FFA800" stroke="#FFA800" stroke-width="0.969325"/>
<path d="M31.9163 63.3969C32.6626 63.2507 33.3426 63.0756 33.891 62.8737C34.4193 62.6791 34.661 62.5184 34.7428 62.4593L34.7522 62.4529L34.7644 62.4435C34.7718 62.4378 34.7844 62.4279 34.7991 62.4147C34.8029 62.4112 34.8141 62.4012 34.8281 62.3867C35.8896 61.3175 35.9407 59.4998 34.7032 58.2623L34.7032 58.2623C33.4113 56.9706 31.4963 57.0304 30.4771 58.0493L30.8433 58.4354L30.8458 58.438L30.8801 58.4741C30.8501 58.5187 30.7556 58.6659 30.6311 58.9798C30.5207 58.9249 30.425 58.8337 30.3661 58.7113C30.3002 58.5744 30.3066 58.4518 30.3113 58.4028C30.3169 58.3452 30.33 58.3011 30.3372 58.279C30.3519 58.2341 30.3688 58.2013 30.3743 58.1908C30.387 58.1663 30.3989 58.1481 30.4014 58.1442L30.4016 58.1439C30.4032 58.1415 30.4046 58.1393 30.4058 58.1375C30.4078 58.1346 30.4092 58.1325 30.4098 58.1317C30.4101 58.1312 30.4104 58.1308 30.4107 58.1303L30.4106 58.1303L30.4058 58.1374C30.3538 58.2136 30.1989 58.4497 30.0122 58.9741L30.0121 58.9743C29.8152 59.528 29.6472 60.2158 29.5092 60.9721L29.5092 60.9721C29.3799 61.6811 29.2842 62.4077 29.2137 63.0759L29.1371 63.8013L29.8613 63.7144C30.5149 63.636 31.224 63.5325 31.9163 63.3969ZM31.9163 63.3969L31.8045 62.8261M31.9163 63.3969C31.9163 63.3969 31.9163 63.3969 31.9164 63.3969L31.8045 62.8261M31.8045 62.8261C31.3331 62.9185 30.852 62.9959 30.3853 63.0605L34.7508 62.4535L34.4745 62.0765L34.407 61.9844M31.8045 62.8261C32.5338 62.6833 33.1811 62.5153 33.69 62.3279C33.7645 62.3005 33.8322 62.274 33.8934 62.2488M33.8934 62.2488C33.9269 62.3141 33.9759 62.3789 34.0458 62.4352C34.1901 62.5512 34.3421 62.5636 34.4104 62.5636C34.5317 62.5636 34.6223 62.5241 34.6378 62.5173L34.6393 62.5167C34.6692 62.5039 34.6917 62.4912 34.7025 62.485C34.7163 62.4769 34.7279 62.4694 34.7366 62.4635L34.407 61.9844M33.8934 62.2488C34.242 62.1052 34.3838 62.0015 34.407 61.9844M33.8934 62.2488L34.4098 61.9825L34.407 61.9844M32.6249 67.0115C30.9167 67.3463 29.1673 67.5033 28.1628 67.5727C26.5949 67.6811 25.2926 66.3994 25.3794 64.8279C25.4354 63.8146 25.5699 62.0415 25.8856 60.3111C26.0432 59.4473 26.2541 58.5481 26.5419 57.7393C26.8158 56.9698 27.2233 56.0941 27.8724 55.445C30.498 52.8195 34.7511 53.1012 37.3078 55.6579L37.719 55.2467L37.3078 55.6579C39.9102 58.2601 40.0078 62.4165 37.4259 64.9985C36.7855 65.6388 35.9253 66.0498 35.1638 66.3302L35.1637 66.3302C34.3651 66.6245 33.4779 66.8442 32.6249 67.0115ZM32.6249 67.0115L32.7367 67.5823L32.6248 67.0116C32.6248 67.0116 32.6248 67.0115 32.6249 67.0115ZM54.4378 38.5274C55.7881 39.8775 57.977 39.8774 59.3272 38.5274C60.6775 37.1772 60.6775 34.9883 59.3272 33.6381C57.977 32.288 55.7881 32.288 54.4378 33.6381C54.4378 33.6381 54.4378 33.6381 54.4378 33.6381M54.4378 38.5274L54.0266 33.2268L54.4378 33.6381M54.4378 38.5274C53.0878 37.1773 53.0878 34.9883 54.4378 33.6381M54.4378 38.5274L54.4378 33.6381M46.3245 30.1536L46.5459 30.1519L46.7102 30.0034C52.4576 24.8067 59.8174 21.7067 67.5864 21.2445L68.0931 21.2143C70.1611 21.0913 71.8725 22.8023 71.7497 24.8704L71.7197 25.3765C71.2555 33.1932 68.1211 40.596 62.8671 46.3597L62.717 46.5243L62.7153 46.7471L62.6329 57.6158C62.626 58.5238 62.2623 59.3923 61.6203 60.0342L52.4353 69.2192C50.2462 71.4084 46.5043 69.8377 46.5336 66.7419L46.6002 59.7272L46.6027 59.467L46.4102 59.2917C46.3823 59.2663 46.3533 59.2384 46.322 59.2075C46.3217 59.2071 46.3214 59.2068 46.321 59.2065L33.757 46.6423C33.703 46.5883 33.6523 46.5332 33.6048 46.4768L33.4284 46.2675L33.1546 46.2701L26.1291 46.3366C23.0333 46.366 21.4626 42.6241 23.6517 40.435L32.8366 31.2501L32.8366 31.2501C33.4785 30.6082 34.3471 30.2445 35.2549 30.2376L46.3245 30.1536ZM50.4589 58.8193L50.2908 58.9874L50.2885 59.2251L50.2355 64.8003L50.222 66.2234L51.2284 65.2171L58.7817 57.6638L58.9502 57.4952L58.952 57.2569L58.9943 51.6927L59.0051 50.2734L58.0015 51.277L50.4589 58.8193ZM59.2424 44.8263L59.2438 44.825C64.3758 39.6587 67.4856 32.8273 68.0153 25.5711L68.0643 24.8997L67.3928 24.9487C60.104 25.4816 53.2439 28.6176 48.0698 33.7918L37.504 44.3576L37.0927 44.7689L37.504 45.1801L47.7851 55.4615L48.1964 55.8727L48.6076 55.4614L59.2424 44.8263ZM27.6539 41.6419L26.6476 42.6482L28.0706 42.6347L33.6459 42.5821L33.8835 42.5798L34.0516 42.4117L41.5942 34.869L42.5978 33.8654L41.1786 33.8762L35.6139 33.9184L35.3756 33.9203L35.2071 34.0888L27.6539 41.6419ZM34.7494 62.4546C34.7492 62.4548 34.7489 62.4549 34.7487 62.4551L34.8211 62.3937C34.8117 62.4032 34.7996 62.4146 34.7849 62.427C34.7805 62.4307 34.7735 62.4365 34.7644 62.4434C34.7599 62.4469 34.7549 62.4507 34.7494 62.4546Z" fill="#FFA000" stroke="white" stroke-width="1.16319"/>
</svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="w-[120px]">
      <img src={ball} alt='noimage' />
    </div>
    </div>
  );
}
