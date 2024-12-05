import { motion } from "framer-motion";
import Image from "next/image";
// import facultyEntriesData from "@/lib/prebuildScripts/static/faculty-entries.json";

import facultyEntriesData from "@/prebuild/static-data/faculty-entries.json";
import siteConfig from "@/site.config";
import Link from "next/link";

export default function PeopleBlock({ block }) {
  const { siteUrl } = siteConfig;

  // Animation variants for fadeInUp
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-[50px] lg:py-[70px] xl:py-[100px] px-[15px] md:px-[30px] lg:px-[50px]">
      <div className="container">
        <h2 className="font-secondary leading-normal text-[40px] md:text-[50px] lg:text-[80px] mb-[25px]">
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[50px] gap-y-[30px] md:gap-[50px] lg:gap-y-[100px]"
        >
          {block?.FeaturedPeople?.map((item, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <div className="group relative overflow-hidden">
                <Link
                  href={`/${item?.slug}`}
                  className="absolute h-full w-full z-[1]"
                />
                <span className="pb-[125%] block" />

                <Image
                  className="group-hover:scale-105 transition w-full h-full absolute left-0 top-0 object-cover"
                  src={siteUrl + item.Image?.url}
                  width={500}
                  height={500}
                  alt={item.Name}
                />
              </div>
              <h3 className="font-secondary mt-[30px] leading-normal hover:underline text-[20px] md:text-[25px] lg:text-[30px] mb-[15px]">
                <Link href={`/${item?.slug}`} className="">
                  {item.Title}
                </Link>
              </h3>
              <h4 className="text-[#707070] text-[16px] md:text-[20px] font-semibold">
                {item.Position}
              </h4>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
