import React, { useState } from 'react';
import DigitView from './components/Calculator/DigitView';
import CalculatorButtonList from './components/Calculator/CalculatorButtonList';
function App() {
  const [totalNum, setTotalNum] = useState(0);
  const [curNum, setCurNum] = useState(0);
  const [operator, setOperator] = useState(null);
  const clickNumberHandler = (event) => {
    setCurNum((curNum) => +(curNum.toString() + event.target.id));
  };
  const clickAllClearHandler = () => {
    setTotalNum(0);
    setCurNum(0);
  };
  const clickOperator = (event) => {
    let resultNum = totalNum;
    switch (operator) {
      case '+':
        resultNum += curNum;
        break;
      case '-':
        resultNum -= curNum;
        break;
      case 'X':
        resultNum *= curNum;
        break;
      case '/':
        resultNum /= curNum;
        resultNum = Math.floor(resultNum);
        break;
    }
    setOperator(event.target.id);
    operator ? setTotalNum(resultNum) : setTotalNum(curNum);
    setCurNum(0);
  };
  return (
    <div className="App">
      <DigitView>{curNum ? curNum : totalNum}</DigitView>
      <CalculatorButtonList
        onClickNumber={clickNumberHandler}
        onClickAllClear={clickAllClearHandler}
        onClickOperator={clickOperator}
      />
    </div>
  );
}
export default App;
