import BaseApi from "@/lib/api/_base.api";
import PAGEAPI from "@/lib/api/pages/request";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProjectsPage = dynamic(() =>
  import("../../components/page/ProjectPage").then((module) => module.default)
);

const ParentBlock = dynamic(() =>
  import("../../components/page/ParentBlock").then((module) => module.default)
);

const CoursePage = dynamic(() =>
  import("../../components/page/CoursePage").then((module) => module.default)
);

const Article = dynamic(() =>
  import("../../components/page/Article").then((module) => module.default)
);
const People = dynamic(() =>
  import("@/components/page/People").then((module) => module.default)
);

export default function DynamicPage() {
  const router = useRouter();
  const [page, setPage] = useState(null);
  const [blocks, setBlocks] = useState(null);
  const [error, setError] = useState(false);
  const [currentRoute, setCurrentRoute] = useState(null);

  const modifiedBlocks = page?.data?.attributes?.Blocks?.map((block) => ({
    key: block.componentName,
    data: block.data,
  }));
  PAGEAPI.getFindRouteSWR(`${router?.query?.route}`, "", {
    onSuccess: (data) => {
      setPage(data);
    },
    onError: (error) => {
      setError(true);
    },
  });

  const Renderer = ({ page, blocks }) => {
    switch (page?.data?.type) {
      case "projects":
        return <ProjectsPage page={page.data} blocks={blocks} />;
        break;
      case "course":
        return <CoursePage page={page.data} blocks={blocks} />;
        break;
      case "faculty":
        ComponentToRender = People;
      case "article":
        return <Article page={page.data} blocks={blocks} />;
      default:
        return <ParentBlock page={page.data} blocks={modifiedBlocks} />;
        break;
    }
  };

  return (
    <>
      {page ? (
        <Renderer page={page} blocks={blocks} />
      ) : (
        <>
          {error ? (
            // <NotFound />
            <>Not Found</>
          ) : (
            <div className="w-full text-center py-[150px] md:py-[200px]">
              Loading...
            </div>
          )}
        </>
      )}
    </>
  );
}
