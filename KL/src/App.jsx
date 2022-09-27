import styled from 'styled-components';
import Numbers from './components/Numbers';
import Operators from './components/Operators';
import { useState } from 'react';

function App() {
  const [state, setState] = useState({
    prev: 0,
    current: 0,
    operator: '',
    computed: 0,
  });

  const setNumber = clickedNum => {
    setState(prevState => ({
      ...prevState,
      current: +(state.current + clickedNum),
    }));
  };

  const setOperator = clickedOper => {
    if (clickedOper === '=') setComputed();
    else {
      setState(prevState => {
        return {
          ...prevState,
          prev: state.current,
          current: 0,
          operator: clickedOper,
        };
      });
    }
  };

  const setComputed = () => {
    const computedNumber = computed();

    setState(prevState => {
      return { ...prevState, computed: computedNumber };
    });
  };

  const computed = () => {
    const { prev, current, operator } = state;
    let result = +prev;
    switch (operator) {
      case '/':
        result /= +current;
        break;
      case 'X':
        result *= +current;
        break;
      case '-':
        result -= +current;
        break;
      case '+':
        result += +current;
        break;
      default:
        break;
    }
    return result;
  };

  const allClear = () => {
    setState({
      prev: 0,
      current: 0,
      operator: '',
      computed: 0,
    });
  };

  return (
    <Container>
      <Input
        value={
          state.computed
            ? state.computed
            : state.current
            ? state.current
            : state.prev
        }
        readOnly
      />
      <FlexBox>
        <Numbers setNumber={setNumber} onReset={allClear} />
        <Operators setOperator={setOperator} setComputed={setComputed} />
      </FlexBox>
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
const FlexBox = styled.div`
  display: flex;
`;

export default App;
