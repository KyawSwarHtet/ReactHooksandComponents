import React, { useCallback, useMemo, useState } from "react";
import Title from "./Title";
import Counts from "./Counts";
import Button from "./Button";

const ParentComponent = () => {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(5000);

  const incrementAge = useCallback(() => {
    setAge((prev) => prev + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary((prev) => prev + 1000);
  }, [salary]);

  return (
    <div>
      <Title />
      <Counts text="Age" count={age} />
      <Button handleClick={incrementAge} title="Increment Age" />
      <Counts text="Salary" count={salary} />
      <Button handleClick={incrementSalary} title="Increment Salary" />
    </div>
  );
};

export default ParentComponent;
