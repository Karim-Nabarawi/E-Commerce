import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

//redux
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";

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

function App() {
  const [currentUser, setCurrentUser2] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => dispatch(setCurrentUser(currentUser)), [currentUser]);
  useEffect(() => {
    // check if user is signin or not and if signed in get the user data ()
    let unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      //  setCurrentUser(user);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        //using onSnapshot we can get a snape (copy) of the data from database (if it exist, and it's data)
        userRef.onSnapshot((snapShot) => {
          setCurrentUser2({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        setCurrentUser2(userAuth);
      }
    });

    // return () => {
    //   unsubscribeFromAuth();
    // };
  }, []);

  return (
    <div>
      <Header />
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
