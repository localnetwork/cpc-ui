import helper from "@/lib/helpers/helper";
import Link from "next/link";

export default function Block({ block }) {
  const { colorExtractor } = helper;
  const extractedColor = colorExtractor(block?.Theme);

  return (
    <div
      className={`min-h-[500px] py-[100px] bg-[${extractedColor?.color}]`}
      style={{ color: extractedColor.textColor }}
    >
      <div className="container">
        <div className="grid grid-cols-2 gap-[50px]">
          {block?.Cards.map((item, index) => (
            <Link
              key={index}
              href={item?.Link || "#"}
              className="border-[#333] bg-[#0c0c0c] hover:bg-[#000] transition border p-[30px] rounded-sm"
            >
              <h2 className="font-secondary text-[48px] leading-normal mb-[20px]">
                {item?.Title}
              </h2>
              <div
                className="opacity-80 text-[18px] leading-normal"
                dangerouslySetInnerHTML={{ __html: item?.Description }}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
