import React, { useCallback, useState } from "react";
import "./style.css";
import Search from "./Search";
import shaffle from "../../utils/shaffle";

const allUsers = ["john", "axex", "geroge", "simon", "james"];

const UseCallBackExample1 = () => {
  const [users, setUsers] = useState(allUsers);

  const handleSearch = useCallback(
    (text) => {
      console.log("user", users[0]);

      const filteredUsers = allUsers.filter((user) => user.includes(text));
      setUsers(filteredUsers);
    },
    [users]
  );

  return (
    <div className="tutorial">
      <div className="align-center mb-2 flex">
        <button onClick={() => setUsers(shaffle(allUsers))}> Shuffle</button>

        <Search onChange={handleSearch} />
      </div>

      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseCallBackExample1;
