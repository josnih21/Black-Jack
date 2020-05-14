import React from 'react';

import {Greetings} from "./Greetings";

export default {
  title: 'HelloUser',
};

export const withName = () => <Greetings name={'Josnih'}/>;
