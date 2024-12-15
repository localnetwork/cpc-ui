import Link from "next/link";
import SocialFb from "../icons/SocialFb";
import SocialInsta from "../icons/SocialInsta";
import SocialLinkedIn from "../icons/SocialLinkedIn";
import SocialTiktok from "../icons/SocialTiktok";
import SocialTwitter from "../icons/SocialTwitter";

export default function FooterSocial({ social_links }) {
  const renderedIcon = (platform) => {
    switch (platform) {
      case "Facebook":
        return <SocialFb />;

      case "Tiktok":
        return <SocialTiktok />;

      case "LinkedIn":
        return <SocialLinkedIn />;
      case "X":
        return <SocialTwitter />;
      case "Instagram":
        return <SocialInsta />;
      default:
        break;
    }
  };
  return (
    <>
      {social_links.map((item, index) => {
        return (
          <Link
            key={index}
            className="hover:mt-[-5px] hover:opacity-80 transition-[all_ease_0.3s] inline-block "
            href={item?.Link || "#"}
            target="_blank"
          >
            {renderedIcon(item.Platform)}
          </Link>
        );
      })}
    </>
  );
}
