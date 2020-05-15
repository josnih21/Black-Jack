import React, {CSSProperties} from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, select } from '@storybook/addon-knobs';
import Card from './Card';

const styles = {
  background:'darkgreen',
  height:'100vh',
  margin: '0px',
  padding: '0px',
};


export default {
  title: 'Card',
  decorators: [
    withKnobs,
    withA11y,
    (storyFn:any) => <div style={styles}> {storyFn()} </div>]

};

const selectAtb = {
  label: 'Palo',
  options: {
    Corazones: '♥',
    Picas: '♠',
    Rombos: '♦',
    Tréboles: '♣',
  },
  defaultValue: '♥',
};

export const Default = () => <Card stick={select(selectAtb.label,selectAtb.options,selectAtb.defaultValue)} rank={"5"}/>
