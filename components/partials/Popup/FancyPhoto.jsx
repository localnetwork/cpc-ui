import { useEffect, useRef } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
export default function FancyPhoto({ children, ...props }) {
  Fancybox.bind('[data-fancybox="gallery"]', {
    dragToClose: false,

    Toolbar: {
      display: {
        right: ["close", "thumbs", "fullscreen"],
        middle: [],
        left: [],
      },
    },

    Images: {
      zoom: false,
    },

    Thumbs: {
      type: "classic",
    },
  });

  return <>{children}</>;
}
