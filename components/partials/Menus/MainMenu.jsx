import globalState from "@/lib/store/globalState";
import { motion, AnimatePresence } from "framer-motion";
import mainMenuData from "@/prebuild/static-data/main-menu-data";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import newsEntriesData from "@/prebuild/static-data/news-block-articles.json";
export default function MainMenu() {
  const [mainMenu, setMainMenu] = globalState((state) => [state.mainMenu]);
  return (
    <div
      className={`menu-header ${
        mainMenu ? "menu-open" : "menu-closed"
      } fixed z-[9000] top-0 left-0 w-full overflow-y-auto [&::-webkit-scrollbar]:[width:8px] [&::-webkit-scrollbar]:[background:#ccc] scrollbar [&::-webkit-scrollbar-thumb]:[cursor:col-resize] [&::-webkit-scrollbar]:[borderRadius:8px] [&::-webkit-scrollbar-thumb]:[borderRadius:8px] [&::-webkit-scrollbar-thumb]:bg-[#9A0C16]  overflow-x-hidden h-full bg-[#0E0E0E]`}
    >
      <div className="relative z-[2]">
        <div
          key={mainMenu ? "menu-open" : "menu-close"}
          className="bg-[#0E0E0E] z-[100] sticky mb-[30px] flex justify-between top-0 py-[15px] lg:py-[30px] px-[15px] lg:px-[50px]"
        >
          <div className="block font-secondary text-[40px] leading-normal">
            <Link
              href="/"
              onClick={() => {
                globalState.setState({ mainMenu: false });
              }}
            >
              <Image
                src={"/assets/logo-cpc.png"}
                alt="Logo"
                width={60}
                height={48}
                className="h-[60px] w-auto contrast-0 brightness-200"
              />
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
            <span className="hidden lg:block">Close</span>
          </div>
        </div>

        <div className="grid grid-cols-4 md:flex-row px-[15px] lg:px-[50px] mx-[-30px]">
          {/* <div className="w-full max-w-[25%] px-[30px]">
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
          </div> */}
          <div className="col-span-4 lg:col-span-3 columns-1 lg:columns-2 gap-[50px] px-[30px] w-full">
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
                        ? "pb-[15px] border-b-[1px] border-[#7E7E7E]"
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
                            className="flex group items-center hover:text-[#7E7E7E] transition ease justify-between text-[18px] mb-[15px] pb-[15px] border-b-[1px] border-[#7E7E7E]"
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
                              stroke="#7E7E7E"
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

          <div className="hidden lg:block lg:col-span-1">
            <h2 className="font-bold block text-[25px] mb-[40px] pb-[15px] border-b-[1px] border-[#7E7E7E]">
              Updates
            </h2>
            <div className="flex flex-col gap-y-[50px] gap-x-[30px]">
              {newsEntriesData?.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-[15px] gap-[15px] grid grid-cols-3"
                >
                  <Link
                    href={`/${item?.slug}`}
                    className="absolute top-0 left-0 w-full h-full z-[1000]"
                    onClick={() => {
                      globalState.setState({ mainMenu: false });
                    }}
                    aria-label={`Read more about ${item?.title}`}
                  />
                  <div className="relative col-span-1">
                    <span className="bg-[#1B217A] absolute top-[-14px] left-[-14px] h-full w-full" />
                    <Image
                      src={
                        process.env.NEXT_PUBLIC_TENANT_API +
                        item?.Image?.formats?.thumbnail?.url
                      }
                      width={300}
                      height={300}
                      className="w-full relative h-[100px] object-cover"
                      alt="CPC Logo"
                    />
                  </div>

                  <div className="col-span-2">
                    <h3 className="text-[20px] font-secondary line-clamp-1">
                      {item?.Title}
                    </h3>
                    <div
                      className="line-clamp-1 text-[14px] text-[#7E7E7E]"
                      dangerouslySetInnerHTML={{ __html: item?.Description }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
