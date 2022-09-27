import React, { useReducer } from "react";

const initValue = {
  num1: "0",
  num2: "0",
  operator: "",
  dispatch: () => {},
};

export const CalculatorContext = React.createContext(initValue);

const setValue = (state, action) => {
  const num = action.type === "NUM1" ? "num1" : "num2";
  return state[num] === "0" ? action.value : state[num] + action.value;
};

const sumNum = (state) => {
  switch (state.operator) {
    case "+":
      return +state.num1 + +state.num2;
    case "-":
      return state.num1 - state.num2;
    case "*":
      return state.num1 * state.num2;
    case "/":
      return state.num1 / state.num2;
    default:
      return state.num1;
  }
};

const calReducer = (state, action) => {
  switch (action.type) {
    case "NUM1":
      if (state.operator === "=")
        return { ...state, num1: action.value, operator: "" };
      return { ...state, num1: setValue(state, action) };
    case "NUM2":
      return { ...state, num2: setValue(state, action) };
    case "OPERATOR":
      if (action.value === "=")
        return {
          ...state,
          num1: sumNum(state),
          num2: "0",
          operator: "=",
        };
      return { ...state, operator: action.value };
    case "AC":
      return { ...initValue, dispatch: state.dispatch };
    default:
      return { ...initValue, dispatch: state.dispatch };
  }
};

const CalculatorContextProvider = ({ children }) => {
  const [calState, dispatchCal] = useReducer(calReducer, initValue);

  const dispatchHandler = (value) => {
    dispatchCal(value);
  };

  const value = {
    ...calState,
    dispatch: dispatchHandler,
  };

  return (
    <CalculatorContext.Provider value={value}>
      {children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorContextProvider;
