import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Greetings} from './components/Greetings/Greetings';
import { Form } from './components/forms/FormComponent';

function App() {
  return (
    <div className="App">
      <Greetings name={'josnih '} lastName={'nieda'}/>
    </div>
  );
}

export default App;
