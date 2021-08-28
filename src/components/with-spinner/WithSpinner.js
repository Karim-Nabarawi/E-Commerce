import React from "react";

//Styling and Animation
import { SpinnerOverlay, SpinnerContainer } from "./WithSpinner.styles";

const WithSpinner =
  (WrappedComponent) =>
  ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
export default WithSpinner;
