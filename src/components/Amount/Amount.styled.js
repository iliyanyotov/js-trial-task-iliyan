import styled from 'styled-components';
import { ifProp } from 'styled-tools';

import SALE_STATE from '../../constants/saleState';

export const Wrapper = styled.span`
  ${ifProp({ state: SALE_STATE.FAILED }, 'text-decoration: line-through')};
`;
