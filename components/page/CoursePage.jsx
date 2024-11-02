import siteConfig from "@/site.config";
import Chalk from "../icons/Chalk";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import AccordionItem from "../partials/Accordions/AccordionItem";
import FancyPhoto from "../partials/Popup/FancyPhoto";
import BaseApi from "@/lib/api/_base.api";
import CourseGallery from "../partials/Gallery/CourseGallery";

import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";

import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

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

  useEffect(() => {});

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
                      className="p-[30px] mb-[30px] bg-white border-[1px] border-[#ccc] pb-[30px]"
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
                                <Table className="border border-[#ccc] w-full">
                                  <Thead className="text-left bg-[#ddd]">
                                    <Tr>
                                      <Th className="p-[10px] border border-[#ccc]">
                                        Subject Code
                                      </Th>
                                      <Th className="p-[10px] border border-[#ccc]">
                                        Descriptive Title
                                      </Th>
                                      <Th className="p-[10px] border border-[#ccc]">
                                        Units
                                      </Th>
                                    </Tr>
                                  </Thead>
                                  <Tbody>
                                    {Subjects?.map((subjectItem, index) => {
                                      const {
                                        DescriptionTitle,
                                        SubjectCode,
                                        Units,
                                      } = subjectItem;
                                      return (
                                        <Tr
                                          className="hover:bg-[#F5F4F1]"
                                          key={index}
                                        >
                                          <Td className="p-[10px] border">
                                            {SubjectCode}
                                          </Td>
                                          <Td className="p-[10px] border">
                                            {DescriptionTitle}
                                          </Td>
                                          <Td className="p-[10px] border">
                                            {Units}
                                          </Td>
                                        </Tr>
                                      );
                                    })}
                                  </Tbody>
                                </Table>
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

          {Gallery && Gallery.length > 0 && <CourseGallery Gallery={Gallery} />}
        </div>
      </div>
    </div>
  );
}
