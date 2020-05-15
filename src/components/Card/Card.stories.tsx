import React, {CSSProperties} from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, select } from '@storybook/addon-knobs';
import Card from './Card';

const styles = {
  background:'darkgreen',
  height:'200vh',
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

export const Default = () => <Card stick={select(selectAtb.label,selectAtb.options,selectAtb.defaultValue)} rank={5}/>

const VALUE_NUMBER =  '1,2,3,4,5,6,7,8,9,10,11,12,13'.split(",").map(value => parseInt(value));
export const Deck = () => VALUE_NUMBER.map(rank => <Card key={rank}stick={select(selectAtb.label, selectAtb.options, selectAtb.defaultValue)} rank={rank}/>);
