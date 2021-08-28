import React from "react";

//Styling and Animation
import { CustomButtonContainer } from "./CustomButton.styles";

const CustomButton = ({ children, ...otherProps }) => {
  return <CustomButtonContainer {...otherProps}>{children}</CustomButtonContainer>;
};
export default CustomButton;
