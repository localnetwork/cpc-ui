import globalState from "@/lib/store/globalState";
import Footer from "./Footer";
import Header from "./Header";
import Image from "next/image";
import siteConfig from "@/site.config";
import dynamic from "next/dynamic";
import ChatAssistant from "./Assistant/ChatAssistant";
const NextTopLoader = dynamic(() =>
  import("nextjs-toploader").then((module) => module.default)
);
const BackTop = dynamic(() =>
  import("./BackTop").then((module) => module.default)
);
export default function Layout({ children, pageProps }) {
  const showLazy = globalState((state) => state.showLazy);

  return (
    <>
      {(pageProps?.page?.attributes?.Metatags?.Title ||
        pageProps?.page?.attributes?.Title) && (
        <h1 className="hidden sr-only" hidden>
          {pageProps?.page?.attributes?.Metatags?.Title ||
            pageProps?.page?.attributes?.Title}
        </h1>
      )}

      <Header pageProps={pageProps} />
      <main className="main-content grow">{children}</main>
      {showLazy && <Footer />}

      {showLazy && <BackTop />}

      {showLazy && (
        <>
          <NextTopLoader
            color="#9A0C16"
            initialPosition={0.08}
            crawlSpeed={100}
            height={3}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={100}
            shadow="0 0 10px #9A0C16,0 0 5px #9A0C16"
            template='<div class="bar bg-primary" role="bar"><div class="peg"></div></div>'
            zIndex={1600}
            showAtBottom={false}
          />

          <ChatAssistant />
        </>
      )}
    </>
  );
}
