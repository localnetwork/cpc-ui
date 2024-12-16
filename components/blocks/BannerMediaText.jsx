import BannerTextBreadcrumbs from "../partials/Breadcrumbs/BannerTextBreadcrumbs";

import helper from "@/lib/utils/helper";
import Image from "next/image";
export default function BannerMediaText({ page, block }) {
  const { Title, Theme, Description, ShowBreadcrumbs, Image: image } = block;

  const { colorExtractor } = helper;

  const extractedColor = colorExtractor(Theme);
  return (
    <section
      className={`min-h-[600px] flex flex-col bg-[${extractedColor.color}]`}
    >
      <div className="relative grow flex overflow-hidden mb-[70px]">
        <span className="absolute top-0 left-0 w-full h-full bg-[#000] bg-opacity-70 z-[1]" />
        <Image
          src={process.env.NEXT_PUBLIC_TENANT_API + image?.url}
          width={1200}
          height={1200}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div
          className={`container flex grow text-[${extractedColor.textColor}]`}
        >
          <div className="grid text-white relative z-[200] grid-cols-2">
            <div className="flex items-center border-r-[1px] border-[#fff] pr-[50px]">
              <h2 className="text-[40px] leading-normal sm:text-[45px] md:text-[60px] lg:text-[80px] font-secondary mb-[20px]">
                {Title}
              </h2>
            </div>
            {Description && (
              <div
                className="flex px-[70px] font-bold text-[30px] leading-normal justify-center flex-col"
                dangerouslySetInnerHTML={{ __html: Description }}
              />
            )}
          </div>
        </div>
      </div>
      {ShowBreadcrumbs && <BannerTextBreadcrumbs color={Theme} page={page} />}
    </section>
  );
}
