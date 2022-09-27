import styled from "styled-components";
import Digits from "./Digits";
import Modifiers from "./Modifiers";
import Operations from "./Operations";
import { CalculatorContext } from "../store/cal-context";
import { useContext } from "react";

const CalculatorDiv = styled.div`
  width: 300px;
  margin: 1rem auto;
  display: grid;
  grid-template-areas:
    "total total total total"
    "modif modif modif oper"
    "digit digit digit oper"
    "digit digit digit oper"
    "digit digit digit oper"
    "digit digit digit oper";
  grid-auto-columns: 1fr;
  grid-auto-rows: 1fr;
  height: 500px;
  border: 6px solid #666665;
`;
const H1 = styled.h1`
  grid-area: total;
  background-color: #333;
  color: white;
  margin: 0;
  padding: 0.7rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 3rem;
  overflow: hidden;
`;

const Calculator = () => {
  const calCtx = useContext(CalculatorContext);
  return (
    <CalculatorDiv>
      <H1>{calCtx.num2 === "0" ? calCtx.num1 : calCtx.num2}</H1>
      <Digits />
      <Modifiers />
      <Operations />
    </CalculatorDiv>
  );
};

export default Calculator;
