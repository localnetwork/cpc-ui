import dynamic from "next/dynamic";
export const components = {
  Slider: dynamic(() =>
    import("../../components/blocks/Slider").then((module) => module.default)
  ),
  Accordion: dynamic(() =>
    import("../../components/blocks/Accordion").then((module) => module.default)
  ),
  Banner: dynamic(() =>
    import("../../components/blocks/Banner").then((module) => module.default)
  ),
  HeroGridVideo: dynamic(() =>
    import("../../components/blocks/HeroGridVideo").then(
      (module) => module.default
    )
  ),
  HeroGridColumns: dynamic(() =>
    import("../../components/blocks/HeroGridColumns").then(
      (module) => module.default
    )
  ),
  CoursesBlock: dynamic(() =>
    import("../../components/blocks/CoursesBlock").then(
      (module) => module.default
    )
  ),
  NewsBlock: dynamic(() =>
    import("../../components/blocks/NewsBlock").then((module) => module.default)
  ),
  FacultyBlock: dynamic(() =>
    import("../../components/blocks/PeopleBlock").then(
      (module) => module.default
    )
  ),
  AboutSchool: dynamic(() =>
    import("../../components/blocks/AboutSchool").then(
      (module) => module.default
    )
  ),
  PageBannerText: dynamic(() =>
    import("../../components/blocks/PageBannerText").then(
      (module) => module.default
    )
  ),
  PageBlogHeader: dynamic(() =>
    import("../../components/blocks/PageBlogHeader").then(
      (module) => module.default
    )
  ),
  PageNewsListing: dynamic(() =>
    import("../../components/blocks/PageNewsListing").then(
      (module) => module.default
    )
  ),
  ImageWithStats: dynamic(() =>
    import("../../components/blocks/ImageWithStats").then(
      (module) => module.default
    )
  ),
  MediaText: dynamic(() =>
    import("../../components/blocks/MediaText").then((module) => module.default)
  ),
  CardTextsBlock: dynamic(() =>
    import("../../components/blocks/CardTextsBlock").then(
      (module) => module.default
    )
  ),
  Timeline: dynamic(() =>
    import("../../components/blocks/Timeline").then((module) => module.default)
  ),

  Text: dynamic(() =>
    import("../../components/blocks/Text").then((module) => module.default)
  ),
};
