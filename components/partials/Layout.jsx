import Footer from "./Footer";
import Header from "./Header";
export default function Layout({ children }) {
  return (
    <div className="layout flex flex-col min-h-[200vh]">
      <Header />
      <main className="main-content grow">{children}</main>
      <Footer />
    </div>
  );
}
