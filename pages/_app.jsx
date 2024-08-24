import "@/styles/globals.css";
import Layout from "@/components/partials/Layout";

import globalState from "@/lib/store/globalState";
import { useEffect } from "react";
import useShowLazy from "@/lib/hooks/useShowLazy";
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

  return (
    <Layout pageProps={pageProps}>
      <Component {...pageProps} />
    </Layout>
  );
}
