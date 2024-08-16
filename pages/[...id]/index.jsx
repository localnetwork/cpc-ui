import { paths, props } from "@/lib/props/page";
export const getStaticPaths = paths;
export const getStaticProps = props;
import dynamic from "next/dynamic";

const ProjectsPage = dynamic(() =>
  import("../../components/page/ProjectPage").then((module) => module.default)
);

const ParentBlock = dynamic(() =>
  import("../../components/page/ParentBlock").then((module) => module.default)
);

export default function DynamicPage({ page, blocks }) {
  if (page == "404") {
    return (
      <div className="min-h-screen flex items-center justify-center w-full">
        404
      </div>
    );
  } else {
    let ComponentToRender;
    switch (page) {
      case "projects":
        ComponentToRender = ProjectsPage;
        break;
      default:
        ComponentToRender = ParentBlock;
        break;
    }
    return <ComponentToRender page={page} blocks={blocks} />;
  }
}
