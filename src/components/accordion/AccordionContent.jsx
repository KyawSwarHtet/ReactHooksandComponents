import React from "react";
import { useContext } from "react";
import { AccordionContextData } from "./Accordion";

//Content
const AccordionContent = ({ contentData }) => {
  const { status, content, data } = useContext(AccordionContextData);
  return (
    <>
      {status ? (
        <div className="content">{data}</div>
      ) : (
        <div className="content">
          {data}, {contentData}
        </div>
      )}
    </>
  );
};

export default AccordionContent;
