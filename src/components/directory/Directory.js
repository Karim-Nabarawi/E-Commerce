import React from "react";

import { useSelector } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selector";

import "./directory.scss";

//Components
import MenuItem from "../menu-item/MenuItem";

const Directory = () => {
  const sections = useSelector(selectDirectorySections);

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...data }) => (
        <MenuItem key={id} {...data} />
      ))}
    </div>
  );
};
export default Directory;
