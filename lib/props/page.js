import Jsona from "jsona";
const dataFormatter = new Jsona();
import PAGEAPI from "../api/pages/request";
import { sortBlocks } from "@/lib/services/globalService";
import {
  iterateBlock,
  iteratePage,
  pagesPath,
  contentEntriesPath,
} from "@/lib/services/propService";

const paths = async () => {
  const pages = await pagesPath();
  const filteredPages = pages?.filter((e) => e?.route_url !== "/") || [];

  console.log("filteredPages", filteredPages);

  const contentTypes = ["project"];

  const contentData = await Promise.all(
    contentTypes.map(async (contentType) => {
      return await contentEntriesPath(contentType);
    })
  );
  const pathsHandler = [...filteredPages, ...contentData.flat()];
  const paths = pathsHandler.map((page) => {
    const segments = page.route_url.split("/").slice(1);
    return {
      params: { id: segments },
    };
  });

  return { paths, fallback: false };
};

const props = async (context) => {
  const id = context?.params?.id || [];

  // Combine segments to form the route
  const segment = id.join("/");

  try {
    const pageHandler = await PAGEAPI.findByRoute(segment);
    const page = pageHandler;
    const blocksHandler =
      page?.attributes?.Blocks?.map((e) => {
        return {
          key: e.componentName,
          id: e?.data?.id,
          data: e?.data || null,
        };
      }) || [];

    const blocks = sortBlocks(blocksHandler);

    // Clean up unwanted properties
    delete page.links;
    delete page.meta;
    delete page.relationshipNames;
    delete page.blockContents;

    return {
      props: {
        page: await iteratePage(page),
        blocks: await iterateBlock(blocks),
      },
    };
  } catch (error) {
    // Fallback for unexpected errors
    return {
      notFound: true,
    };
  }
};

export { paths, props };
