import * as React from 'react';

interface GreetingsProps {
    name:string
    lastName?:string
}

export const Greetings:React.FC<GreetingsProps> = ({name,lastName}) => (
<h1>Hello, {name}{lastName}</h1>
);

//export default Greetings default export ejemplo va sin llaves en App.tsx