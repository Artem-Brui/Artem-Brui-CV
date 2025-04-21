import useLanguage from "@customHooks/useLanguage";
import cl from "./PreviewList.module.scss";
import React from "react";


type Props = {
  highlightIndex: number;
}

const PreviewList: React.FC<Props> = ({ highlightIndex }) => {
  const { content } = useLanguage();

  const worksList = [...content.WorksSection.works];

  return (
    <ul className={cl.preview_list}>
      {worksList.map((_item, index) => {
        const isHighlighted = index === highlightIndex - 1;
        const itemSize = isHighlighted ? 17 : 7;

        return (
          <div
            key={index}
            style={{
              width: `${itemSize}px`,
              height: `${itemSize}px`,
            }}
            className={cl.preview_item}
          ></div>
        );
      })}
    </ul>
  );
};

export default PreviewList;
