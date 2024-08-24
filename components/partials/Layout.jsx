import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children, pageProps }) {
  return (
    <>
      <Header pageProps={pageProps} />
      <main className="main-content grow">{children}</main>
      <Footer />
    </>
  );
}
