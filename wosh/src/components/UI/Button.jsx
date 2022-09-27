import styled from "styled-components";

const Button = styled.button`
  font-size: 2rem;
  border: 0.5px solid #98999b;
  background: ${(props) => props.background || "#ccc"};
  flex: ${(props) => props.flex || ""};
  cursor: pointer;
  box-shadow: inset -2px -2px 3px #000;

  &: active {
    box-shadow: 0 0 0 2px #000 inset;
  }
`;

export default Button;
