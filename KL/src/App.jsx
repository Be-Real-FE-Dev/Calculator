import './App.css';
import styled from 'styled-components';
import Numbers from './components/Numbers';
import Operators from './components/Operators';
import { useState } from 'react';

function App() {
  const [state, setState] = useState({
    prev: 0,
  });

  const [num, setNum] = useState(0);

  const setNumber = clickedNum => {
    if (num.length === 3) return;

    setNum(prev => {
      if (prev === 0) return prev + +clickedNum;
      else return (prev += clickedNum);
    });
    // console.log(num);
  };

  return (
    <Container>
      <Input />
      <FlextBox>
        <Numbers setNumber={setNumber} />
        <Operators />
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
