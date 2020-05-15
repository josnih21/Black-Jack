import React, {FC} from 'react';
import { CardProps } from './types';
import { BodyCard } from './styles';



const Card:FC<CardProps> = ({stick,rank = "2"}) => {
  return (
    <BodyCard>
      <span>
        {stick}
        {rank}
      </span>
    </BodyCard>
  )

};

export default Card;
