"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Headroom from "react-headroom";

import globalState from "@/lib/store/globalState";
import MainMenu from "./Menus/MainMenu";
import { useRouter } from "next/router";

import { disabledTypes, disabledComponents } from "@/lib/helpers/constant";
import { blockExistChecker } from "@/lib/helpers/block";
export default function Header({ ...props }) {
  const [scrolled, setScrolled] = useState(false);
  const [mainMenu] = globalState((state) => [state.mainMenu]);
  const showLazy = globalState((state) => [state.showLazy]);

  const blockFound = blockExistChecker(
    props?.pageProps?.blocks,
    disabledComponents
  );

  const router = useRouter();

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
    <>
      <Headroom className={`sticky mb-[-90px] top-0 left-0 w-full z-[1000] `}>
        <header
          className={`flex flex-wrap items-center justify-between min-h-[90px] pl-[50px] ${
            scrolled || blockFound ? "bg-white shadow-md" : ""
          }`}
        >
          <div className="site-logo">
            <Link href="/" className="flex items-center gap-[15px]">
              <Image
                src={"/assets/logo-cpc.png"}
                alt="Logo"
                width={60}
                height={48}
                className="h-[60px] w-auto"
              />
              <span
                className={`hidden lg:block text-center text-[20px] font-bold ${
                  scrolled || blockFound ? "text-[#0e0e0e]" : ""
                }`}
              >
                Cordova Public College
              </span>
            </Link>
          </div>
          <div
            className={`${
              scrolled || blockFound ? "bg-[#1B217A]" : ""
            } flex flex-wrap text-[18px] self-stretch items-center`}
          >
            <div
              className={` ${
                scrolled || blockFound ? "!flex" : "hidden"
              }  block relative group items-center py-[20px] px-[35px] h-full border-r-[#2b3180] border-r-[1px]`}
            >
              <span
                className={`${
                  scrolled || blockFound ? "bg-[#0c0f40]" : "bg-[#1B217A]"
                } absolute transition-all ease-[ease] duration-[300ms] left-[22px] rounded-full group-hover:w-[calc(100%-40px)] w-[50px] h-[50px]`}
              />
              <div className="relative flex items-center gap-[15px]">
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
                    d="M16.7929 16.7929C17.1834 16.4024 17.8166 16.4024 18.2071 16.7929L22.7071 21.2929C23.0976 21.6834 23.0976 22.3166 22.7071 22.7071C22.3166 23.0976 21.6834 23.0976 21.2929 22.7071L16.7929 18.2071C16.4024 17.8166 16.4024 17.1834 16.7929 16.7929Z"
                    fill="#ffffff"
                  ></path>
                  <path
                    d="M1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11ZM11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3Z"
                    fill="#ffffff"
                  ></path>
                </svg>
                <span className="hidden lg:block">Search</span>
              </div>
            </div>
            <div
              className="flex select-none group cursor-pointer relative items-center py-[20px] px-[35px] gap-[15px]"
              onClick={() => {
                globalState.setState({ mainMenu: true });
              }}
            >
              <span
                className={`${
                  scrolled || blockFound ? "bg-[#0c0f40]" : "bg-[#1B217A]"
                } absolute transition-all ease-[ease] duration-[300ms] left-[33px] rounded-full group-hover:w-[calc(100%-40px)] w-[50px] h-[50px]`}
              />
              <div className="relative flex flex-col items-center justify-center p-[10px]">
                <span
                  className={`${
                    scrolled || blockFound ? "bg-white" : "bg-[#f3f4f4]"
                  } h-[3px] block w-[25px] mb-[5px]`}
                />
                <span
                  className={`${
                    scrolled || blockFound ? "bg-white" : "bg-[#f3f4f4]"
                  } h-[3px] block w-[25px]`}
                />
              </div>
              <span className="relative hidden lg:block">Menu</span>
            </div>
          </div>
        </header>
      </Headroom>
      {showLazy && <MainMenu />}
    </>
  );
}
