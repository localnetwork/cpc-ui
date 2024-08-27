import globalState from "@/lib/store/globalState";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children, pageProps }) {
  const showLazy = globalState((state) => state.showLazy);
  return (
    <>
      <Header pageProps={pageProps} />
      <main className="main-content grow">{children}</main>

      {showLazy && <Footer />}
    </>
  );
}
