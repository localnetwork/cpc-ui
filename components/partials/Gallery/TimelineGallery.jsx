import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import siteConfig from "@/site.config";
import Image from "next/image";
import helper from "@/lib/utils/helper";
export default function TimelineGallery({ gallery }) {
  return (
    <div className="mt-[50px]">
      <Swiper
        slidesPerView={6}
        spaceBetween={20}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          576: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          992: {
            slidesPerView: 5,
          },
          1200: {
            slidesPerView: 6,
          },
        }}
      >
        {gallery.map((item, index) => {
          const isOdd = helper.isOdd(index);
          return (
            <SwiperSlide key={index}>
              <div
                className={`p-[10px] border-[5px] border-[#222222] ${
                  isOdd ? "mt-[30px]" : ""
                }`}
              >
                <Image
                  src={siteConfig.siteUrl + item.url}
                  width={200}
                  height={200}
                  className="w-full h-[100px] object-cover border-[#222222] border"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
