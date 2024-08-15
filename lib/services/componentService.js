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
};
