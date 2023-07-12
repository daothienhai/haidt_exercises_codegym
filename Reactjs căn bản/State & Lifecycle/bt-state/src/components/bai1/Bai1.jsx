import React, { useState } from "react";

const Bai1 = () => {
  const [isExpand, setIsExpand] = useState(false);

  const handleToggleContent = () => {
    setIsExpand((prevState) => !prevState);
  };

  return (
    <div>
      <h1>Conditional Rendering</h1>
      {isExpand ? (
        <div>
          <button onClick={handleToggleContent}>Đóng giới thiệu</button>
          <p>Nội dung giới thiệu</p>
        </div>
      ) : (
        <button onClick={handleToggleContent}>Xem giới thiệu</button>
      )}
    </div>
  );
};

export default Bai1;
