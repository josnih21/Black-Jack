import React, {FC} from 'react';
import { CardProps } from './types';
import { BodyCard, Value } from './styles';

export const ARIA_LABEL = 'card'


const Card:FC<CardProps> = ({stick,rank = "2"}) => {
  return (
    <BodyCard>
      <Value aria-label = {ARIA_LABEL}color = {stick}>
        {stick}
        {rank}
      </Value>
    </BodyCard>
  )

};

export default Card;
