import { useRouter } from "next/router";
import Link from "next/link";

export default function BannerBreadcrumbs() {
  const router = useRouter();
  const { asPath } = router;

  // Split the asPath into an array of paths, filtering out any empty strings
  const pathSegments = asPath.split("/").filter((segment) => segment);
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb flex">
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
              className={`breadcrumb-item ${
                index === pathSegments.length - 1 ? "active" : ""
              }`}
            >
              {index === pathSegments.length - 1 ? (
                <>{segmentName}</>
              ) : (
                <Link href={pathToSegment}>{segmentName}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
