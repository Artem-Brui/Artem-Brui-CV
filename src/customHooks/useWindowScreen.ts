import { useEffect, useState } from "react";

type Sizes = {
  windowWidth: number;
  windowHeigth: number;
};

const useWindowWidth = (): Sizes => {
  const [sizes, setSizes] = useState({
    windowWidth: window.innerWidth,
    windowHeigth: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSizes({
        windowWidth: window.innerWidth,
        windowHeigth: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return sizes;
};

export default useWindowWidth;
