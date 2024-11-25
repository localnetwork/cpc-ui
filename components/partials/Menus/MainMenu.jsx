import globalState from "@/lib/store/globalState";
import { motion, AnimatePresence } from "framer-motion";
import mainMenuData from "@/prebuild/static-data/main-menu-data";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function MainMenu() {
  const [mainMenu, setMainMenu] = globalState((state) => [state.mainMenu]);

  return (
    <div
      className={`menu-header ${
        mainMenu ? "menu-open" : "menu-closed"
      } fixed z-[9000] top-0 left-0 w-full overflow-y-auto  overflow-x-hidden h-full bg-[#0c0f40]`}
    >
      <div className="relative z-[2]">
        <div
          key={mainMenu ? "menu-open" : "menu-close"}
          className="sticky mb-[30px] flex justify-between top-0 pt-[30px] px-[30px]"
        >
          <div className="hidden lg:block font-secondary text-[40px] leading-normal">
            <Link
              href="/"
              onClick={() => {
                globalState.setState({ mainMenu: false });
              }}
            >
              Cordova Public College
            </Link>
          </div>
          <div
            className="flex items-center gap-[15px] font-bold cursor-pointer"
            onClick={() => {
              globalState.setState({ mainMenu: false });
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-[50px] h-[50px] cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            Close
          </div>
        </div>

        <div className="flex flex-col flex-col-reverse md:flex-row px-[30px] mx-[-30px]">
          <div className="w-full max-w-[25%] px-[30px]">
            <h2 className="font-secondary text-[30px] leading-[45px]">
              Preparing for Success at Cordova Public College.
            </h2>
            <div className="mt-[60px]">
              <Link
                href="#"
                onClick={() => {
                  globalState.setState({ mainMenu: false });
                }}
                className="bg-[#2b3180] tracking-wider font-bold rounded-full w-[150px] h-[150px] flex items-center justify-center p-[10px]"
              >
                Join Us
              </Link>
            </div>
          </div>
          <div className="columns-1 lg:columns-2 gap-[50px] px-[30px] w-full lg:w-3/4 custom-column-avoid">
            {mainMenuData?.items?.data?.map((item, index) => {
              const { title, url, children } = item?.attributes;
              return (
                <div
                  className="flex flex-col flex-wrap mt-0 lg:mt-[1px] pb-[30px] break-inside-avoid"
                  key={index}
                >
                  <Link
                    className={`font-bold block text-[25px] mb-[20px] ${
                      children?.data?.length > 0
                        ? "pb-[15px] border-b-[1px] border-[#6469b1]"
                        : ""
                    }`}
                    href={url || "#"}
                    onClick={() => {
                      globalState.setState({ mainMenu: false });
                    }}
                  >
                    {title}
                  </Link>
                  {children?.data && children?.data?.length > 0 && (
                    <div className="pl-[15px]">
                      {children?.data?.map((child, childIndex) => {
                        const { title, url } = child?.attributes;
                        return (
                          <Link
                            key={childIndex}
                            className="flex group items-center justify-between text-[18px] mb-[15px] pb-[15px] border-b-[1px] border-[#6469b1]"
                            href={url || "#"}
                            onClick={() => {
                              globalState.setState({ mainMenu: false });
                            }}
                          >
                            {title}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="#6469b1"
                              className="size-6 transition opacity-0 group-hover:opacity-100"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                              />
                            </svg>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
