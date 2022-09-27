import styled from "styled-components";
import DigitButtons from "./DigitButtons";
import Operator from "./Operator";
import Button from "../UI/Button";

const ButtonList = styled.div`
  display: flex;
  flex-flow: row nowrap;
  flex-basis: 100%;

  & .ac__btn {
    width: 100%;
  }
`;

const DigitBoard = styled.div`
  flex-basis: 75%;
`;

const CalculatorButtonList = () => {
  return (
    <ButtonList>
      <DigitBoard>
        <Button className="ac__btn">AC</Button>
        <DigitButtons />
      </DigitBoard>
      <Operator />
    </ButtonList>
  );
};

export default CalculatorButtonList;
