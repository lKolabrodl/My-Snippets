import React, { useState } from "react";
import fire from "../../servies/firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = () => {
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((u) => {
        console.log("Successfully Signed Up");
      })
      .catch((err) => {
        console.log("Error: " + err.toString());
      });
  };

  const login = () => {
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((u) => {
        console.log("Successfully Logged In");
      })
      .catch((err) => {
        console.log("Error: " + err.toString());
      });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <div>Email</div>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email.."
          type="text"
        />
      </div>
      <div>
        <div>Password</div>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password.."
          type="text"
        />
      </div>
      <button style={{ margin: "10px" }} onClick={login}>
        Login
      </button>
      <button style={{ margin: "10px" }} onClick={signUp}>
        Sign Up
      </button>
    </div>
  );
};

export default Login;
