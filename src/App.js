import React, { Component } from 'react';
import { Normalize } from 'styled-normalize';

import BaseStyles from './styles/base';
import Sales from './views/Sales/Sales';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Normalize />
        <BaseStyles />
        <Sales />
      </React.Fragment>
    );
  }
}

export default App;
