import Image from "next/image";

export default function HomeHeader() {
  return (
    <>
      <div className="header from-[#4F46E5] to-[#5accd4] bg-gradient-to-r p-6">
        <div className="header-top flex flex-row justify-between">
          <div className="header-1 flex flex-row gap-3 items-center">
            <div className="header-logo">
              <div className="w-[40px] h-[40px] flex justify-center items-center relative">
                <div className="w-[40px] h-[40px] flex justify-center items-center absolute bg-gray-400 opacity-50 rounded-full"></div>
                <span className="z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#FFFFFF"
                      d="M12 20.325q-.35 0-.712-.125t-.638-.4l-1.725-1.575q-2.65-2.425-4.788-4.812T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.325 0 2.5.562t2 1.538q.825-.975 2-1.537t2.5-.563q2.35 0 3.925 1.575T22 8.15q0 2.875-2.125 5.275T15.05 18.25l-1.7 1.55q-.275.275-.637.4t-.713.125"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div className="header-title flex flex-col ">
              <span className="text-white text-lg font-medium">GutFriend</span>
              <span className="text-white text-sm font-light">
                Your digestive health companion
              </span>
            </div>
          </div>
          <div className="header-2 flex items-center">
            <div className="header-notification">
              <div className="w-[40px] h-[40px] flex justify-center items-center relative">
                <div className="w-[40px] h-[40px] flex justify-center items-center absolute bg-gray-400 opacity-50 rounded-full"></div>
                <span className="z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#FFFFFF"
                      d="M5 19q-.425 0-.712-.288T4 18t.288-.712T5 17h1v-7q0-2.075 1.25-3.687T10.5 4.2v-.7q0-.625.438-1.062T12 2t1.063.438T13.5 3.5v.7q2 .5 3.25 2.113T18 10v7h1q.425 0 .713.288T20 18t-.288.713T19 19zm7 3q-.825 0-1.412-.587T10 20h4q0 .825-.587 1.413T12 22"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="header-main mt-4">
            <div className="">
                <div className="flex p-6 items-center shadow-2xl shadow-[#383838] gap-3 rounded-lg">
                    <div className="header-profile-picture">
                        <Image src={"/profile.jpg"} width={50} height={50} alt="Profile" className="w-[50px] h-[50px] flex justify-center items-center object-center object-cover rounded-full"></Image>
                    </div>
                    <div className="header-hello flex flex-col">
                        <span className="text-white font-light text-lg">Good morning, Abraham!</span>
                        <span className="text-white font-light text-sm">How are you feeling today?</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}
