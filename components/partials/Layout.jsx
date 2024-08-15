import Footer from "./Footer";
import Header from "./Header";
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="main-content grow">{children}</main>
      <Footer />
    </>
  );
}
