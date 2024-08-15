import { paths, props } from "@/lib/props/page";
import dynamic from "next/dynamic";
export const getStaticPaths = paths;
export const getStaticProps = props;

const ProjectsPage = dynamic(() =>
  import("../../components/page/ProjectPage").then((module) => module.default)
);

const ParentBlock = dynamic(() =>
  import("../../components/page/ParentBlock").then((module) => module.default)
);

export default function DynamicPage({ page, blocks }) {
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
