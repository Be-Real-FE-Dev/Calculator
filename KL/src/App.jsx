import './App.css';
import styled from 'styled-components';
import Numbers from './components/Numbers';
import Operators from './components/Operators';
import { useState } from 'react';

function App() {
  const [state, setState] = useState({
    prev: '',
    current: '',
    operator:'',
    computed: 0,
  });
  const [num, setNum] = useState('');
  const [clickedOperator, setClickedOperator] = useState('');

  const setNumber = clickedNum => {
    if (num.length === 3) return;

    setNum(prev => {
      if(prev === '0') return +prev + +clickedNum;
      return (prev += clickedNum);
    });
    if(state.prev !== '' ){
      setState(prevState => {
        return{
          ...prevState,
          operator: clickedOperator,
        }
      });
    }
    console.log(state);
  };

  const setOperator = clickedOper => {
    if(num === '') return;

    setClickedOperator(clickedOper);
    setState(prevState => {
      if(state.operator !== '') return{...prevState, current: num};
      else return{...prevState, prev: num};
    });
    setNum('');
    console.log(state);
  };

  const setComputed = () => {
    const computedNumber = computed()
    console.log(computedNumber)
    setState(prevState => {return{ ...prevState,computed: computedNumber}});
  }


  const computed = () => {
    const {prev, current, operator} = state;
    let result; 
    switch (operator){
        case '/' :
          result = +prev / +current;
          break;
        case 'X' :
          result = +prev * +current;
          break;
        case '-' :
          result = +prev - +current;
          break;
        case '+' :
          result = +prev + +current;
          break;
        default :
        break;
      }
    return result;
  };


  return (
    <Container>
      <Input value={state.computed ? state.computed : num} readOnly/>
      <FlextBox>
        <Numbers setNumber={setNumber} />
        <Operators setOperator={setOperator} computed={setComputed}/>
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
