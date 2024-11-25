import Link from "next/link";
import Chalk from "../icons/Chalk";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import siteConfig from "@/site.config";
import Image from "next/image";

export default function Block({ block }) {
  const { siteUrl } = siteConfig;
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, margin: "-10%" });

  const variants = {
    initial: { width: "0%", opacity: 0 },
    animate: { width: "100%", opacity: 1 },
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section
      ref={ref}
      className="bg-[#F5F4F1] px-[15px] md:px-[30px] lg:px-[50px] py-[50px] lg:py-[100px] text-[#13100b]"
    >
      <div className="container text-center">
        <Chalk />
        <motion.div
          className="mb-[30px] md:mb-[50px]"
          variants={fadeInUp}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Image
            className="mx-auto w-[100px] md:w-[150px]"
            src={siteUrl + block?.Logo?.url}
            width={150}
            height={150}
            alt="Logo"
          />
        </motion.div>
        <div className="relative inline-block md:mb-[50px]">
          <h2 className="text-[30px] md:text-[35px] lg:text-[40px] leading-[45px] lg:leading-[100%] font-secondary mb-[20px]">
            {block?.Title}
          </h2>
          <motion.div
            className="w-[100%] hidden md:block border-b-[3px] border-[#13100b]"
            style={{ filter: "url(#chalk)" }}
            variants={variants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ delay: 0.2, duration: 1.5, ease: "easeInOut" }}
          />
        </div>
        <div
          className="max-w-[900px] mx-auto"
          dangerouslySetInnerHTML={{ __html: block?.Description }}
        />

        <div className="">
          <Link
            className="group relative hover:text-white transition border-[1px] border-[#ccc] bg-white font-bold mt-[40px] px-[25px] py-[10px] rounded-[30px] overflow-hidden inline-block"
            href={block?.Link}
          >
            <span className="bg-[#9A0C16] absolute transition-all ease-[ease] duration-[300ms] left-0 top-0 rounded-full group-hover:w-[calc(100%)] w-[0] h-[50px]" />
            <span className="relative">Learn More About Us</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
