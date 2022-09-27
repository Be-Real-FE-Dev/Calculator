import styled from "styled-components";
import Operation from "./Operation";
import { useContext } from "react";
import { CalculatorContext } from "../store/cal-context";

const OperationsDiv = styled.div`
  display: grid;
  grid-area: oper;
`;

const Operations = () => {
  const calCtx = useContext(CalculatorContext);

  const collectOperator = (operator) => {
    let ctxOperator = calCtx.operator;
    if (ctxOperator === "*") ctxOperator = "x";

    return operator === ctxOperator ? "#ff6d00" : "";
  };

  const operators = ["/", "x", "-", "+", "="];
  return (
    <OperationsDiv>
      {operators.map((operator) => (
        <Operation key={operator} background={collectOperator(operator)}>
          {operator}
        </Operation>
      ))}
    </OperationsDiv>
  );
};

export default Operations;
