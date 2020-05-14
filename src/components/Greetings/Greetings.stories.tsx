import React from 'react';

import {Greetings} from "./Greetings";
import {text,withKnobs} from "@storybook/addon-knobs";
import {withA11y} from "@storybook/addon-a11y";

export default {
  title: 'HelloUser',
  decorators: [withKnobs,withA11y]
};

export const withName = () => <Greetings name={'Josnih'}/>;
