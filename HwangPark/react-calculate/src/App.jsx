import React, { useState } from 'react';

import DigitView from './components/Calculator/DigitView';
import CalculatorButtonList from './components/Calculator/CalculatorButtonList';

function App() {
  const [totalNum, setTotalNum] = useState(0);
  const [curNum, setCurNum] = useState(0);
  const [viewNum, setViewNum] = useState(0);
  const [operator, setOperator] = useState(null);

  const clickNumberHandler = (event) => {
    setCurNum((curNum) => +(curNum.toString() + event.target.id));
  };

  const clickAllClearHandler = () => {
    setTotalNum(0);
    setCurNum(0);
    setViewNum(0);
  };

  const clickOperator = (event) => {
    // const operator = event.target.id;
    setOperator(event.target.id);

    let resultNum = totalNum;

    switch (event.target.id) {
      case '+':
        // console.log(curNum);
        resultNum += viewNum;
        break;
      case '-':
        resultNum = curNum;
        break;
      case 'X':
        resultNum *= curNum;
        break;
      case '/':
        resultNum /= curNum;
        resultNum = Math.floor(resultNum);
        break;
    }
    console.log(resultNum);

    if (event.target.id) {
      if (event.target.id === '=') {
        setViewNum(resultNum);
        setTotalNum(0);
      } else {
        setTotalNum(resultNum);
        setViewNum(curNum);
      }
    }
    setCurNum(0);
  };

  return (
    <div className="App">
      <DigitView>{curNum ? curNum : viewNum}</DigitView>
      <CalculatorButtonList
        onClickNumber={clickNumberHandler}
        onClickAllClear={clickAllClearHandler}
        onClickOperator={clickOperator}
      />
    </div>
  );
}

export default App;
