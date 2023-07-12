import React, { useState } from "react";
import Home from "./Home";

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogIn = () => {
    setLoggedIn(true);
  };

  const handleLogOut = () => {
    setLoggedIn(false);
  };

  if (isLoggedIn) {
    return <Home onLogOut={handleLogOut} />;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <h1>Please Log in</h1>
        <button onClick={handleLogIn}>Log in</button>
      </div>
    </div>
  );
};

export default App;
