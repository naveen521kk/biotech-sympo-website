import React from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <div className="bg-black bg-opacity-50 md:bg-transparent w-screen flex flex-row justify-center p-5 h-[15%]">
        <div className="w-[80vw] flex flex-row justify-between items-center max-h-[60px]">
          <a href="/" aria-label="homepage">
            <div className="h-[65px] w-[65px] bgGlow"></div>
          </a>
          <div className="hidden md:block bg-[#b94f0937] text-white py-2 flex gap-6 rounded-2xl border-2 border-[#b94f0937]">
            <a className="px-6 text-lg hover:text-gray-300" href="/">
              Home
            </a>
            <a className="px-6 text-lg hover:text-gray-300" href="/transport">
              Transport
            </a>
            <a className="px-6 text-lg hover:text-gray-300" href="/contact">
              Contacts
            </a>
          </div>
          <div className="hidden md:block">
            <a
              className="bg-[#b94e09] rounded-tl-[16px] rounded-br-[16px] text-center text-lg text-white py-[8px] px-[12px] gap-8 w-full"
              href="https://sympo.stjosephs-engg.cc/"
            >
              REGISTER
            </a>
          </div>
          <div className="block md:hidden">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => setIsOpen(true)}
            >
              <line
                x1="10"
                y1="12"
                x2="30"
                y2="12"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
              ></line>
              <line
                x1="10"
                y1="20"
                x2="30"
                y2="20"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
              ></line>
              <line
                x1="10"
                y1="28"
                x2="30"
                y2="28"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
              ></line>
            </svg>
          </div>
          {isOpen && (
            <div className="z-50 fixed top-0 left-0 w-full p-8 text-center font-orbitron md:text-xl rounded-md backdrop-blur-xl transition-all duration-500 ease-in-out drawer">
              <button
                className="close-btn absolute top-4 right-4 text-4xl text-white"
                onClick={() => setIsOpen(false)}
              >
                ×
              </button>
              <a
                className="block mb-4 text-lg text-white hover:text-gray-300"
                href="/"
              >
                Home
              </a>

              <a
                className="block mb-4 text-lg text-white hover:text-gray-300"
                href="/transport"
              >
                Transport
              </a>

              <a
                className="block mb-4 text-lg text-white hover:text-gray-300"
                href="/contact"
              >
                Contacts
              </a>
              <div className="mt-4">
                <a
                  className="bg-[#4d81e3] rounded-tl-[16px] rounded-br-[16px] text-center text-lg text-white py-[8px] px-[12px] gap-8 w-full"
                  href="https://sympo.stjosephs-engg.cc/"
                >
                  REGISTER
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
