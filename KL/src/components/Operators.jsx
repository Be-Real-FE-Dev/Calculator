import React, { useState } from 'react';
import styled from 'styled-components';

const Operators = props => {
  const [operator, setOperator] = useState(['/', 'X', '-', '+', '=']);

  const clickOperatorHandler = e => {
    props.setOperator(e.target.textContent);
  };

  return (
    <div>
      {operator.map((item, idx) => (
        <Cell
          key={idx}
          onClick={clickOperatorHandler}
          className="operator-cell"
        >
          {item}
        </Cell>
      ))}
      {/* <Cell onClick={() => props.computed()} className="operator-cell">
        =
      </Cell> */}
    </div>
  );
};

const Cell = styled.button`
  width: 80px;
  height: 80px;
  background: #ddd;
  box-shadow: 0 0 0 1px inset #888;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-family: sans-serif;

  &.operator-cell {
    background: orange;
  }
`;

export default Operators;
