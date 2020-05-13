import * as React from "react";
import { GreetingsProps } from "./types";

export const Greetings:React.FC<GreetingsProps> = ({name,lastName}) => (
<h1>Hello, {name}{lastName}</h1>
);

//export default Greetings default export ejemplo va sin llaves en App.tsx