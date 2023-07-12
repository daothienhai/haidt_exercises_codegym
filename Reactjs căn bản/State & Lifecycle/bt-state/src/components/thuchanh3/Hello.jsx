import React, { useEffect } from "react";

const Hello = () => {
  useEffect(() => {
    return () => {
      alert("The component is going to be unmounted");
    };
  }, []);

  return <h1>Hello World!!!</h1>;
};

export default Hello;
