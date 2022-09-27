import styled from 'styled-components';
import Button from '../UI/Button';

const DigitButton = styled(Button)`
  grid-area: ${(props) => props.digit};
  width: 100%;
`;

const DigitButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: 'seven eight nine' 'four five six' 'one two three' 'zero zero zero';
`;

const digits = [
  { digit: 0, str_num: 'zero' },
  { digit: 1, str_num: 'one' },
  { digit: 2, str_num: 'two' },
  { digit: 3, str_num: 'three' },
  { digit: 4, str_num: 'four' },
  { digit: 5, str_num: 'five' },
  { digit: 6, str_num: 'six' },
  { digit: 7, str_num: 'seven' },
  { digit: 8, str_num: 'eight' },
  { digit: 9, str_num: 'nine' },
];

const digitButtonList = digits.map(({ digit, str_num }) => (
  <DigitButton
    key={digit}
    id={digit}
    digit={str_num}
    onClick={props.onClickNumber}
  >
    {digit}
  </DigitButton>
));

const DigitButtons = (props) => {
  return <DigitButtonWrapper>{digitButtonList}</DigitButtonWrapper>;
};

export default DigitButtons;
