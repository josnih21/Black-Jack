import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Greetings } from './Greetings';

describe('Greetings', ( ) => {

  it('should have text of name'), function(){
    //GIVEN
    const RenderResult: RenderResult = render(<Greetings name={'Josnih'}/>);
    //WHEN

    //THEN
    expect(RenderResult.getByText(/Josnih/i)).toBeInTheDocument();
  }

  it('should display the component'), function(){
    //GIVEN
    const RenderResult: RenderResult = render(<Greetings name={'Josnih'}/>);
    //WHEN

    //THEN
    expect(RenderResult.queryByLabelText('greetings')).toBeTruthy();
  }

});
