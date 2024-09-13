import globalState from "@/lib/store/globalState";
import Footer from "./Footer";
import Header from "./Header";
import Image from "next/image";
import siteConfig from "@/site.config";
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
    </>
  );
}
