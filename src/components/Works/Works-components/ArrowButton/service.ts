export const handleArrowClick = (
  direction: string,
  highlightIndex: number,
  handleClick: (number: number) => void,
  worksAmount: number
) => {
  switch (direction) {
    case "left":
      if (highlightIndex > 1) {
        handleClick(highlightIndex - 1);
      }
      break;
    case "right":
      if (highlightIndex < worksAmount) {
        handleClick(highlightIndex + 1);
      }
      break;
    default:
      break;
  }
};
