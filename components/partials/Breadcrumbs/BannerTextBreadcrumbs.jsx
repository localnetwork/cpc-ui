import { useRouter } from "next/router";
import Link from "next/link";
import ChevronRight from "@/components/icons/ChevronRight";
import helper from "@/lib/utils/helper";

export default function BannerTextBreadcrumbs({ color, page }) {
  const router = useRouter();
  const { asPath } = router;

  const { colorExtractor } = helper;

  // Extract color using helper
  const extractedColor = colorExtractor(color);

  // Remove any fragments (#) and query parameters (?) from the path, then split into segments
  const cleanedPath = asPath.split("?")[0].split("#")[0]; // Remove query and fragment
  const pathSegments = cleanedPath.split("/").filter((segment) => segment);

  return (
    <nav
      aria-label="breadcrumb"
      className={`border-y-[1px] border-[#b1863d] mt-[-70px] text-[25px] py-[30px] text-[${extractedColor?.textColor}]`}
    >
      <div className="container">
        <ol className="breadcrumb flex">
          {/* Home Link */}
          <li className="flex items-center">
            <Link href="/">Home</Link>{" "}
            <span className="mx-[15px] rounded-full p-[5px] flex items-center justify-center w-[25px] h-[25px] bg-[#9A0C16]">
              <ChevronRight color="#fff" />
            </span>
          </li>

          {/* Dynamic Path Segments */}
          {pathSegments.map((segment, index) => {
            // Build the path up to the current segment
            const pathToSegment = `/${pathSegments
              .slice(0, index + 1)
              .join("/")}`;

            // Decode and clean segment name for display
            const segmentName =
              decodeURIComponent(segment)
                .replace(/#/g, "") // Remove stray hash symbols
                .replace(/-/g, " ") // Replace all dashes with spaces
                .charAt(0)
                .toUpperCase() +
              decodeURIComponent(segment)
                .replace(/#/g, "")
                .replace(/-/g, " ")
                .slice(1);

            return (
              <li
                key={pathToSegment}
                className={`breadcrumb-item flex capitalize items-center ${
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
