import "@/styles/globals.css";
import Layout from "@/components/partials/Layout";

import globalState from "@/lib/store/globalState";
import { useEffect } from "react";
import useShowLazy from "@/lib/hooks/useShowLazy";
import Meta from "@/components/partials/Seo/Meta";
import siteConfig from "@/site.config";
export default function App({ Component, pageProps }) {
  const mainMenu = globalState((state) => state.mainMenu);
  useEffect(() => {
    globalState.setState({ ready: true });
    if (mainMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mainMenu]);

  useShowLazy();

  const { siteImagePath } = siteConfig;

  const metaImageUrl = `${siteImagePath}${pageProps.page?.attributes?.Metatags?.Image?.url}&w=2048`;

  return (
    <Layout pageProps={pageProps}>
      <Meta
        metaImage={
          pageProps.page?.attributes?.Metatags?.Image ? metaImageUrl : null
        }
        page={pageProps.page}
      />
      <Component {...pageProps} />
    </Layout>
  );
}
