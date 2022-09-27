import styled from 'styled-components';
import Button from '../UI/Button';

const DigitButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: 'seven eghit nine' 'four five six' 'one two three' 'zero zero zero';
  button {
    width: 100%;
  }

  button: first-child {
    grid-area: zero;
  }
  button: nth-child(2) {
    grid-area: one;
  }
  button: nth-child(3) {
    grid-area: two;
  }
  button: nth-child(4) {
    grid-area: three;
  }
  button: nth-child(5) {
    grid-area: four;
  }
  button: nth-child(6) {
    grid-area: five;
  }
  button: nth-child(7) {
    grid-area: six;
  }
  button: nth-child(8) {
    grid-area: seven;
  }
  button: nth-child(9) {
    grid-area: eghit;
  }
  button: last-child {
    grid-area: nine;
  }
`;
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const DigitButtons = (props) => {
  return (
    <DigitButtonWrapper>
      {digits.map((digit) => (
        <Button key={digit} id={digit} onClick={props.onClickNumber}>
          {digit}
        </Button>
      ))}
    </DigitButtonWrapper>
  );
};

export default DigitButtons;
