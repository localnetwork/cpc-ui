import Image from "next/image";
import Link from "next/link";
import helper from "@/lib/helpers/helper";
import newsEntriesData from "@/prebuild/static-data/news-block-articles.json";

export default function News({ block }) {
  const { timeAgo } = helper;

  // Function to extract the first paragraph
  const getFirstParagraph = (description) => {
    if (!description) return "";
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = description;
    const firstParagraph = tempDiv.querySelector("p");
    return firstParagraph ? firstParagraph.textContent : "";
  };

  return (
    <section className="py-[100px] px-[50px] bg-[#F3F4F4] text-[#1e1e1e]">
      <div className="container">
        <div className="flex items-center justify-between">
          <h2 className="font-secondary leading-normal text-[80px] mb-[25px]">
            {block?.Title}
          </h2>
          <div>
            {block?.Description && (
              <p
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

        <div className="mt-[100px]">
          {newsEntriesData.map((item, index) => {
            const firstParagraph = getFirstParagraph(item?.Description);
            return (
              <div
                key={index}
                className="border-t-[1px] border-[#ccc] py-[50px]"
              >
                <div className="flex group flex-wrap mx-[-15px] w-full">
                  <div className="w-full max-w-[calc(100%-409px)] flex flex-col pr-[150px] px-[15px]">
                    <span className="text-[#808080] text-[16px] tracking-wide mb-[10px]">
                      {timeAgo(item?.publishedAt)}
                    </span>
                    <h3 className="font-bold leading-[50px] text-[30px] mb-2 relative ">
                      <span className="bg-[linear-gradient(180deg,transparent_98.5%,#9A0C16_0)] bg-no-repeat bg-[length:0%_100%] group-hover:bg-[length:100%_100%] transition-[background-size] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]">
                        <Link href={item?.route_url}>{item.Title}</Link>
                      </span>
                    </h3>

                    {/* Display the first paragraph */}
                    <p className="mb-4">{firstParagraph}</p>
                  </div>

                  <div className="w-full max-w-[409px] px-[15px]">
                    <Link href={item?.route_url}>
                      <Image
                        src={
                          process.env.NEXT_PUBLIC_TENANT_API + item?.Image?.url
                        }
                        width={409}
                        height={235}
                        alt={item.Title}
                        className="w-[409px] h-[235px] object-cover w-full"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
