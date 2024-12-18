import helper from "@/lib/utils/helper";
import Image from "next/image";
import Link from "next/link";

export default function Block({ block }) {
  const {
    Theme,
    Image: image,
    Title,
    Description,
    Alignment,
    Link: link,
  } = block;
  const { colorExtractor } = helper;
  const extractedColor = colorExtractor(Theme);

  return (
    <section
      className={`py-[50px] md:py-[70px] lg:py-[100px] overflow-hidden flex flex-col bg-[${extractedColor.color}]`}
      style={{ color: extractedColor.textColor }}
    >
      <div className="container">
        <div
          className={`flex flex-wrap gap-[50px] md:gap-0 md:flex-row md:mx-[-25px] ${
            Alignment === "Left" ? "!flex-row-reverse" : ""
          }`}
        >
          <div className="w-full md:max-w-[50%] md:px-[25px] flex flex-col justify-center">
            {Title && (
              <h2 className="font-secondary text-[30px] md:text-[40px] lg:text-[50px] leading-normal mb-[30px]">
                {Title}
              </h2>
            )}

            {Description && (
              <div
                className="text-[16px] md:text-[18px]"
                dangerouslySetInnerHTML={{ __html: Description }}
              />
            )}
            {link && (
              <div className="mt-[50px]">
                <Link
                  href={link}
                  className="inline-flex text-[18px] md:text-[20px] font-bold items-center gap-[15px]"
                >
                  <span className="bg-[#666f78] text-white p-2 rounded-full mr-2 inline-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-[30px] h-[30px] cursor-pointer"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </span>
                  Learn More
                </Link>
              </div>
            )}
          </div>
          <div className="w-full md:max-w-[50%] md:px-[25px] flex justify-center">
            <Image
              src={process.env.NEXT_PUBLIC_TENANT_API + image.url}
              width={500}
              height={500}
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
