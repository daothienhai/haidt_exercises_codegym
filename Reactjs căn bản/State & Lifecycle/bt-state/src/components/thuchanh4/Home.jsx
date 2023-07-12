import React from "react";

const Home = ({ onLogOut }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <h1>Welcome</h1>
        <button onClick={onLogOut}>Log out</button>
      </div>
    </div>
  );
};

export default Home;
