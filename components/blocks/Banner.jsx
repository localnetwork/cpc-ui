import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Chalk from "../icons/Chalk";

export default function Banner({ block }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const variants = {
    initial: { width: "0%", opacity: 1 },
    animate: { width: "100%", opacity: 1 },
  };

  return (
    <section
      ref={ref}
      className="min-h-[700px] h-full-screen bg-black w-full flex items-center justify-center flex-col relative"
    >
      <Chalk />
      <Image
        src={`${process.env.NEXT_PUBLIC_TENANT_API + block?.Image?.url}`}
        alt="Banner"
        width={1920}
        height={1080}
        className="absolute top-0 left-0 z-0 w-full h-full object-cover"
        style={{ objectFit: "cover" }}
      />
      <span className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(180deg,_hsla(0,_0%,_5%,_0)_29.9%,_#0e0e0e)]" />
      {/* Bottom Line */}
      <div className="absolute flex flex-col items-center bottom-0 h-[100px] w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-col items-center"
          transition={{
            duration: 0.8,
            delay: 3.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <motion.div className="border-[2px] border-white rounded-full flex items-center justify-center w-[25px] h-[50px] ">
            <motion.span
              initial={{ y: 0 }}
              animate={isInView ? { y: [0, -11, 0] } : {}}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className="h-[8px] w-[2px] block rounded-full bg-white block"
            ></motion.span>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute left-1/2 bottom-0 w-[2px] bg-white"
          initial={{ height: 0 }}
          animate={isInView ? { height: "35%" } : {}}
          transition={{
            duration: 1,
            delay: 2,
            ease: "easeInOut",
          }}
          style={{ transform: "translateX(-50%)" }}
        />
      </div>
      <div className="relative z-[2] max-w-[700px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="inline-block mt-[-50px]">
            <h2 className="font-secondary leading-normal text-[70px] lg:text-[100px] text-white mb-[25px]">
              {block?.Title}
            </h2>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: 1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div
            className="text-[25px] mb-[10px] px-[15px]"
            dangerouslySetInnerHTML={{ __html: block?.Description }}
          />
          <motion.div
            className="w-[100%] hidden md:block border-b-[5px]"
            style={{ filter: "url(#chalk)" }}
            variants={variants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ delay: 4, duration: 2, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
