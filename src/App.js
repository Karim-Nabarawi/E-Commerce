import React from "react";
import { Switch, Route } from "react-router-dom";

//Styling
import "./styles/App.css";
//Components
import HomePage from "./Pages/Home/HomePage";
import Shop from "./Pages/Shop/Shop";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        {/* <Route path="/" exact component={HomePage} */}

        <Route path="/shop">
          <Shop />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
