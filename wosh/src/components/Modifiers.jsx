import React from "react";
import styled from "styled-components";
import Modifier from "./Modifier";

const ModifiersDiv = styled.div`
  display: grid;
  grid-area: modif;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
`;

const Modifiers = () => {
  return (
    <ModifiersDiv>
      <Modifier />
    </ModifiersDiv>
  );
};

export default React.memo(Modifiers);
