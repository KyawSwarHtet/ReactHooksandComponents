import { useState } from "react";

function useToggle() {
  const initial = "hello";
  const [status, setStatus] = useState(false);
  const [data, setData] = useState(initial);

  const toggleStatus = () => {
    setStatus((pervStatus) => !pervStatus); // false = true
    status == true ? setData(initial) : setData("Bye Bye !");
  };
  return { status, toggleStatus, data };
}

export default useToggle;
