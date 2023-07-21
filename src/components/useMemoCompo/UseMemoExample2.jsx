import React, { useMemo, useState } from "react";

const UseMemoExample2 = () => {
  const [conuterOne, setCounterOne] = useState(0);
  const [conuterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne((prev) => prev + 1);
  };

  const incrementTwo = () => {
    setCounterTwo((prev) => prev + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000) i++;
    return conuterOne % 2 === 0;
  }, [conuterOne]);
  //   let i = 0;
  //   while (i < 20000000) i++;

  return (
    <div>
      <div>
        <button onClick={incrementOne}>Count One - {conuterOne}</button>
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>
      <div>
        <button onClick={incrementTwo}>Count Two - {conuterTwo}</button>
      </div>
    </div>
  );
};

export default UseMemoExample2;
