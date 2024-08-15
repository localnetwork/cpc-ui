import "@/styles/globals.css";
import Layout from "@/components/partials/Layout";

import useShowLazy from "@/lib/hooks/useShowLazy";
import globalState from "@/lib/store/globalState";
export default function App({ Component, pageProps }) {
  const showLazy = globalState((state) => state.showLazy);
  useShowLazy();
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
