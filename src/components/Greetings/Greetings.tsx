import * as React from "react";
import { GreetingsProps } from "./types";
import { ContainerStyled } from "./styles";

export const Greetings:React.FC<GreetingsProps> = ({name,lastName}) => (
<ContainerStyled>Hello, {name}{lastName}</ContainerStyled>
);

//export default Greetings default export ejemplo va sin llaves en App.tsx
