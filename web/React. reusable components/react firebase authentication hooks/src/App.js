import React, { useState, useEffect } from "react";

import fire from "./servies/firebase";
import Login from "./components/Login/Login.js";
import Home from "./components/dashboard/Home.js";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  });

  console.log(user);

  return <div className="App">{user ? <Home /> : <Login />}</div>;
};

export default App;
