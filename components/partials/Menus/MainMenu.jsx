import globalState from "@/lib/store/globalState";
import { motion, AnimatePresence } from "framer-motion";
import mainMenuData from "@/prebuild/static-data/main-menu-data";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function MainMenu() {
  const [mainMenu, setMainMenu] = globalState((state) => [
    state.mainMenu,
    state.setMainMenu,
  ]);

  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (mainMenu) {
      setShouldAnimate(true);
    } else {
      setShouldAnimate(false);
    }
  }, [mainMenu]);

  return (
    <div
      className={`${
        mainMenu ? "visible" : "invisible"
      } fixed z-[9000] top-0 left-0 w-full h-full`}
    >
      <motion.span
        initial={{
          width: "1em",
          height: "1em",
          transform: "translate3d(-50vh, -50vh, 0) scale(2)",
        }}
        animate={{
          width: mainMenu ? "100vmax" : "1em",
          height: mainMenu ? "100vmax" : "1em",
          transform: mainMenu
            ? "translate3d(-50vh, -50vh, 0) scale(2)"
            : "translate3d(-50vh, -50vh, 0) scale(2)",
        }}
        transition={{
          duration: mainMenu ? 0.5 : 1,
          delay: mainMenu ? 0 : 1,
        }}
        className="bg-[#0c0f40] will-change-[width,height] rounded-full fixed z-[1] right-[-50vw] top-[-50vh] transition"
      />

      <div className="relative z-[2]">
        <AnimatePresence>
          {shouldAnimate && (
            <motion.div
              key={mainMenu ? "menu-open" : "menu-close"}
              className="sticky mb-[30px] flex justify-between top-0 pt-[30px] px-[50px]"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <div className="font-secondary text-[40px]">
                Cordova Public College
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
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex px-[30px]">
          <div className="w-full max-w-[25%]">
            <h2>Follow Us</h2>
          </div>
          <div className="columns-2 gap-[50px] w-3/4 custom-column-avoid">
            {mainMenuData?.items?.data?.map((item, index) => {
              const { title, url, children } = item?.attributes;
              return (
                <div
                  className="flex flex-col flex-wrap mt-[1px] pb-[30px] break-inside-avoid"
                  key={index}
                >
                  <Link
                    className={`font-bold block text-[25px] mb-[20px] ${
                      children?.data?.length > 0
                        ? "pb-[15px] border-b-[1px] border-[#6469b1]"
                        : ""
                    }`}
                    href={url || "#"}
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
