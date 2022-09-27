import React from 'react';
import styled from 'styled-components';
import Button from '../UI/Button';

const OperatorButtonList = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex-basis: 25%;

  button {
    background: orange;
  }
`;

const operList = ['/', 'X', '-', '+', '='];

const Operator = (props) => {
  return (
    <OperatorButtonList>
      {operList.map((oper) => (
        <Button key={oper} id={oper} onClick={props.onClickOperator}>
          {oper}
        </Button>
      ))}
    </OperatorButtonList>
  );
};

export default Operator;
