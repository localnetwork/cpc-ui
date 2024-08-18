import Image from "next/image";
import Link from "next/link";
// import newsEntriesData from "@/lib/prebuildScripts/static/news-block-articles.json";
import newsEntriesData from "@/prebuild/static-data/news-block-articles.json";
export default function News({ block }) {
  const staticData = [
    {
      title: "Cordova Public College I.T Days",
      date: "October 12, 2021",
      image: "/banners/Banner1.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "This is fill in text.",
      date: "October 12, 2021",
      image: "/banners/Banner1.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      date: "October 12, 2021",
      image: "/banners/Banner1.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      date: "October 12, 2021",
      image: "/banners/Banner1.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];
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
            return (
              <div
                key={index}
                className="border-t-[3px] border-[#ccc] py-[50px]"
              >
                <div className="flex flex-wrap mx-[-15px] w-full">
                  <div className="w-full max-w-[30%] flex flex-col px-[15px]">
                    <h3 className="font-bold text-[24px] mb-2">{item.Title}</h3>
                    <span className="text-[#939393] text-[16px] font-bold">
                      {item.date}
                    </span>
                    <div className="mt-[50px] font-bold ">
                      <Link
                        className="inline-flex items-center text-[20px] gap-[20px]"
                        href={item?.route_url}
                      >
                        <span className="border border-[2px] border-[#1e1e1e] inline-block p-[10px] rounded-full group-hover:bg-[#1b1b1c]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="#1e1e1e"
                            className="w-[25px] h-[25px] text-white"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                            />
                          </svg>
                        </span>
                        Read More
                      </Link>
                    </div>
                  </div>

                  <div
                    className="w-full max-w-[45%] px-[15px]"
                    dangerouslySetInnerHTML={{
                      __html:
                        item.Description.slice(0, 100) +
                        (item.Description.length > 100 ? "..." : ""),
                    }}
                  />
                  <div className="w-full max-w-[25%] px-[15px]">
                    <Image
                      src={
                        process.env.NEXT_PUBLIC_TENANT_API + item?.Image?.url
                      }
                      width={600}
                      height={400}
                      alt={item.Title}
                      className="object-cover w-full"
                    />
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
