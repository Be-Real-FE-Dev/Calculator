import styled from "styled-components";
import Button from "../UI/Button";

const DigitButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  button {
    width: 100%;
  }
`;
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const DigitButtons = () => {
  return (
    <DigitButtonWrapper>
      {digits.map((digit) => (
        <Button key={digit}>{digit}</Button>
      ))}
    </DigitButtonWrapper>
  );
};

export default DigitButtons;
