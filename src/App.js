import React from "react";
import { Switch, Route } from "react-router-dom";

//Styling
import "./styles/App.css";
//Components
import HomePage from "./Pages/Home/HomePage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        {/* <Route path="/" exact component={HomePage} */}
      </Switch>
    </div>
  );
}

export default App;
