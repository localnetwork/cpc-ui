import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function Banner({ block }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      className="min-h-[700px] h-full-screen bg-black w-full flex items-center justify-center flex-col relative"
    >
      <Image
        src={`${process.env.NEXT_PUBLIC_TENANT_API + block?.Image?.url}`}
        alt="Banner"
        width={1920}
        height={1080}
        className="absolute top-0 left-0 z-0 w-full h-full object-cover"
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
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-[50px] h-[50px] text-white"
            initial={{ y: 0 }}
            animate={isInView ? { y: [0, -10, 0] } : {}}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </motion.svg>
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
          <h1 className="font-secondary leading-normal text-[100px] text-white mb-[25px]">
            {block?.Title}
          </h1>
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
            className="text-[25px]"
            dangerouslySetInnerHTML={{ __html: block?.Description }}
          />
        </motion.div>
      </div>
    </section>
  );
}
