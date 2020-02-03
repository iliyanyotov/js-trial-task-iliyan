import React from 'react';
import { render, fireEvent } from 'react-testing-library';

import Button from './Button';

describe('components: Button', () => {
  it('it should render a button', () => {
    const title = 'Click';
    const { getByTestId } = render(<Button onClick={() => {}}>{title}</Button>);

    expect(getByTestId('button').textContent).toBe(title);
  });

  it('it should be clickable', () => {
    const onClick = jest.fn();
    const { getByTestId } = render(<Button onClick={onClick}>Click</Button>);

    fireEvent.click(getByTestId('button'));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
