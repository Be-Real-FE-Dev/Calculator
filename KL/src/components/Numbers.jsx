import React, { useState } from 'react';
import styled from 'styled-components';

const Numbers = props => {
  const NUMS = Array.from({ length: 9 }, (_, i) => i + 1);

  const clickNumberHandler = e => {
    props.setNumber(e.target.textContent);
  };

  return (
    <Wrap>
      <Cell className="first-cell">AC</Cell>
      {NUMS.map(num => (
        <Cell key={num} onClick={clickNumberHandler}>
          {num}
        </Cell>
      ))}
      <Cell className="last-cell" onClick={clickNumberHandler}>
        0
      </Cell>
    </Wrap>
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

  &.first-cell,
  &.last-cell {
    width: 240px;
  }
`;

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default Numbers;
