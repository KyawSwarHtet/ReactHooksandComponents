import React, { memo } from "react";

const Button = ({ handleClick, title }) => {
  console.log("Rendering button -", title);
  return (
    <>
      <button onClick={handleClick}>{title}</button>
    </>
  );
};

export default memo(Button);
