import Image from "next/image";
import Link from "next/link";
export default function Courses({ block }) {
  return (
    <section className="py-[30px] md:py-[50px] lg:py-[100px] px-[15px] md:px-[30px] lg:px-[50px]">
      <div className="container">
        <h2 className="font-secondary leading-normal text-[80px] text-white mb-[25px]">
          Courses
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] lg:gap-[100px]">
          {block?.Courses.map((item, index) => {
            return (
              <div key={index} className="relative group">
                <div className="relative min-h-[600px] overflow-hidden">
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
                <div className="content absolute p-[50px] bottom-0 left-0 w-full z-[100] pr-[100px]">
                  <h3 className="font-secondary leading-[60px] text-[45px] text-white mb-[25px]">
                    {item.Title}
                  </h3>
                  <Link
                    href={item.slug}
                    className="inline-flex items-center gap-[20px] font-bold relative"
                  >
                    <span className="border absolute left-[-10px] w-[50px] group-hover:w-[calc(100%+30px)] transition-all ease-[ease] duration-[300ms] h-[50px] z-[-1] border-[1px] inline-block p-[10px] rounded-full group-hover:bg-[#0c0f40]" />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-[30px] h-[30px] text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                    Learn more about this course
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
