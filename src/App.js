import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

//auth
import { auth } from "./firebase/firebase.utils";

//Styling
import "./styles/App.css";
//Components
import Header from "./components/header/Header";
//Pages
import HomePage from "./Pages/Home/HomePage";
import Shop from "./Pages/Shop/Shop";
import LoginPage from "./Pages/LoginPage/LoginPage";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    let unsubscribeFromAuth = auth.onAuthStateChanged((user) => setCurrentUser(user));
    console.log(currentUser);
    return () => {
      unsubscribeFromAuth();
    };
  });
  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        {/* <Route path="/" exact>
          <HomePage />
        </Route> */}
        <Route path="/" exact component={HomePage} />
        <Route path="/shop" component={Shop} />
        <Route path="/signin" component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
