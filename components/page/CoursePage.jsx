import siteConfig from "@/site.config";
import Chalk from "../icons/Chalk";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import AccordionItem from "../partials/Accordions/AccordionItem";

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

  const { siteUrl } = siteConfig;
  const { Title, Description, FAQs } = page?.attributes;

  return (
    <div ref={ref}>
      <div
        className="min-h-[500px] flex justify-center items-center text-center bg-[#0E0E0E] bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${siteUrl}${page?.attributes?.Image?.url})`,
        }}
      >
        <Chalk />
        <div className="container pb-[50px] relative z-[200]">
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
            />
          </motion.div>
        </div>

        <div className="container text-[#13100b]">
          <h2 className="text-[40px] font-secondary mb-[50px]">
            About this course
          </h2>
          <div className="" dangerouslySetInnerHTML={{ __html: Description }} />

          {FAQs && FAQs.length > 0 && (
            <>
              <h2 className="text-[40px] font-secondary mt-[70px] mb-[40px]">
                FAQs
              </h2>
              <div className="block pb-[30px]">
                {FAQs.map((item, index) => {
                  return <AccordionItem key={index} item={item} />;
                })}
              </div>
            </>
          )}

          <h2 className="text-[40px] font-secondary mt-[70px] mb-[40px]">
            Subjects
          </h2>

          <div className="pb-[40px]"></div>
        </div>
      </div>
    </div>
  );
}
