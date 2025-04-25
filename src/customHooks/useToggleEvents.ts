import { useEffect } from "react";

type Arguments = [
  isMoving: boolean,
  toglerInitialX: number,
  toglerWidth: number,
  setToogleTransform: (value: number) => void,
  setIsMoving: (value: boolean) => void
];

const useToogleEvents = (...argumentsList: Arguments) => {
  const [
    isMoving,
    toglerInitialX,
    toglerWidth,
    setToogleTransform,
    setIsMoving,
  ] = argumentsList;

  useEffect(() => {
    const handleGlobalMove = (event: MouseEvent | TouchEvent) => {
      if (isMoving) {
        console.log("Preventing default action");
        event.preventDefault();

        let newTransform = 0;

        if (event instanceof MouseEvent) {
          newTransform = Math.min(
            Math.max(event.clientX - toglerInitialX, 0),
            toglerWidth
          );
        } else if (event instanceof TouchEvent) {
          newTransform = Math.min(
            Math.max(event.touches[0].clientX - toglerInitialX, 0),
            toglerWidth
          );
        }

        setToogleTransform(newTransform);
      }
    };

    const handleGlobalEnd = () => {
      if (isMoving) {
        setIsMoving(false);
      }
    };

    window.addEventListener("mousemove", handleGlobalMove);
    window.addEventListener("mouseup", handleGlobalEnd);
    window.addEventListener("touchmove", handleGlobalMove, { passive: false });
    window.addEventListener("touchend", handleGlobalEnd);

    return () => {
      window.removeEventListener("mousemove", handleGlobalMove);
      window.removeEventListener("mouseup", handleGlobalEnd);
      window.removeEventListener("touchmove", handleGlobalMove);
      window.removeEventListener("touchend", handleGlobalEnd);
    };
  }, [isMoving, toglerInitialX, toglerWidth, setToogleTransform, setIsMoving]);
};

export default useToogleEvents;
