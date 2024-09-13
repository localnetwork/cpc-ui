import Head from "next/head";
import { useEffect, useState } from "react";
export default function Meta({ metaImage, page }) {
  const [hostUrl, setHostUrl] = useState("");
  const [currentUrl, setCurrentUrl] = useState("");

  let metaImg = {
    url: metaImage || "/images/logo.png",
  };

  let Title = page?.attributes?.Metatags?.Title || page?.attributes?.Title;
  const { Description } = page?.attributes?.Metatags || "";

  const findTitle = () => {
    return Title;
  };

  /**
   * Returns the URL of the meta image, if one is present on the page.
   * Otherwise, returns null.
   * @returns {string|null}
   */
  const findImage = () => {
    return `${hostUrl}${metaImg?.url}`;
  };

  useEffect(() => {
    setHostUrl(window.location.origin);
    setCurrentUrl(window.location.href);
    findImage();
  }, []);

  return (
    <Head>
      <title>{findTitle()}</title>
      <meta name="og:title" content={findTitle()} />
      <meta name="description" content={Description} />
      <meta name="og:description" content={Description} />

      <meta
        property="article:published_time"
        content={page?.attributes?.createdAt}
      />
      <meta
        property="article:modified_time"
        content={page?.attributes?.publishedAt}
      />
      {hostUrl && (
        <>
          <meta name="og:image" content={findImage()} />
          <meta name="twitter:image" content={findImage()} />
        </>
      )}

      {currentUrl && (
        <>
          <meta property="og:url" content={currentUrl} />
          <link rel="canonical" href={currentUrl} />
        </>
      )}
    </Head>
  );
}
