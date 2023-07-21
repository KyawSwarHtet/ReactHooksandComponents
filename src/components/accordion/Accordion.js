import { createContext, useContext } from "react";

import useToggle from "../../hooks/useToggle";
import AccordionHeader from "./AccordionHeader";
import AccordionContent from "./AccordionContent";

//Create context api
export const AccordionContextData = createContext();
const { Provider } = AccordionContextData;

// const NewData = createContext();

function Accordion({ title, content }) {
  // const { title, content } = props;
  const { status, toggleStatus, data } = useToggle();

  const value = {
    status,
    toggleStatus,
    data,
  };

  return (
    <Provider value={value}>
      {/* <NewData.Provider value={newDataValue}> */}
      <div className="accordion">
        <AccordionHeader title={title} />
        <AccordionContent contentData={content} />
      </div>
      {/* </NewData.Provider> */}
    </Provider>
  );
}

export default Accordion;
