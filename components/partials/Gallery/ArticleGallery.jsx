import FancyPhoto from "../Popup/FancyPhoto";
import siteConfig from "@/site.config";
import Image from "next/image";
import { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"; // Import pagination styles

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
        <Swiper
          slidesPerView={3}
          onSlideChange={(swiperCore) => {
            const { activeIndex } = swiperCore;
            setCurrentIndex(activeIndex + 3);
          }}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="h-[15px] w-[15px] ${className}"></span>`;
            },
          }}
          modules={[Pagination]} // Register the Pagination module
        >
          {Gallery.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative overflow-hidden cursor-pointer group"
                data-fancybox="gallery"
                data-thumb={`${siteImagePath}${item?.formats?.thumbnail?.url}&w=2048`}
                data-caption={item?.caption}
                href={`${siteImagePath}${item?.url}&w=2048`}
                id={`fancybox-${index}`}
              >
                <Image
                  src={siteUrl + item.url}
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition"
                  width={700}
                  height={700}
                  alt={item?.caption || "Hello World"}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </FancyPhoto>
    </>
  );
}
