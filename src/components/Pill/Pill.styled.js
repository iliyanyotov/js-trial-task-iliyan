import styled from 'styled-components';
import { withProp, switchProp } from 'styled-tools';

import SALE_STATE from '../../constants/saleState';

const pillColors = {
  [SALE_STATE.SUCCESSFUL]: '#99c199',
  [SALE_STATE.REFUNDED]: '#cccccc',
  [SALE_STATE.FAILED]: '#ff7f7f',
};

export const Wrapper = styled.div`
  display: inline-block;
  height: 24px;
  line-height: 24px;
  font-size: 12px;
  padding: 0 8px;
  border-radius: 3px;
  text-transform: capitalize;
  color: ${switchProp('state', pillColors)};
  border: ${withProp(
    switchProp('state', pillColors),
    (color) => `1px solid ${color}`
  )};
`;
