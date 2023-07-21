import "./App.css";
import Accordion from "./components/accordion/Accordion";
import CounterOne from "./components/useReducerCounter/CounterOne";
import CounterThree from "./components/useReducerCounter/CounterThree";
import CounterTwo from "./components/useReducerCounter/CounterTwo";
import Editable from "./components/editable/Editable";
import CalculatorApp from "./calculator app/CalculatorApp";
import UseReducerName from "./components/useReducerCounter/UseReducerName";
import UseMemoCompo from "./components/useMemoCompo/useMemoExample1";
import UseMemoExample2 from "./components/useMemoCompo/UseMemoExample2";
import UseCallBackExample1 from "./components/useCallBackCompo/UseCallBackExample1";
import UseMemoTest from "./components/useMemoCompo/UseMemoTest";
import UseCallBackExample2 from "./components/useCallBackCompo/UseCallBackExample2";
import UseMemoTest2 from "./components/useMemoCompo/UseMemoTest2";
import ParentComponent from "./components/useCallBackCompo/ParentComponent";
import { CalculateFactorial } from "./components/useMemoCompo/UseMemoTest3";

function App() {
  return (
    <div className="App">
      <h1>Hello Testing React Content</h1>
      <br />
      {/* <Accordion title="Product Info" content="This is product info content" /> */}
      <br />
      {/* <Editable /> */}

      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      {/* <CounterThree /> */}
      <br />
      <br />
      <CalculatorApp />
      {/* <UseReducerName /> */}
      {/* <UseMemoCompo /> */}
      {/* <UseMemoTest /> */}
      {/* <UseMemoTest2 /> */}
      {/* <CalculateFactorial /> */}
      {/* <UseMemoExample2 /> */}
      {/* <UseCallBackExample1 /> */}
      {/* <UseCallBackExample2 /> */}
      {/* <ParentComponent /> */}
    </div>
  );
}

export default App;
