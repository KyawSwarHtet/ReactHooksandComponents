import React, { useMemo, useState } from "react";
//Create Default Array
const TestData = [];
let index = 0;

while (index < 6) {
  TestData.push({ id: index, value: index + 1 });
  index++;
}

const ExitingValuesArr = [];

const UseMemoTest = () => {
  const [data, setData] = useState("");
  const [findData, setFindData] = useState("");
  const [userData, setUserData] = useState("");

  const sumbmitFun = (input) => {
    if (input > TestData.length) {
      return setFindData("input data is greater than exiting Data!");
    }
    // console.log("Exiting Value Array", ExitingValuesArr);
    if (ExitingValuesArr.includes(input)) {
      return setFindData("found and already search");
    }

    setUserData(input);

    return () => MemoFunction;
  };

  const MemoFunction = useMemo(() => {
    let result = TestData.find((item) => item?.value == userData);
    console.log("result found", result?.value);

    result?.value > 0
      ? (() => {
          setFindData("found");
          ExitingValuesArr.push(result.value);
        })()
      : setFindData("not found");
  }, [userData]);

  return (
    <div>
      <h2>Output data : {findData}</h2>

      <input
        type="number"
        value={data}
        placeholder="enter some integer value"
        onChange={(e) => setData(e.target.value)}
      />
      <button onClick={() => sumbmitFun(Number(data))}>Submit</button>
    </div>
  );
};

export default UseMemoTest;
