import siteConfig from "@/site.config";
import Image from "next/image";
import { InlineShareButtons } from "sharethis-reactjs";
import globalState from "@/lib/store/globalState";
import { useEffect, useState } from "react";
import helper from "@/lib/helpers/helper";
import ArticleGallery from "../partials/Gallery/ArticleGallery";

export default function Article({ page }) {
  const { siteImagePath, siteUrl } = siteConfig;
  const showLazy = globalState((state) => state.showLazy);
  const shareDes = page?.attributes?.Description?.replace(/(<([^>]+)>)/gi, "");
  const [currentUrl, setCurrentUrl] = useState("");

  const { Gallery } = page?.attributes;

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  return (
    <div className="bg-[#F5F4F1]">
      <div className="page-header bg-[#0E0E0E] pb-[20px] min-h-[200px] pt-[150px] pb-[50px]">
        <div className="max-w-[944px] mx-auto px-[15px]">
          <h2 className="text-[50px] font-secondary leading-[60px]">
            {page?.attributes?.Title}
          </h2>
        </div>
      </div>
      <div className="page-content relative">
        <div className="relative">
          <span className="bg-[#0E0E0E] absolute inset-x-0 top-0 h-1/2" />
          <div className="max-w-[944px] mx-auto px-[15px] relative">
            <div className="aspect-video rounded-lg bg-[#ddd] overflow-hidden">
              <Image
                src={siteUrl + page?.attributes?.Image?.url}
                width={1200}
                height={600}
                alt={page?.attributes?.Title}
                className=" object-cover h-full"
                placeholder="blur"
                blurDataURL={`${siteImagePath}${page?.attributes?.Image?.url}&w=10`}
              />
            </div>
          </div>
        </div>
        <div className="max-w-[944px] pb-[50px] mx-auto px-[15px] relative">
          <div className="flex items-center justify-between mt-[20px]">
            <span className=" block text-[14px] text-[#a1a1a1]">
              Date posted: {helper.timeAgo(page?.attributes?.publishedAt)}
            </span>
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
                image: `${siteImagePath}${page?.attributes?.Image?.url}&w=2048`, // (defaults to og:image or twitter:image)
                description: "custom text", // (defaults to og:description or twitter:description)
                title: page?.attributes?.Title, // (defaults to og:title or twitter:title)
                message: shareDes, // (only for email sharing)
                subject: `New Article:${page?.attributes?.Title}`, // (only for email sharing)
              }}
            />
          </div>
          <div
            className="mt-[30px] text-[#808080] text-[18px] mb-[50px]"
            dangerouslySetInnerHTML={{ __html: page?.attributes?.Description }}
          />
        </div>

        {Gallery && <ArticleGallery Gallery={Gallery} />}
      </div>
    </div>
  );
}
