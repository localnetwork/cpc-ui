import siteConfig from "@/site.config";
import Image from "next/image";
import { useEffect, useState } from "react";
import { InlineShareButtons } from "sharethis-reactjs";
import faculties from "@/prebuild/static-data/faculty-entries.json";

import FancyPhoto from "../partials/Popup/FancyPhoto";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"; // Import pagination styles
import Link from "next/link";
export default function People({ page }) {
  const { siteUrl } = siteConfig;
  const [currentIndex, setCurrentIndex] = useState(3);

  const shareDes = page?.attributes?.Description?.replace(/(<([^>]+)>)/gi, "");
  const [currentUrl, setCurrentUrl] = useState("");

  const { Gallery } = page?.attributes;

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const filteredFaculty = faculties.filter((faculty) => {
    return faculty?.id !== page?.attributes?.id;
  });

  return (
    <div className="">
      <div className="min-h-[300px] bg-[#0E0E0E]"></div>

      <div className="relative bg-[#F5F4F1] pb-[150px]">
        <div className="container ">
          <div className="flex gap-[50px] flex-wrap">
            <div className="relative mt-[-100px] pl-[15px]">
              <div className=" w-[200px] h-[275px] p-[10px] relative">
                <span className="border-[5px] border-[#9A0C16] absolute top-[-14px] left-[-14px] h-full w-full" />
                <span className="border-[5px] border-[#1B217A] absolute top-[0px] left-[-1px] h-full w-full" />
                {page?.attributes?.Image?.url && (
                  <Image
                    src={siteUrl + page?.attributes?.Image?.url}
                    width={200}
                    height={300}
                    alt={page?.attributes?.Title}
                    className="h-full object-cover relative bg-[#0E0E0E]"
                  />
                )}
              </div>
            </div>
            <div className="text-[#0E0E0E] pt-[50px]">
              <h1 className="text-[50px] mb-[20px] font-secondary">
                {page?.attributes?.Title}
              </h1>
              <p className="opacity-70">{page?.attributes?.Position}</p>
              <div className="inline-flex mt-[15px] relative z-[1]">
                <InlineShareButtons
                  config={{
                    alignment: "left", // alignment of buttons (left, center, right)
                    color: "social", // set the color of buttons (social, white)
                    enabled: true, // show/hide buttons (true, false)
                    font_size: 16, // font size for the buttons
                    labels: "cta", // button labels (cta, counts, null)
                    language: "en", // which language to use (see LANGUAGES)
                    networks: [
                      // which networks to include (see SHARING NETWORKS)
                      "facebook",
                      "linkedin",
                      "twitter",
                    ],
                    padding: 12, // padding within buttons (INTEGER)
                    radius: 4, // the corner radius on each button (INTEGER)
                    show_total: false,
                    size: 40, // the size of each button (INTEGER)

                    min_count: 10, // (threshold for total share count to be displayed)
                    url: currentUrl, // (defaults to current url)
                    image: `${siteUrl}${page?.attributes?.Image?.url}&w=2048`, // (defaults to og:image or twitter:image)
                    description: page?.attributes?.Description, // (defaults to og:description or twitter:description)
                    title: page?.attributes?.Title, // (defaults to og:title or twitter:title)
                    message: shareDes, // (only for email sharing)
                    subject: `New Article:${page?.attributes?.Title}`, // (only for email sharing)
                  }}
                />
              </div>
            </div>
          </div>
          <div>
            {page?.attributes?.Description && (
              <div
                className="mt-[50px] text-[#808080] text-[18px] mb-[50px]"
                dangerouslySetInnerHTML={{
                  __html: page?.attributes?.Description,
                }}
              />
            )}
          </div>

          {filteredFaculty?.length > 0 && (
            <div className="mt-[100px]">
              <h2 className="text-[50px] font-secondary mb-[50px] text-[#0E0E0E]">
                More People
              </h2>
              <div className="relative">
                <button
                  className="mp-arrows outline outline-2 outline-offset-[5px] outline-[#1B217A] custom-prev absolute top-1/2 left-[-25px] transform -translate-y-1/2 z-10 bg-[#1B217A] shadow-md text-white rounded-full w-[70px] h-[70px] flex items-center justify-center transition"
                  aria-label="Previous"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-[35px] h-[35px]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5 8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>
                <button
                  className="mp-arrows outline outline-2 outline-offset-[5px] outline-[#1B217A] custom-next absolute top-1/2 right-[-25px] transform -translate-y-1/2 z-10 bg-[#1B217A] shadow-md text-white rounded-full w-[70px] h-[70px] flex items-center justify-center transition"
                  aria-label="Next"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-[35px] h-[35px]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
                <Swiper
                  slidesPerView={4}
                  spaceBetween={30}
                  onSlideChange={(swiperCore) => {
                    const { activeIndex } = swiperCore;
                    setCurrentIndex(activeIndex + 3);
                  }}
                  navigation={{
                    nextEl: ".custom-next", // Attach custom classes
                    prevEl: ".custom-prev",
                  }}
                  // pagination={{
                  //   clickable: true,
                  //   renderBullet: (index, className) => {
                  //     return `<span class="h-[15px] w-[15px] ${className}"></span>`;
                  //   },
                  // }}
                  className="mp-slider"
                  modules={[Navigation]} // Register the Pagination module
                >
                  {filteredFaculty.map((item, index) => (
                    <SwiperSlide key={index}>
                      {item?.Image?.url && (
                        <div
                          className={`relative group border-[5px] ${
                            index % 2 === 0
                              ? "border-[#9A0C16]"
                              : "border-[#7F821C]"
                          }  p-[10px]`}
                        >
                          <Link
                            href={`/${item?.slug}`}
                            className="absolute opacity-0 w-full h-full top-0 left-0 z-[100]"
                          />

                          <div className="relative overflow-hidden pb-[125%]">
                            <span class="absolute group-hover:opacity-100 opacity-0 transition z-[1] top-0 left-0 w-full h-full bg-[linear-gradient(0deg,#0e0e0e,transparent)]"></span>
                            <div className="person-info translate-y-[100%] group-hover:translate-y-0 transition flex justify-between items-center p-[15px] z-[20] absolute bottom-0 left-0 w-full">
                              <h2 className="font-bold text-[18px]">
                                {item?.Title}
                              </h2>

                              <div className="flex items-center">
                                <Link
                                  href={`/${item?.slug}`}
                                  className="border-[2px] border-white inline-block rounded-full p-[5px]"
                                >
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
                                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                                    />
                                  </svg>
                                </Link>
                              </div>
                            </div>
                            {/* <span className="pb-[125%] block" /> */}
                            <Image
                              src={siteUrl + item?.Image?.url}
                              className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition"
                              width={700}
                              height={700}
                              alt={item?.caption || "Hello World"}
                            />
                          </div>
                        </div>
                      )}
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
