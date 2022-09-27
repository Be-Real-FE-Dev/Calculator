import React from 'react';
import styled from 'styled-components';
import Button from '../UI/Button';

const OperatorButtonList = styled.div``;

const operList = [
  {
    id: 'oper1',
    operator: '/',
  },
  {
    id: 'oper2',
    operator: 'X',
  },
  {
    id: 'oper3',
    operator: '-',
  },
  {
    id: 'oper4',
    operator: '+',
  },
  {
    id: 'oper5',
    operator: '=',
  },
];

const Operator = () => {
  return (
    <div>
      {operList.map(({ id, operator }) => (
        <Button key={id}>{operator}</Button>
      ))}
    </div>
  );
};

export default Operator;
