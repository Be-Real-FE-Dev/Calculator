import React from "react";
import styled from "styled-components";
import Digit from "./Digit";

const DigitsDiv = styled.div`
  grid-area: digit;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
`;

const Digits = () => {
  // console.log("재생성");

  return (
    <DigitsDiv>
      {new Array(10).fill().map((_, i) => (
        <Digit key={i.toString()}>{9 - i}</Digit>
      ))}
    </DigitsDiv>
  );
};

export default Digits;
