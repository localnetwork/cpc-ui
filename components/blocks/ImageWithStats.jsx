import helper from "@/lib/helpers/helper";
import Image from "next/image";
import siteConfig from "@/site.config";
import { motion, useInView } from "framer-motion";

export default function ImageWithStats({ block }) {
  const { Color, Stats } = block;
  const { colorExtractor } = helper;

  const extractedColor = colorExtractor(Color);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // Stagger children by 0.2 seconds
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      className={`min-h-[500px] py-[100px] flex flex-col bg-[${extractedColor.color}]`}
    >
      <div className="container">
        <div>
          <Image
            alt="Hello"
            width={1200}
            height={600}
            src={siteConfig.siteUrl + block.Image?.url}
            className="object-cover w-full"
          />
        </div>
        <motion.div
          className="grid grid-cols-4 gap-[30px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }} // Set to false to trigger again when it comes into view
        >
          {Stats &&
            Stats.map((item, index) => {
              const { ref, inView } = useInView({ triggerOnce: true });
              return (
                <motion.div
                  key={index}
                  ref={ref}
                  variants={itemVariants}
                  className="my-[50px] text-center"
                >
                  <h2 className="leading-normal text-[#1B217A] font-secondary text-[60px]">
                    {item.Value}
                  </h2>
                  <p className="text-[#1e1e1e] font-bold mt-[15px]">
                    {item.Label}
                  </p>
                </motion.div>
              );
            })}
        </motion.div>
      </div>
    </section>
  );
}
