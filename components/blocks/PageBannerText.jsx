import BannerTextBreadcrumbs from "../partials/Breadcrumbs/BannerTextBreadcrumbs";

import helper from "@/lib/utils/helper";
/**
 * Renders a full-width section with a background color, title, and optional breadcrumbs.
 * @param {object} page - Page data from Strapi.
 * @param {object} block - Block data from Strapi.
 * @param {string} block.title - Title to display.
 * @param {string} block.backgroundColor - Background color in any valid CSS color format.
 * @param {boolean} block.showBreadcrumbs - Whether to display breadcrumbs.
 * @param {string} block.description - Optional description to display.
 * @returns {JSX.Element} Component with background color, title, and breadcrumbs.
 */
export default function PageBannerText({ page, block }) {
  const { Title, Color, Description, ShowBreadcrumbs } = block;

  const { colorExtractor } = helper;

  const extractedColor = colorExtractor(Color);
  return (
    <section
      className={`min-h-[500px] flex flex-col bg-[${extractedColor.color}]`}
    >
      <div
        className={`container grow flex items-center justify-center text-[${extractedColor.textColor}]`}
      >
        <h2 className="text-[40px] sm:text-[45px] md:text-[60px] lg:text-[80px] leading-[100%] font-secondary text-center mb-[20px]">
          {Title}
        </h2>
        {Description && <p className="text-center">{Description}</p>}
      </div>
      {ShowBreadcrumbs && <BannerTextBreadcrumbs color={Color} page={page} />}
    </section>
  );
}
