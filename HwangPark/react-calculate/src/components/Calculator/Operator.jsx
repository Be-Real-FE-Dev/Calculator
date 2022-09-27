import React from "react";
import styled from "styled-components";
import Button from "../UI/Button";

const OperatorButtonList = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex-basis: 25%;

  button {
    background: orange;
  }
`;

const operList = [
  {
    id: "oper1",
    operator: "/",
  },
  {
    id: "oper2",
    operator: "X",
  },
  {
    id: "oper3",
    operator: "-",
  },
  {
    id: "oper4",
    operator: "+",
  },
  {
    id: "oper5",
    operator: "=",
  },
];

const Operator = () => {
  return (
    <OperatorButtonList>
      {operList.map(({ id, operator }) => (
        <Button key={id}>{operator}</Button>
      ))}
    </OperatorButtonList>
  );
};

export default Operator;
