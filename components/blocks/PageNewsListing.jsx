import AllnewsEntriesData from "@/prebuild/static-data/all-news";
import siteConfig from "@/site.config";
import Image from "next/image";
import Link from "next/link";
export default function Block({ block }) {
  return (
    <section className="py-10 bg-[#F5F4F1] text-[#13100b]">
      <div className="container">
        <div className="mt-[50px] grid grid-cols-1 gap-5 gap-y-10 md:grid-cols-2 md:gap-y-20 xl:grid-cols-3">
          {AllnewsEntriesData?.length > 3 &&
            AllnewsEntriesData.map((item, index) => {
              if (index > 3) {
                return (
                  <div className="group space-y-4" key={index}>
                    <Link
                      className="relative block aspect-landscape w-full overflow-hidden
            rounded-2xl bg-primary-1"
                      href={item?.route_url}
                    >
                      <Image
                        src={siteConfig?.siteUrl + item.Image.url}
                        width={500}
                        height={500}
                        alt={item?.Title}
                        className="absolute h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
                      />
                    </Link>
                    <Link href={item.route_url} className="inline-block mt-2">
                      <h2 className="font-bold text-[20px] leading-tight">
                        {item?.Title}
                      </h2>
                    </Link>

                    <div
                      className="line-clamp-2 opacity-60 text-[15px] leading-normal"
                      dangerouslySetInnerHTML={{ __html: item?.Description }}
                    />
                  </div>
                );
              }
            })}
        </div>
      </div>
    </section>
  );
}
