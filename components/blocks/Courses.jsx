import Image from "next/image";
import Link from "next/link";
export default function Courses() {
  const staticData = [
    {
      title: "Bachelor of Science in Information Technology",
      slug: "/courses/bsit",
      image: "/courses/hero1.jpg",
    },
    {
      title: "Bachelor of Science in Hospitality Management",
      slug: "/courses/bshm",
      image: "/courses/hero2.jpg",
    },
    {
      title: "Bachelor of Secondary Education",
      slug: "/courses/bsed",
      image: "/courses/hero3.jpg",
    },
    {
      title: "Bachelor in Elementary Education",
      slug: "/courses/beed",
      image: "/courses/hero4.jpg",
    },
  ];
  return (
    <section className="py-[100px] px-[50px]">
      <div className="container">
        <h2 className="font-secondary leading-normal text-[80px] text-white mb-[25px]">
          Courses
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[100px]">
          {staticData.map((item, index) => (
            <div key={index} className="relative group">
              <div className="relative min-h-[600px]">
                <Image
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src={item.image}
                  width={600}
                  height={400}
                  alt="Sample TExt"
                />

                <span className="absolute group-hover:opacity-100 opacity-0 transition-opacity duration-[0.3s] ease-[cubic-bezier(0.4,0,0.2,1)] z-[1] top-0 left-0 w-full h-full bg-[linear-gradient(0deg,#000,#222_25%,transparent)]" />
                <span className="absolute group-hover:opacity-0 opacity-100 z-[1] top-0 left-0 w-full h-full bg-[linear-gradient(0deg,#0e0e0e,transparent)]" />
              </div>
              <div className="content absolute p-[50px] bottom-0 left-0 w-full z-[100] pr-[100px]">
                <h3 className="font-secondary leading-[60px] text-[45px] text-white mb-[25px]">
                  {item.title}
                </h3>
                <Link
                  href={item.slug}
                  className="inline-flex items-center gap-[20px] font-bold "
                >
                  <span className="border border-[1px] inline-block p-[10px] rounded-full group-hover:bg-[#1b1b1c]">
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
                  </span>
                  Learn more about this course
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
