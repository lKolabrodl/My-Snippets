import React from "react";
import fire from "../../servies/firebase";

const Dashboard = () => {
  const logout = () => {
    fire.auth().signOut();
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>You Are Logged In</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
