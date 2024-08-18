import { motion } from "framer-motion";
import Image from "next/image";
import facultyEntriesData from "@/lib/prebuildScripts/static/faculty-entries.json";
import siteConfig from "@/site.config";

export default function Faculty({ block }) {
  const { siteUrl } = siteConfig;

  // Animation variants for fadeInUp
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-[100px] px-[50px]">
      <div className="container">
        <h2 className="font-secondary leading-normal text-[80px] mb-[25px]">
          {block?.Title}
        </h2>

        <motion.div
          initial="hidden"
          whileInView="visible" // Triggers animation when in view
          viewport={{ once: true, amount: 0.1 }} // Configures when the animation should start
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2, // Adjust the stagger delay as needed
              },
            },
          }}
          className="grid grid-cols-3 gap-x-[50px] gap-y-[100px]"
        >
          {facultyEntriesData.map((item, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Image
                className="w-full h-[550px] object-cover"
                src={siteUrl + item.Image?.url}
                width={500}
                height={500}
                alt={item.Name}
              />
              <h3 className="font-secondary mt-[30px] leading-normal text-[30px] mb-[15px]">
                {item.Name}
              </h3>
              <h4 className="text-[#707070] text-[20px] font-semibold">
                {item.Position}
              </h4>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
