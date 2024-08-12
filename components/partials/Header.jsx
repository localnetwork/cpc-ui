import Image from "next/image";
import { useEffect, useState } from "react";
import Headroom from "react-headroom";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  const isScrolled = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", isScrolled);
    return () => {
      window.removeEventListener("scroll", isScrolled);
    };
  }, []);

  return (
    <Headroom className={`fixed top-0 left-0 w-full z-[1000] `}>
      <header
        className={`flex flex-wrap items-center justify-between min-h-[90px] pl-[40px] ${
          scrolled ? "bg-white shadow-md" : ""
        }`}
      >
        <div className="site-logo flex items-center gap-[15px]">
          <Image
            src={"/assets/logo-cpc.png"}
            alt="Logo"
            width={190}
            height={48}
            className="h-[60px] w-auto"
          />
          <span
            className={`text-center text-[20px] font-bold ${
              scrolled ? "text-[#0e0e0e]" : ""
            }`}
          >
            Cordova Public College
          </span>
        </div>
        <div className="bg-[#0e0e0e] flex flex-wrap text-[18px] self-stretch items-center">
          <div className="flex items-center py-[20px] px-[35px] h-full border-r-[#292c2f] border-r-[1px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="mr-[10px]"
              fill="none"
              color="#ffffff"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.7929 16.7929C17.1834 16.4024 17.8166 16.4024 18.2071 16.7929L22.7071 21.2929C23.0976 21.6834 23.0976 22.3166 22.7071 22.7071C22.3166 23.0976 21.6834 23.0976 21.2929 22.7071L16.7929 18.2071C16.4024 17.8166 16.4024 17.1834 16.7929 16.7929Z"
                fill="#ffffff"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11ZM11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3Z"
                fill="#ffffff"
              ></path>
            </svg>
            Search
          </div>
          <div className="flex items-center py-[20px] px-[35px] gap-[15px]">
            <div className="">
              <span className="h-[3px] block w-[25px] bg-white mb-[5px]" />
              <span className="h-[3px] block w-[25px] bg-white mb-[5px]" />
              <span className="h-[3px] block w-[25px] bg-white" />
            </div>
            Menu
          </div>
        </div>
      </header>
    </Headroom>
  );
}
