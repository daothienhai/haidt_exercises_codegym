import React, { useState } from "react";

const carList = ["Vinfast VF8", "Honda CRV", "Mercedes S600"];
const colorList = ["Đỏ", "Xanh", "Trắng"];

function Car() {
  const [selectedCar, setSelectedCar] = useState({
    car: carList[0],
    color: colorList[0],
  });

  const handleCarChange = (event) => {
    setSelectedCar((prevState) => ({
      ...prevState,
      car: event.target.value,
    }));
  };

  const handleColorChange = (event) => {
    setSelectedCar((prevState) => ({
      ...prevState,
      color: event.target.value,
    }));
  };

  return (
    <div>
      <h1>Select a Car and Color</h1>
      <div>
        <label htmlFor="car">Car:</label>
        <select id="car" value={selectedCar.car} onChange={handleCarChange}>
          {carList.map((car, index) => (
            <option key={index} value={car}>
              {car}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="color">Color:</label>
        <select
          id="color"
          value={selectedCar.color}
          onChange={handleColorChange}
        >
          {colorList.map((color, index) => (
            <option key={index} value={color}>
              {color}
            </option>
          ))}
        </select>
      </div>
      <div>
        <p>
          You selected a {selectedCar.color} - {selectedCar.car}
        </p>
      </div>
    </div>
  );
}

export default Car;
