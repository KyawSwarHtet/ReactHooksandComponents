import React from "react";
import { useContext } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { AccordionContextData } from "./Accordion";

//Icon
const AccordionIcon = ({ iconopen, iconclose }) => {
  const { status } = useContext(AccordionContextData);

  return (
    <>
      <span>{status ? iconopen : iconclose}</span>
    </>
  );
};

//Header
const AccordionHeader = ({ title }) => {
  const { status, toggleStatus } = useContext(AccordionContextData);

  return (
    <>
      <button onClick={toggleStatus}>
        {title}
        <AccordionIcon
          iconopen={<FaChevronRight />}
          iconclose={<FaChevronDown />}
        />
      </button>
    </>
  );
};

export default AccordionHeader;
