import React from 'react';
import {render,RenderResult} from '@testing-library/react'
import Card, { ARIA_LABEL } from './Card';

describe("Card", () => {
  it('should display the component', function () {
    const renderResult: RenderResult = render(<Card stick={"♥"} rank={5}/>);
    expect(renderResult.queryByLabelText(ARIA_LABEL)).toBeTruthy();
  });

  it('should display the component with Heart and a rank of 2',function(){
    const renderResult: RenderResult = render(<Card stick={"♥"} rank={5}/>);

    expect(renderResult.getByText(/♥/i)).toBeInTheDocument();
    expect(renderResult.getByText(/2/i)).toBeInTheDocument();
  });
});
