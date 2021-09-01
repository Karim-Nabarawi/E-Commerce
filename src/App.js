import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//redux
import { useDispatch, useSelector } from "react-redux";
import { checkUserSession } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selector";

//Styling
import "./styles/App.css";
//Components
import Header from "./components/header/Header";
//Pages
import HomePage from "./Pages/Home/HomePage";
import Shop from "./Pages/Shop/Shop";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Checkout from "./Pages/checkout/Checkout";

function App() {
  const dispatch = useDispatch();

  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => dispatch(checkUserSession()), [dispatch]);

  return (
    <div>
      <Header />
      <Switch>
        {/* <Route path="/" exact>
          <HomePage />
        </Route> */}
        <Route path="/" exact component={HomePage} />
        <Route path="/shop" component={Shop} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/signin" render={() => (currentUser ? <Redirect to="/" /> : <LoginPage />)} />
      </Switch>
    </div>
  );
}

export default App;
