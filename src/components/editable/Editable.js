import React, { useState } from "react";
import useToggle from "../../hooks/useToggle";

function Editable() {
  const { status: ediable, toggleStatus: toggleBtn } = useToggle();
  const [inputValue, setInputValue] = useState("");

  const handleInuptValue = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      {ediable ? (
        <label>
          Title
          <input type="text" value={inputValue} onChange={handleInuptValue} />
        </label>
      ) : (
        <>Title : {inputValue}</>
      )}
      <br />
      <button onClick={toggleBtn}>{ediable ? "Submit" : "Edit"}</button>
    </div>
  );
}

export default Editable;
