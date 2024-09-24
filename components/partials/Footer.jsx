import Image from "next/image";
import Link from "next/link";
import siteInfoData from "@/prebuild/static-data/site-info";
import FooterSocial from "./FooterSocial";
import quickLinksData from "@/prebuild/static-data/quick-links-data";
export default function Footer() {
  const { Address, Email, Phone, social_links } = siteInfoData;

  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-black py-[100px] text-[#808080] border-[#242424] border-t-[1px]">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-[50px]">
          {quickLinksData?.items?.data && (
            <div className="">
              <h2 className="text-[#f3f4f4] text-[22px] font-bold">
                Quick Links
              </h2>
              <div className="mt-[30px]">
                {quickLinksData?.items?.data.map((item, index) => {
                  return (
                    <div key={index} className="mb-[15px]">
                      <Link href={item?.attributes?.url}>
                        {item?.attributes?.title}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <div>
            <h2 className="text-[#f3f4f4] text-[22px] font-bold mb-[30px]">
              Contact Details
            </h2>

            <div className="flex items-center mb-[15px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="min-w-[24px] min-h-[24px] w-[24px] mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              {Address}
            </div>

            <div className="flex items-center mb-[15px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="min-w-[24px] min-h-[24px] w-[24px] mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
                />
              </svg>
              {Phone}
            </div>

            <div className="flex items-center mb-[15px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="min-w-[24px] min-h-[24px] w-[24px] mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"
                />
              </svg>
              {Email}
            </div>

            <h2 className="text-[#f3f4f4] text-[22px] font-bold mt-[50px] mb-[30px]">
              Get In Touch
            </h2>
            <div className="flex flex-wrap gap-[15px]">
              <FooterSocial social_links={social_links} />
            </div>
          </div>
          <div className="col-span-3 lg:col-span-1">
            <h2 className="text-[#f3f4f4] text-[22px] font-bold mb-[30px]">
              Location
            </h2>
            <div className="bg-[#161616]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.9875102641854!2d123.95840707512374!3d10.262589468461082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a99af5762be06f%3A0xd4bee3697d587b49!2sCordova%20Public%20College!5e0!3m2!1sen!2sph!4v1723565062077!5m2!1sen!2sph"
                width="600"
                height="250"
                className="w-full"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center mt-[100px] justify-between">
          <p>Copyright &copy; {currentYear} Cordova Public College.</p>
          <p className="opacity-50">
            <a href="https://dio-ddev.vercel.app/" target="_blank">
              Web Develop By:{" "}
              <span className="underline ">Diome Nike Potot</span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
