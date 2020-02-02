import { createGlobalStyle } from 'styled-components';

import color from './variables/color';

export default createGlobalStyle`
  body {
    color: ${color.base};
    background: #f7f7f7;
    font-size: 16px;
    font-family: 'Lato', sans-serif;
  }
`;
