export default function getResponsiveIconSize(index: number = 1): number {
  let iconSize = 23;

  if (window.innerWidth > 767 && window.innerWidth <= 1279) {
    iconSize = 28;
  } else if (window.innerWidth > 1279) {
    iconSize = 30;
  }

  return iconSize * index;
}