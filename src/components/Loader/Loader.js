import React, { PureComponent } from 'react';
import * as Styles from './Loader.styled';

// https://tobiasahlin.com/spinkit/
class Loader extends PureComponent {
  render() {
    return (
      <Styles.Wrapper>
        <Styles.FirstCircle />
        <Styles.SecondCircle />
      </Styles.Wrapper>
    );
  }
}

export default Loader;
