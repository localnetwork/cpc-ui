import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import siteInfoData from "@/prebuild/static-data/site-info";
import SchemaArticle from "./SchemaArticle";
export default function Meta({ metaImage, page }) {
  const router = useRouter();

  const [currentUrl, setCurrentUrl] = useState("");

  let metaImg = {
    url: metaImage
      ? process.env.NEXT_PUBLIC_FRONTEND_URL + metaImage
      : process.env.NEXT_PUBLIC_TENANT_API +
        siteInfoData?.image?.data?.attributes?.formats?.large?.url,
  };
  let Title = page?.attributes?.Metatags?.Title || page?.attributes?.Title;
  const { Description } = page?.attributes?.Metatags || "";

  const findTitle = () => {
    if (page) {
      return page?.route_url == "/home"
        ? Title
        : Title + " - Cordova Public College";
    } else if (router.asPath.startsWith("/preview")) {
      return "Page Preview";
    } else {
      return "404 - Page Not Found";
    }
  };

  /**
   * Returns the URL of the meta image, if one is present on the page.
   * Otherwise, returns null.
   * @returns {string|null}
   */
  const findImage = () => {
    return `${metaImg?.url}`;
  };

  useEffect(() => {
    setCurrentUrl(window.location.href);
    findImage();
  }, []);

  return (
    <Head>
      <title>{findTitle()}</title>
      <meta name="og:title" content={findTitle()} />
      <meta name="description" content={Description} />
      <meta name="og:description" content={Description} />
      <link rel="icon" href="/favicon.png" />

      <meta
        property="article:published_time"
        content={page?.attributes?.createdAt}
      />
      <meta
        property="article:modified_time"
        content={page?.attributes?.publishedAt}
      />
      <meta name="og:image" content={findImage()} />
      <meta name="twitter:image" content={findImage()} />

      {currentUrl && (
        <>
          <meta property="og:url" content={currentUrl} />
          <link rel="canonical" href={currentUrl} />
        </>
      )}

      {page?.type == "article" && <SchemaArticle page={page} />}

      <style>
        {`
        img {
          max-width: 100% !important; 
        }
        .object-cover {
          object-fit: cover;
        }
        .h-full {
          height: 100%;
        }
        `}
      </style>
    </Head>
  );
}
