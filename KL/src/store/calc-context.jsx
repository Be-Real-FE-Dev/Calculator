import { useContext } from 'react';

const CalcContext = React.createContext({
  prev: 0,
});

export default CalcContext;
