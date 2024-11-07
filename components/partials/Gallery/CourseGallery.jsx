import FancyPhoto from "../Popup/FancyPhoto";
import siteConfig from "@/site.config";
import Image from "next/image";
import { useState } from "react";
export default function CourseGallery({ Gallery }) {
  const { siteUrl, siteImagePath } = siteConfig;

  const [initialItems, setInitialItems] = useState(6);

  const loadMore = () => {
    setInitialItems((prev) => prev + 3);
  };

  return (
    <>
      <h2 className="text-[40px] font-secondary mb-[50px]">Media</h2>
      <div className="pb-[70px] grid 2xs:grid-cols-2 md:grid-cols-3 gap-[30px]">
        {Gallery.map((item, index) => {
          if (index < initialItems) {
            return (
              <FancyPhoto
                key={index}
                options={{
                  Carousel: {
                    infinite: true,
                  },
                }}
              >
                <div
                  key={index}
                  className="relative group bg-white p-[15px] shadow-sm "
                >
                  <div
                    className="relative overflow-hidden group-hover:cursor-pointer"
                    data-fancybox="gallery"
                    data-thumb={`${siteImagePath}${item?.formats?.thumbnail?.url}&w=2048`}
                    data-caption={item?.caption}
                    href={`${siteImagePath}${item?.url}&w=2048`}
                    id={`fancybox-${index}`}
                  >
                    <div className="pb-[83.33%]">
                      <Image
                        src={`${siteUrl}${item.url}`}
                        width={300}
                        height={300}
                        alt={item?.caption || "Hello World"}
                        className="w-full h-full absolute top-0 left-0 object-cover bg-[#f5f5f5]"
                      />
                    </div>
                    <span className="select-none translate-y-[150%] group-hover:translate-y-[0] transition inline-flex text-[14px] items-center justify-center gap-[10px] absolute text-white py-[8px] px-[20px] bottom-0 left-0 bg-[#000] bg-opacity-70 font-secondary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6"
                        />
                      </svg>
                      View Photo
                    </span>
                  </div>
                </div>
              </FancyPhoto>
            );
          }
        })}
      </div>

      {initialItems < Gallery.length && (
        <div className="flex justify-center pb-[50px]">
          <span className="relative group overflow-hidden hover:overflow-visible p-[5px] ring-[#9a0c16] ring-2 hover:ring-4 transition rounded-full">
            <span className="absolute left-[-3px] text-white bg-[#000] bg-opacity-50 text-[14px] rounded-[5px] px-[15px] whitespace-nowrap transition opacity-0 group-hover:opacity-100 group-hover:transition group-hover:translate-y-[-50px] translate-y-[10px] group-hover:opacity-1">
              Load More
            </span>
            <span className="absolute group-hover:hidden inset-0 w-full h-full rounded-full bg-[#9a0c16] opacity-50 animate-ping"></span>

            <span
              className="relative  text-center cursor-pointer font-bold inline-flex items-center flex-col justify-center bg-[#9a0c16] rounded-full w-[80px] h-[80px] p-[15px] text-white"
              onClick={loadMore}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-[40px] h-[40px] mx-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </span>
        </div>
      )}
    </>
  );
}
