import siteConfig from "@/site.config";
import Chalk from "../icons/Chalk";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import AccordionItem from "../partials/Accordions/AccordionItem";
import FancyPhoto from "../partials/Popup/FancyPhoto";

export default function CoursePage({ page, blocks }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const lineVariants = {
    initial: { width: "0%", opacity: 0 },
    animate: { width: "100%", opacity: 1 },
  };

  const rotateVariants = {
    rotate: {
      rotate: 360,
    },
  };

  const { siteUrl, siteImagePath } = siteConfig;
  const { Title, Description, FAQs, Subjects, Gallery } = page?.attributes;

  return (
    <div ref={ref}>
      <div className="min-h-[500px] flex justify-center items-center text-center bg-[#0E0E0E] bg-cover bg-center relative">
        <Image
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={`${siteUrl}${page?.attributes?.Image?.url}`}
          width={1920}
          height={700}
          alt={Title}
        />
        <Chalk />
        <div className="container pb-[50px] relative z-[200] relative">
          <h1 className="relative inline-block text-white text-[50px] font-secondary leading-[65px]">
            {Title}
            <motion.div
              className="w-[100%] block border-b-[5px] mt-[30px]"
              style={{ filter: "url(#chalk)" }}
              variants={lineVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ delay: 1, duration: 2, ease: "easeInOut" }}
            />
          </h1>
        </div>
        <span className="absolute bg-[#000] opacity-50 w-full h-full left-0 top-0 block z-[1]" />
        <span className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(180deg,_hsla(0,_0%,_5%,_0)_29.9%,_#0e0e0e)]" />
      </div>

      <div className="min-h-[500px] bg-[#F5F4F1]">
        <div className="logo relative top-[-50px] z-[200] flex justify-center">
          <motion.div
            variants={rotateVariants}
            animate="rotate"
            transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
          >
            <Image
              src="/assets/logo-cpc.png"
              className="bg-[#F5F4F1] p-[5px] rounded-full"
              width={100}
              height={100}
              alt="College Logo"
            />
          </motion.div>
        </div>

        <div className="container text-[#13100b] px-[15px]">
          <h2 className="text-[40px] font-secondary mb-[50px]">
            About this course
          </h2>
          <div
            className="pb-[70px]"
            dangerouslySetInnerHTML={{ __html: Description }}
          />

          {FAQs && FAQs.length > 0 && (
            <>
              <h2 className="text-[40px] font-secondary mb-[40px]">FAQs</h2>
              <div className="block pb-[70px]">
                {FAQs.map((item, index) => {
                  return <AccordionItem key={index} item={item} />;
                })}
              </div>
            </>
          )}

          {Subjects && Subjects.length > 0 && (
            <>
              <h2 className="text-[40px] font-secondary mb-[40px]">Subjects</h2>

              <div className="pb-[40px] w-full">
                {Subjects.map((item, index) => {
                  const { id, Semester, Year } = item;
                  return (
                    <div
                      key={index}
                      className="p-[30px] mb-[30px] bg-white border-[1px] border-[#ccc] pb-[15px]"
                    >
                      <div className="flex justify-between items-center mx-[-30px] mb-[30px] bg-[#1B217A] mt-[-30px] p-[30px]">
                        <h3 className="text-[25px] text-[#f3f4f4] font-secondary">
                          {Year}
                        </h3>
                        <span className="inline-block cursor-pointer bg-white rounded-full p-[5px] shadow-md">
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
                              d="M12 4.5v15m7.5-7.5h-15"
                            />
                          </svg>
                        </span>
                      </div>

                      <div className="grid lg:grid-cols-2 gap-[15px]">
                        {Semester.map((subject, index) => {
                          const { Sem, Subjects } = subject;
                          return (
                            <div key={index}>
                              <h4 className="font-bold mb-[10px]">{Sem}</h4>
                              {Subjects && Subjects.length > 0 && (
                                <table className="border border-[#ccc] w-full">
                                  <thead className="text-left bg-[#ddd]">
                                    <tr>
                                      <th className="p-[10px] border border-[#ccc]">
                                        Subject Code
                                      </th>
                                      <th className="p-[10px] border border-[#ccc]">
                                        Descriptive Title
                                      </th>
                                      <th className="p-[10px] border border-[#ccc]">
                                        Units
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {Subjects?.map((subjectItem, index) => {
                                      const {
                                        DescriptionTitle,
                                        SubjectCode,
                                        Units,
                                      } = subjectItem;
                                      return (
                                        <tr
                                          className="hover:bg-[#F5F4F1]"
                                          key={index}
                                        >
                                          <td className="p-[10px] border">
                                            {SubjectCode}
                                          </td>
                                          <td className="p-[10px] border">
                                            {DescriptionTitle}
                                          </td>
                                          <td className="p-[10px] border">
                                            {Units}
                                          </td>
                                        </tr>
                                      );
                                    })}
                                  </tbody>
                                </table>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}

          {Gallery && Gallery.length > 0 && (
            <>
              <h2 className="text-[40px] font-secondary mb-[50px]">Media</h2>
              <div className="pb-[70px] grid 2xs:grid-cols-2 md:grid-cols-3 gap-[30px]">
                {Gallery.map((item, index) => {
                  // console.log(
                  //   "imageUrl",
                  //   `${siteImagePath}${item?.url}&w=2048`
                  // );
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
                            className="w-full h-[200px] md:h-[250px] lg:h-[300px] xl:h-[350px] object-cover bg-[#f5f5f5]"
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
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
