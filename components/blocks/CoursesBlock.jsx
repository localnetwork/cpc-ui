import Image from "next/image";
import Link from "next/link";
export default function Courses({ block }) {
  return (
    <section className="py-[30px] md:py-[50px] xl:py-[100px] md:px-[30px] lg:px-[50px]">
      <div className="container">
        <h2 className="font-secondary leading-normal text-[50px] md:text-[60px] lg:text-[80px] text-white mb-[25px]">
          Courses
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] lg:gap-[100px]">
          {block?.Courses.map((item, index) => {
            return (
              <div key={index} className="relative group">
                <div className="relative pb-[110%] overflow-hidden">
                  <Link
                    href={item.slug}
                    className="block absolute top-0 left-0 w-full h-full z-[200]"
                  />
                  <Image
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src={process.env.NEXT_PUBLIC_TENANT_API + item?.Image?.url}
                    width={600}
                    height={400}
                    alt={item.Title}
                  />

                  <span className="absolute group-hover:opacity-100 opacity-0 transition-opacity duration-[0.3s] ease-[cubic-bezier(0.4,0,0.2,1)] z-[1] top-0 left-0 w-full h-full bg-[linear-gradient(0deg,#000,#222_25%,transparent)]" />
                  <span className="absolute group-hover:opacity-0 opacity-100 z-[1] top-0 left-0 w-full h-full bg-[linear-gradient(0deg,#0e0e0e,transparent)]" />
                </div>
                <div className="content absolute p-[15px] md:p-[30px] lg:p-[50px] bottom-0 left-0 w-full z-[100] xl:pr-[100px]">
                  <h3 className="font-secondary leading-[45px] lg:leading-[60px] text-[35px] lg:text-[45px] text-white mb-[25px]">
                    {item.Title}
                  </h3>
                  <Link
                    href={item.slug}
                    className="inline-flex items-center gap-[15px] lg:gap-[20px] pl-[60px] pr-[15px] font-bold relative text-[14px] lg:text-[18px]"
                  >
                    <span className="border absolute left-0 w-[50px] group-hover:w-full transition-all ease-[ease] duration-[300ms] h-[50px] z-[-1] inline-block p-[10px] rounded-full group-hover:bg-[#0c0f40]" />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="left-[10px] absolute w-[30px] h-[30px] text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                    <span className="flex gap-[5px] whitespace-nowrap">
                      Learn more
                      <span className="hidden md:block">about this course</span>
                    </span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
