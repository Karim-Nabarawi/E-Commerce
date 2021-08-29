import React from "react";

import { useLocation, useHistory } from "react-router-dom";

import { CollectionPreviewContainer, TitleContainer, PreviewContainer } from "./CollectionPreview.styles";

import CollectionItem from "../collection-item/CollectionItem";

const CollectionPreview = ({ title, items }) => {
  const history = useHistory();
  const location = useLocation();

  return (
    <CollectionPreviewContainer>
      <TitleContainer onClick={() => history.push(`${location.pathname}/${title.toLowerCase()}`)}>
        {title.toUpperCase()}
      </TitleContainer>

      <PreviewContainer>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};
export default CollectionPreview;
