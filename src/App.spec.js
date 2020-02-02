import React from 'react';
import { shallow } from 'enzyme';
import { Normalize } from 'styled-normalize';

import App from './App';
import BaseStyles from './styles/base';
import Sales from './views/Sales/Sales';

describe('App', () => {
  let wrapper = shallow(<App />);

  it('should render the normalize and base styles', () => {
    expect(wrapper.find(Normalize)).toHaveLength(1);
    expect(wrapper.find(BaseStyles)).toHaveLength(1);
  });

  it('should render the sales view', () => {
    expect(wrapper.find(Sales)).toHaveLength(1);
  });
});
