import React, { memo } from "react";

const Counts = ({ text, count }) => {
  console.log(`Rendering ${text}`);
  return (
    <div>
      {text} - {count}
    </div>
  );
};

export default memo(Counts);
