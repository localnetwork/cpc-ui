import AllnewsEntriesData from "@/prebuild/static-data/all-news";
import siteConfig from "@/site.config";
import Image from "next/image";
import Link from "next/link";
export default function Block({ block }) {
  const { Title } = block;
  return (
    <section className="min-h-[60vh] bg-black pt-[150px] pb-[100px]">
      <div className="container">
        {Title && (
          <h2 className="font-secondary text-[80px] leading-normal mb-[50px]">
            {Title}
          </h2>
        )}
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3 group relative flex aspect-square items-end overflow-hidden rounded-2xl md:aspect-video">
            <Link
              href={AllnewsEntriesData?.[0]?.route_url || "#"}
              className="h-full w-full flex items-end"
            >
              <Image
                src={siteConfig.siteUrl + AllnewsEntriesData[0]?.Image?.url}
                width={700}
                height={700}
                className="absolute inset-0 h-full w-full object-cover duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black opacity-80" />

              <div className="relative max-w-xl p-6">
                <h3 className="font-bold mb-2 text-[30px] leading-[40px]">
                  {AllnewsEntriesData[0]?.Title}
                </h3>
                <div
                  className="line-clamp-3 opacity-60"
                  dangerouslySetInnerHTML={{
                    __html: AllnewsEntriesData[0]?.Description,
                  }}
                />
              </div>
            </Link>
          </div>
          <div className="space-y-5 md:space-y-10 lg:col-span-2">
            {AllnewsEntriesData?.length > 0 &&
              AllnewsEntriesData.slice(1, 4).map((item, index) => (
                <div
                  className="grid group grid-cols-3 items-center gap-5 md:gap-10"
                  key={index}
                >
                  <div className="relative flex items-center">
                    <Link
                      className="relative aspect-landscape flex-grow overflow-hidden rounded-xl bg-primary-1"
                      href={item?.route_url}
                    >
                      <Image
                        src={siteConfig.siteUrl + item?.Image?.url}
                        width={500}
                        height={500}
                        alt={item?.Title}
                        className="absolute duration-500 group-hover:scale-105 inset-0 h-full w-full object-cover "
                      />
                    </Link>
                  </div>
                  <div className="col-span-2">
                    <Link
                      href={item?.route_url}
                      className="mb-2 !line-clamp-2 block text-balance text-[20px] font-bold leading-tight"
                    >
                      {item?.Title}
                    </Link>

                    <div
                      className="line-clamp-2 text-[15px] leading-normal opacity-60"
                      dangerouslySetInnerHTML={{ __html: item?.Description }}
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
