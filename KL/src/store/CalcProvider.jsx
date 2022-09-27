import CalcContext from './calc-context';

const CalcProvider = props => {
  const calcContext = {};

  return (
    <CalcContext.Provider value={calcContext}>
      {props.children}
    </CalcContext.Provider>
  );
};

export default CalcProvider;
