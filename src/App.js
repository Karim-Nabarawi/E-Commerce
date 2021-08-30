import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//redux
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selector";

//auth
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

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
  // const [User, setUser] = useState(null);
  // const dispatch = useDispatch();

  const currentUser = useSelector(selectCurrentUser);

  // useEffect(() => dispatch(setCurrentUser(User)), [User, dispatch]);
  // useEffect(() => {
  //   // check if user is signin or not and if signed in get the user data ()
  //   let unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
  //     //  setCurrentUser(user);
  //     if (userAuth) {
  //       const userRef = await createUserProfileDocument(userAuth);

  //       //using onSnapshot we can get a snape (copy) of the data from database (if it exist, and it's data)
  //       userRef.onSnapshot((snapShot) => {
  //         setUser({
  //           currentUser: {
  //             id: snapShot.id,
  //             ...snapShot.data(),
  //           },
  //         });
  //       });
  //     } else {
  //       setUser(userAuth);
  //     }
  //   });

  //   return () => {
  //     unsubscribeFromAuth();
  //   };
  // }, []);

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
