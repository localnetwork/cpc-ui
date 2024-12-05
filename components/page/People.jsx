import siteConfig from "@/site.config";
import Image from "next/image";
import { useEffect, useState } from "react";
import { InlineShareButtons } from "sharethis-reactjs";
import faculties from "@/prebuild/static-data/faculty-entries.json";
export default function People({ page }) {
  const { siteUrl } = siteConfig;

  const shareDes = page?.attributes?.Description?.replace(/(<([^>]+)>)/gi, "");
  const [currentUrl, setCurrentUrl] = useState("");

  const { Gallery } = page?.attributes;

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const filteredFaculty = faculties.filter((faculty) => {
    return faculty?.id !== page?.attributes?.id;
  });

  console.log("filteredFaculty", filteredFaculty);

  return (
    <div className="">
      <div className="min-h-[300px] bg-[#0E0E0E]"></div>

      <div className="relative bg-[#F5F4F1] pb-[150px]">
        <div className="container ">
          <div className="flex gap-[50px] flex-wrap">
            <div className="relative mt-[-100px]">
              <div className="border-[5px] border-[#9A0C16] p-[5px]">
                <Image
                  src={siteUrl + page?.attributes?.Image?.formats?.small?.url}
                  width={200}
                  height={300}
                  alt={page?.attributes?.Title}
                  className="h-[270px] object-cover"
                />
              </div>
            </div>
            <div className="text-[#0E0E0E] pt-[50px]">
              <h1 className="text-[50px] mb-[20px] font-bold">
                {page?.attributes?.Title}
              </h1>
              <p className="opacity-70">{page?.attributes?.Position}</p>
              <div className="inline-flex mt-[15px] relative z-[1]">
                <InlineShareButtons
                  config={{
                    alignment: "left", // alignment of buttons (left, center, right)
                    color: "social", // set the color of buttons (social, white)
                    enabled: true, // show/hide buttons (true, false)
                    font_size: 16, // font size for the buttons
                    labels: "cta", // button labels (cta, counts, null)
                    language: "en", // which language to use (see LANGUAGES)
                    networks: [
                      // which networks to include (see SHARING NETWORKS)
                      "facebook",
                      "linkedin",
                      "twitter",
                    ],
                    padding: 12, // padding within buttons (INTEGER)
                    radius: 4, // the corner radius on each button (INTEGER)
                    show_total: false,
                    size: 40, // the size of each button (INTEGER)

                    min_count: 10, // (threshold for total share count to be displayed)
                    url: currentUrl, // (defaults to current url)
                    image: `${siteUrl}${page?.attributes?.Image?.url}&w=2048`, // (defaults to og:image or twitter:image)
                    description: page?.attributes?.Description, // (defaults to og:description or twitter:description)
                    title: page?.attributes?.Title, // (defaults to og:title or twitter:title)
                    message: shareDes, // (only for email sharing)
                    subject: `New Article:${page?.attributes?.Title}`, // (only for email sharing)
                  }}
                />
              </div>
            </div>
          </div>
          <div>
            {page?.attributes?.Description && (
              <div
                className="mt-[50px] text-[#808080] text-[18px] mb-[50px]"
                dangerouslySetInnerHTML={{
                  __html: page?.attributes?.Description,
                }}
              />
            )}
          </div>
          <div>
            <h2>More People</h2>
            {filteredFaculty?.map((item, index) => (
              <div key={index}>{console.log("item", item)}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
