import helper from "@/lib/utils/helper";
import Image from "next/image";
import siteConfig from "@/site.config";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Block({ block }) {
  const { Theme, Media, Title, Description } = block;
  const { colorExtractor } = helper;

  const extractedColor = colorExtractor(Theme);

  const fadeInLeft = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };

  // Create refs using useRef
  const refTitle = useRef(null);
  const refImage = useRef(null);
  const refDescription = useRef(null);

  // Use useInView with custom threshold
  const inViewTitle = useInView(refTitle, {
    once: true,
    margin: "-30% 0% -30% 0%",
  });
  const inViewImage = useInView(refImage, {
    once: true,
    margin: "-30% 0% -30% 0%",
  });
  const inViewDescription = useInView(refDescription, {
    once: true,
    margin: "-30% 0% -30% 0%",
  });

  return (
    <section
      className={`min-h-[500px] py-[100px] overflow-hidden flex flex-col bg-[${extractedColor.color}]`}
    >
      <div className="container">
        {Title && (
          <motion.h2
            ref={refTitle}
            className="text-[48px] mb-[30px] font-secondary leading-normal"
            style={{ color: extractedColor.textColor }}
            variants={fadeInLeft}
            initial="hidden"
            animate={inViewTitle ? "visible" : "hidden"}
          >
            {Title}
          </motion.h2>
        )}
        <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-[50px]">
          <motion.div
            ref={refImage}
            className="min-h-[250px] md:min-h-[450px]"
            variants={fadeInLeft}
            initial="hidden"
            animate={inViewImage ? "visible" : "hidden"}
          >
            <Image
              src={siteConfig.siteUrl + Media.url}
              width={1200}
              height={600}
              className="min-h-[250px] md:min-h-[450px] object-cover"
            />
          </motion.div>
          <motion.div
            ref={refDescription}
            variants={fadeInRight}
            initial="hidden"
            animate={inViewDescription ? "visible" : "hidden"}
          >
            <div
              className="leading-[35px]"
              style={{ color: extractedColor.textColor }}
              dangerouslySetInnerHTML={{ __html: Description }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
