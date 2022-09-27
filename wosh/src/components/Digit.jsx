import React, { useContext } from "react";
import Button from "./UI/Button";
import { CalculatorContext } from "../store/cal-context";

const Digit = ({ children }) => {
  console.log(children);
  const calCtx = useContext(CalculatorContext);
  const { operator, dispatch } = calCtx;

  const numberSelectHandler = () => {
    const value = children.toString();
    if (!operator || operator === "=") {
      dispatch({ type: "NUM1", value });
    } else {
      dispatch({ type: "NUM2", value });
    }
  };

  return (
    <Button
      onClick={numberSelectHandler}
      background={"#efefef"}
      flex={"1 0 30%"}
    >
      {children}
    </Button>
  );
};
export default Digit;
