import React, { useContext } from "react";
import { CalculatorContext } from "../store/cal-context";
import Button from "./UI/Button";

const Modifier = () => {
  console.log("Modifier 리렌더");
  const { dispatch } = useContext(CalculatorContext);
  const clearValue = () => dispatch({ type: "AC" });

  return (
    <Button onClick={clearValue} background={"#ccc"}>
      AC
    </Button>
  );
};
export default Modifier;
