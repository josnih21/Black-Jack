import * as React from "react";
import { GreetingsProps } from "./types";
import styled from '@emotion/styled';

const ContainerStyled  = styled.h1`
  font-size : 72px;
  color : blue;
`;
export const Greetings:React.FC<GreetingsProps> = ({name,lastName}) => (
<ContainerStyled>Hello, {name}{lastName}</ContainerStyled>
);

//export default Greetings default export ejemplo va sin llaves en App.tsx
