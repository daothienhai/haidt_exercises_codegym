// File App.js
import React, { useState } from "react";

const Bai4 = () => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  const handleChange = (event) => {
    setItem(event.target.value);
  };

  const handleAddItem = () => {
    if (item !== "") {
      const newList = [...list, item];
      setList(newList);
      setItem("");
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" value={item} onChange={handleChange} />
      <button onClick={handleAddItem}>Add</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Bai4;
