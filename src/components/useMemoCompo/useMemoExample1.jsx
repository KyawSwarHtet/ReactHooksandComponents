import React, { useMemo, useState } from "react";
import { initialItems } from "../../utils/InitialValueUseMemo";

const UseMemoCompo = () => {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);
  //   console.log("items", items);

  const selectedItem = useMemo(
    () =>
      items.find((item) => {
        // return console.log("item changes", item.id), item.id === count;
        return item.isSelected; // 2998 ,[2,3,4,2,4]
      }),
    [items]
  );

  //  const selectedItem = items.find((item)=>item.isSelected)

  return (
    <div>
      <h1>Count: {count}</h1>
      <h1>Selected Item : {selectedItem.id}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default UseMemoCompo;
