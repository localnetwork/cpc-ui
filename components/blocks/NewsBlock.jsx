import Image from "next/image";
import Link from "next/link";
import helper from "@/lib/utils/helper";
import newsEntriesData from "@/prebuild/static-data/news-block-articles.json";
import ChevronRight from "../icons/ChevronRight";
import { useCallback, useEffect, useState } from "react";

export default function News({ block }) {
  const { timeAgo } = helper;
  const [doc, setDoc] = useState(null);

  // Function to extract the first paragraph
  const getFirstParagraph = useCallback(
    (description) => {
      if (!description);
      if (doc) {
        const tempDiv = doc.createElement("div");
        tempDiv.innerHTML = description;
        const firstParagraph = tempDiv.querySelector("p");
        // return "hello World";
        return firstParagraph ? firstParagraph.textContent : "";
      }
    },
    [doc]
  );

  useEffect(() => {
    setDoc(document);
  }, [doc]);

  return (
    <section className="py-[30px] md:py-[50px] lg:py-[100px] md:px-[30px] lg:px-[50px] bg-[#F3F4F4] text-[#1e1e1e]">
      <div className="container">
        <div className="flex mb-[30px] md:mb-0 flex-col gap-x-[30px] gap-y-[10px] md:flex-row md:items-center justify-between">
          <h2 className="font-secondary leading-normal text-[50px] md:text-[60px] lg:text-[80px] md:mb-[25px]">
            {block?.Title}
          </h2>
          <div>
            {block?.Description && (
              <div
                className="max-w-[500px]"
                dangerouslySetInnerHTML={{ __html: block?.Description }}
              />
            )}
            <Link
              href="/news"
              className="mt-5 inline-block font-bold border-b-[2px] border-[#0c0f40] hover:opacity-50"
            >
              View All News
            </Link>
          </div>
        </div>

        <div className="mt-[50px] lg:mt-[100px] gap-y-[15px] flex flex-wrap mx-[-15px]">
          <div className="px-[15px] w-full md:max-w-[50%]">
            <div className="bg-[#E3E5E5] flex flex-col h-full">
              <Link href={newsEntriesData?.[0]?.route_url || "#"}>
                {newsEntriesData?.[0]?.Image?.url && (
                  <Image
                    src={
                      process.env.NEXT_PUBLIC_TENANT_API +
                      newsEntriesData?.[0]?.Image?.url
                    }
                    width={409}
                    height={235}
                    alt={newsEntriesData?.[0]?.Title}
                    className="h-[415px] object-cover w-full"
                  />
                )}
              </Link>
              <div className="p-[30px] flex flex-col grow">
                <span className="text-[#808080] text-[16px] tracking-wide mb-[10px]">
                  {timeAgo(newsEntriesData?.[0]?.createdAt)}
                </span>
                <h3 className="font-bold leading-[35px] lg:leading-[50px] text-[25px] lg:text-[30px] mb-2 relative ">
                  <span className="bg-[linear-gradient(180deg,transparent_98.5%,#9A0C16_0)] bg-no-repeat bg-[length:0%_100%] group-hover:bg-[length:100%_100%] transition-[background-size] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    <Link href={newsEntriesData?.[0]?.route_url || "#"}>
                      {newsEntriesData?.[0]?.Title}
                    </Link>
                  </span>
                </h3>
                {newsEntriesData?.[0]?.Description && (
                  <>
                    {getFirstParagraph(
                      newsEntriesData?.[0]?.Description || "<p>Hello World</p>"
                    )}
                  </>
                )}

                <div className="pt-[30px] mt-auto">
                  <Link
                    className="inline-flex items-center gap-[15px] font-bold"
                    href={newsEntriesData?.[0]?.route_url || "#"}
                  >
                    <span className="bg-[#9A0C16] rounded-full flex items-center justify-center w-[50px] h-[50px]">
                      <ChevronRight color="#fff" width={30} height={30} />
                    </span>
                    Read Article
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="px-[15px] flex flex-col-reverse justify-between gap-[15px] w-full md:max-w-[50%]">
            {newsEntriesData.map((item, index) => {
              let firstParagraph;

              if (item?.Description) {
                firstParagraph = getFirstParagraph(item?.Description);
              }
              if (index > 0) {
                return (
                  <div className="bg-[#E3E5E5] grow" key={index}>
                    <Link href={item?.route_url || "#"}>
                      {item?.Image?.url && (
                        <Image
                          src={
                            process.env.NEXT_PUBLIC_TENANT_API +
                            item?.Image?.url
                          }
                          width={409}
                          height={235}
                          alt={item.Title}
                          className="h-[250px] object-cover w-full"
                        />
                      )}
                    </Link>
                    <div className="p-[20px]">
                      {item?.publishedAt && (
                        <span className="text-[#808080] text-[14px] tracking-wide mb-[10px]">
                          {timeAgo(item?.publishedAt)}
                        </span>
                      )}

                      <h3 className="font-bold leading-normal lg:leading-[32px] text-[25px] md:text-[23px] mb-2 relative ">
                        <span className="bg-[linear-gradient(180deg,transparent_98.5%,#9A0C16_0)] bg-no-repeat bg-[length:0%_100%] group-hover:bg-[length:100%_100%] transition-[background-size] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]">
                          <Link href={item?.route_url || "#"}>
                            {item?.Title}
                          </Link>
                        </span>
                      </h3>

                      <div className="mt-[30px] flex gap-[10px] relative">
                        <Link
                          className="inline-flex text-[14px] items-center gap-[15px] font-bold"
                          href={item?.route_url || "#"}
                        >
                          <span className="bg-[#9A0C16] p-[8px] rounded-full flex items-center justify-center w-[35px] h-[35px]">
                            <ChevronRight color="#fff" width={15} height={15} />
                          </span>
                          Read Article
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
