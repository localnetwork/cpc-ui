import { useEffect, useState } from "react";
import ChevronRight from "../icons/ChevronRight";

export default function BackTop() {
  const [currentOffset, setCurrentOffset] = useState(0);
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const onScroll = () => setCurrentOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });
  return (
    <div
      className={`hover:opacity-[.8] bottom-[30px] right-[30px] transition duration-300 fixed z-[100] ${
        currentOffset > 300 ? "visible opacity-1" : "invisible !opacity-0"
      }`}
      onClick={scrollTop}
    >
      <span className="bg-[#9A0C16] border border-[#ff9aa2] cursor-pointer rounded-md flex items-center justify-center w-[60px] h-[60px]">
        <ChevronRight
          color="#fff"
          width={35}
          height={35}
          className="inline-block rotate-[-90deg]"
        />
      </span>
    </div>
  );
}
