import React from 'react';
import styled from 'styled-components';

const Operators = () => {
  return (
    <div>
      <Cell className="operator-cell">/</Cell>
      <Cell className="operator-cell">X</Cell>
      <Cell className="operator-cell">-</Cell>
      <Cell className="operator-cell">+</Cell>
      <Cell className="operator-cell">=</Cell>
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
