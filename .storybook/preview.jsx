import React from 'react';
import { addDecorator } from '@storybook/react';
import { reduceEachLeadingCommentRange } from 'typescript';

const styles = {
  fontFamily: 'Segoe UI, Roboto, Oxygen, Ubuntu , Cantarell, Fira Sans, Droid Sans, Helvetica Neue',
};


addDecorator(storyFn => <div style={styles}> {storyFn()} </div>);
