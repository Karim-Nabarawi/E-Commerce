import React from "react";

//Styling
import { HomePageContainer } from "./homepage.styles";

//Components
import Directory from "../../components/directory/Directory";

const HomePage = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};
export default HomePage;
