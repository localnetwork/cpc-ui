import { useRouter } from "next/router";
import Link from "next/link";
import ChevronRight from "@/components/icons/ChevronRight";
import helper from "@/lib/helpers/helper";

export default function BannerTextBreadcrumbs({ color, page }) {
  const router = useRouter();
  const { asPath } = router;

  const { colorExtractor } = helper;

  const extractedColor = colorExtractor(color);

  // Split the asPath into an array of paths, filtering out any empty strings
  const pathSegments = asPath.split("/").filter((segment) => segment);
  return (
    <nav
      aria-label="breadcrumb"
      className={`border-y-[1px] border-[#b1863d] mt-[-70px] text-[25px] py-[30px] text-[${extractedColor?.textColor}]`}
    >
      <div className="container">
        <ol className="breadcrumb flex">
          <li className="flex items-center">
            <Link href="/">Home</Link>{" "}
            <span className="mx-[15px] rounded-full p-[5px] flex items-center justify-center w-[25px] h-[25px] bg-[#9A0C16]">
              <ChevronRight color="#fff" />
            </span>
          </li>
          {pathSegments.map((segment, index) => {
            // Build the path up to the current segment
            const pathToSegment = `/${pathSegments
              .slice(0, index + 1)
              .join("/")}`;

            // Capitalize the segment for display
            const segmentName = decodeURIComponent(
              segment.charAt(0).toUpperCase() + segment.slice(1)
            );

            return (
              <li
                key={pathToSegment}
                className={`breadcrumb-item flex items-center ${
                  index === pathSegments.length - 1 ? "active opacity-70" : ""
                }`}
              >
                {index === pathSegments.length - 1 ? (
                  <>{segmentName}</>
                ) : (
                  <>
                    <Link href={pathToSegment}>{segmentName}</Link>
                    <span className="mx-[15px] rounded-full p-[5px] flex items-center justify-center w-[25px] h-[25px] bg-[#9A0C16]">
                      <ChevronRight color="#fff" />
                    </span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
