import helper from "@/lib/utils/helper";
import Image from "next/image";
import Link from "next/link";

export default function OurPeople({ block }) {
  const { Groups, Theme } = block;
  const { colorExtractor } = helper;
  const extractedColor = colorExtractor(Theme);
  return (
    <div
      className={`py-[100px] bg-[${extractedColor.color}]`}
      style={{ color: extractedColor.textColor }}
    >
      <div className="container">
        <div className="flex flex-col gap-[100px]">
          {Groups.map((group, index) => (
            <div key={index}>
              <h2 className="text-[50px] font-secondary mb-[50px]">
                {group.Title}
              </h2>
              {group?.Items?.length > 0 && (
                <div className="grid px-[13px] grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-[50px]">
                  {group?.Items?.map((item, index) => (
                    <div key={index} className="relative group p-[10px]">
                      <span class="border-[5px] border-[#9A0C16] absolute top-[-14px] left-[-14px] h-full w-full" />
                      <span
                        className={`border-[5px] border-[${
                          index % 2 ? "#7F821C" : "#1B217A"
                        }] absolute top-[0px] left-[-1px] h-full w-full`}
                      />
                      <Link
                        className="absolute opacity-0 w-full h-full top-0 left-0 z-[100]"
                        href={`/${item?.slug}`}
                      />
                      <div className="relative overflow-hidden pb-[125%]">
                        <span className="absolute opacity-100 transition z-[1] top-0 left-0 w-full h-full bg-[linear-gradient(0deg,#0e0e0e,transparent)]" />
                        <Image
                          src={
                            process.env.NEXT_PUBLIC_TENANT_API +
                            item?.Image?.url
                          }
                          width={700}
                          height={700}
                          className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition"
                        />
                        <div class="person-info translate-y-0 transition flex justify-between items-center p-[15px] z-[20] absolute bottom-0 left-0 w-full">
                          <h2 class="font-bold text-[18px] line-clamp-1">
                            {item?.Title}
                          </h2>
                          <div class="flex items-center">
                            <Link
                              class="border-[2px] border-white inline-block rounded-full p-[5px]"
                              href={`/${item?.slug}`}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-6"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                                ></path>
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
