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

const CoursePage = dynamic(() =>
  import("../../components/page/CoursePage").then((module) => module.default)
);

const Article = dynamic(() =>
  import("../../components/page/Article").then((module) => module.default)
);

const People = dynamic(() =>
  import("@/components/page/People").then((module) => module.default)
);

export default function DynamicPage({ page, blocks }) {
  let ComponentToRender;
  switch (page?.type) {
    case "projects":
      ComponentToRender = ProjectsPage;
      break;
    case "course":
      ComponentToRender = CoursePage;
      break;
    case "article":
      ComponentToRender = Article;
      break;
    case "faculty":
      ComponentToRender = People;
      break;
    default:
      ComponentToRender = ParentBlock;
      break;
  }
  return <ComponentToRender page={page} blocks={blocks} />;
}
