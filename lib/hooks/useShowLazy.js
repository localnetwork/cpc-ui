import { useEffect, useState } from "react";
import globalState from "../store/globalState";
const useShowLazy = () => {
  // const [showLazy, setShowLazy] = useState(false);
  useEffect(() => {
    const handleInteraction = () => {
      // setShowLazy(true);
      globalState.setState({
        showLazy: true,
      });
    };

    const removeInteractionListeners = () => {
      document.removeEventListener("scroll", handleInteraction, {
        passive: true,
        once: true,
      });
      document.removeEventListener("click", handleInteraction, {
        passive: true,
        once: true,
      });
      document.removeEventListener("mousemove", handleInteraction, {
        passive: true,
        once: true,
      });
      document.removeEventListener("touchstart", handleInteraction, {
        passive: true,
        once: true,
      });

      clearTimeout();
    };

    document.addEventListener("scroll", handleInteraction, {
      passive: true,
      once: true,
    });
    document.addEventListener("click", handleInteraction, {
      passive: true,
      once: true,
    });
    document.addEventListener("mousemove", handleInteraction, {
      passive: true,
      once: true,
    });
    document.addEventListener("touchstart", handleInteraction, {
      passive: true,
      once: true,
    });

    setTimeout(() => {
      handleInteraction();
    }, 7000);

    return removeInteractionListeners;
  });
};

export default useShowLazy;
