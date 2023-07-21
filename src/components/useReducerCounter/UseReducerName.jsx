import React, { useReducer, useState } from "react";
import "./useReducer.css";

let initialValue = [];

const reducer = (state = initialValue, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.value];
    case "delete":
      return state.filter((contact) => contact.id !== action.value.id);

    default:
      return state;
  }
};

const UseReducerName = () => {
  const [data, setData] = useState("");
  const [name, dispatch] = useReducer(reducer, initialValue);

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="enter your name"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        {/* {console.log("data", data)} */}
        <button
          onClick={() => {
            dispatch({ type: "add", value: { data: data, id: Date.now() } });
            setData("");
          }}
        >
          Add
        </button>
      </div>

      {name &&
        name.map((user, index) => (
          <div key={index} className="flexdata">
            <h3>{user.data}</h3>
            <button
              className="smallbtn"
              onClick={() =>
                dispatch({ type: "delete", value: { id: user.id } })
              }
            >
              Delete
            </button>
          </div>
        ))}
    </div>
  );
};

export default UseReducerName;
