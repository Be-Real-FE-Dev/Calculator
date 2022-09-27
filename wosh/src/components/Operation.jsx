import { useContext } from "react";
import { CalculatorContext } from "../store/cal-context";

import Button from "./UI/Button";

const Operation = ({ children, background }) => {
  const calCtx = useContext(CalculatorContext);

  const operatorSelectHandler = () => {
    if (calCtx.num1 === "0") {
      alert("값을 입력하고 연산자를 선택하세요");
      return;
    }
    const value = children === "x" ? "*" : children;

    calCtx.dispatch({ type: "OPERATOR", value });
  };

  return (
    <Button onClick={operatorSelectHandler} background={background || "orange"}>
      {children}
    </Button>
  );
};
export default Operation;
