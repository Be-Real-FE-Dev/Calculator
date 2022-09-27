import './App.css';
import styled from 'styled-components';
import Numbers from './components/Numbers';
import Operators from './components/Operators';
import { useState, useRef } from 'react';

function App() {
  const [state, setState] = useState({
    prev: '',
    current: '',
    operator: '',
    computed: 0,
  });

  const inputRef = useRef();

  // const [num, setNum] = useState('');
  // const [current, setCurrent] = useState('');
  // const [clickedOperator, setClickedOperator] = useState('');

  const setNumber = clickedNum => {
    setState(prevState => {
      // prev 저장
      if (state.prev === '') {
        if (state.prev === '0')
          return { ...prevState, prev: +state.prev + +clickedNum };
        else return { ...prevState, prev: (state.prev += clickedNum) };
      } else {
        // current 저장
        if (state.current === '0')
          return { ...prevState, current: +state.current + +clickedNum };
        else return { ...prevState, current: (state.current += clickedNum) };
      }
    });
  };

  const setOperator = clickedOper => {
    // if (num === '') return;

    if (clickedOper === '=') setComputed();

    setState(prevState => {
      if (state.operator === '') return { ...prevState, operator: clickedOper };
    });

    inputRef.current.value = '';
  };

  const setComputed = () => {
    const computedNumber = computed();

    setState(prevState => {
      return { ...prevState, computed: computedNumber };
    });
  };

  const computed = () => {
    const { prev, current, operator } = state;
    let result;
    switch (operator) {
      case '/':
        result = +prev / +current;
        break;
      case 'X':
        result = +prev * +current;
        break;
      case '-':
        result = +prev - +current;
        break;
      case '+':
        result = +prev + +current;
        break;
      default:
        break;
    }
    return result;
  };

  return (
    <Container>
      <Input
        ref={inputRef}
        value={
          state.computed
            ? state.computed
            : state.prev
            ? state.current
            : state.prev
        }
        readOnly
      />
      <FlextBox>
        <Numbers setNumber={setNumber} />
        <Operators setOperator={setOperator} computed={setComputed} />
      </FlextBox>
    </Container>
  );
}

const Container = styled.div`
  width: 320px;
  margin: 5rem auto;
`;
const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 80px;
  background: #333333;
  border: none;
  font-size: 4rem;
  color: #fff;
  text-align: right;
  padding: 0.5rem;
`;
const FlextBox = styled.div`
  display: flex;
`;

export default App;
