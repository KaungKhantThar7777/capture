import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const useScroll = () => {
  const [element, view] = useInView({ threshold: 0.3 });
  const controls = useAnimation();
  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }
  return [element, controls];
};

export const ScrollTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, [pathname]);
  return null;
};
