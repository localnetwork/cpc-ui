import helper from "@/lib/utils/helper";
import Link from "next/link";

export default function Block({ block }) {
  const { colorExtractor } = helper;
  const extractedColor = colorExtractor(block?.Theme);

  return (
    <div
      className={`py-[30px] md:py-[100px] bg-[${extractedColor?.color}]`}
      style={{ color: extractedColor.textColor }}
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[50px]">
          {block?.Cards.map((item, index) => (
            <Link
              key={index}
              href={item?.Link || "#"}
              className={`border-[#333] bg-[${extractedColor.textColor}] hover:opacity-70 transition border p-[30px] rounded-sm`}
            >
              <h2
                className={`font-secondary text-[30px] md:text-[48px] leading-normal ${
                  item?.Description ? "mb-[20px]" : ""
                } `}
              >
                {item?.Title}
              </h2>
              <div
                className="opacity-70 text-[16px] md:text-[18px] leading-normal"
                dangerouslySetInnerHTML={{ __html: item?.Description }}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
