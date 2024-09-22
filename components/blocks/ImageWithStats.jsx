import helper from "@/lib/helpers/helper";
import siteConfig from "@/site.config";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const StatItem = ({ item }) => {
  return (
    <motion.div className="my-[50px] text-center">
      <h2 className="leading-normal text-[#1B217A] font-secondary text-[60px]">
        {item.Value}
      </h2>
      <p className="text-[#1e1e1e] font-bold mt-[15px]">{item.Label}</p>
    </motion.div>
  );
};

export default function ImageWithStats({ block }) {
  const { Color, Stats } = block;
  const { colorExtractor } = helper;

  const extractedColor = colorExtractor(Color);

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
        {Stats && (
          <>
            <div className="grid grid-cols-4 gap-[30px]">
              {Stats.map((item, index) => (
                <StatItem key={index} item={item} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
