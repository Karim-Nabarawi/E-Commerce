import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

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
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => console.log(currentUser), [currentUser]);
  useEffect(() => {
    // check if user is signin or not and if signed in get the user data ()
    let unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      //  setCurrentUser(user);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        //using onSnapshot we can get a snape (copy) of the data from database (if it exist, and it's data)
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });

    // return () => {
    //   unsubscribeFromAuth();
    // };
  }, []);
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
