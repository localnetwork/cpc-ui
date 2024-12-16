import helper from "@/lib/utils/helper";
import Image from "next/image";

export default function PortraitMediaText({ block }) {
  const { colorExtractor } = helper;

  const { Image: image, Title, Description, Theme } = block;
  const extractedColor = colorExtractor(Theme);

  return (
    <div
      className={`py-[50px] lg:py-[100px] bg-[${extractedColor.color}]`}
      style={{ color: extractedColor.textColor }}
    >
      <div className="container">
        <Image
          src={process.env.NEXT_PUBLIC_TENANT_API + image.url}
          width={1200}
          height={1200}
          className="w-full"
        />
        <div className="mt-[50px] text-center">
          <h2 className="font-secondary text-[30px] sm:text-[40px] md:text-[50px] lg:text-[80px] leading-normal mb-[15px] lg:mb-[30px]">
            {Title}
          </h2>
          <div
            className="text-[18px] lg:text-[20px] leading-normal lg:leading-[45px]"
            dangerouslySetInnerHTML={{ __html: Description }}
          />
        </div>
      </div>
    </div>
  );
}
