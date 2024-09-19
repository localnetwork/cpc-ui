import FancyPhoto from "../Popup/FancyPhoto";
import siteConfig from "@/site.config";
import Image from "next/image";
import { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
export default function ArticleGallery({ Gallery }) {
  const { siteUrl, siteImagePath } = siteConfig;

  const [currentIndex, setCurrentIndex] = useState(3);

  return (
    <>
      <FancyPhoto
        options={{
          Carousel: {
            infinite: true,
          },
        }}
      >
        <div className="text-black">
          {currentIndex} / {Gallery.length}
        </div>
        <Swiper
          slidesPerView={3}
          onSlideChange={(swiperCore) => {
            const { activeIndex, snapIndex, previousIndex, realIndex } =
              swiperCore;
            setCurrentIndex(activeIndex + 3);
          }}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {Gallery.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div
                  className="relative overflow-hidden group-hover:cursor-pointer"
                  data-fancybox="gallery"
                  data-thumb={`${siteImagePath}${item?.formats?.thumbnail?.url}&w=2048`}
                  data-caption={item?.caption}
                  href={`${siteImagePath}${item?.url}&w=2048`}
                  id={`fancybox-${index}`}
                >
                  <Image
                    src={siteUrl + item.url}
                    className="w-full h-[400px] object-cover"
                    width={700}
                    height={700}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </FancyPhoto>
      {/* <h2 className="text-[40px] font-secondary mb-[20px] text-black">Media</h2> */}
      {/* <div className="pb-[70px] grid 2xs:grid-cols-2 md:grid-cols-3 gap-[30px]"> */}
      {/* {Gallery.map((item, index) => {
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
                    <Image
                      src={`${siteUrl}${item.url}`}
                      width={300}
                      height={300}
                      alt={item?.caption || "Hello World"}
                      className="w-full h-[100px] md:h-[150px] lg:h-[200px] xl:h-[250px] object-cover bg-[#f5f5f5]"
                    />
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
        })} */}
      {/* </div> */}
    </>
  );
}
