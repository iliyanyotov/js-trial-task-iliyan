import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';

import SALE_STATE from '../../constants/saleState';
import color from '../../styles/variables/color';

export const Wrapper = styled.span`
  position: relative;

  ${ifProp(
    { state: SALE_STATE.FAILED },
    css`
      &::after {
        content: '';
        width: 110%;
        position: absolute;
        border: 1px solid ${color.base};
        top: 50%;
        left: -5%;
      }
    `
  )};
`;
