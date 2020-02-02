import styled from 'styled-components';

import color from '../../../styles/variables/color';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  height: 48px;
  line-height: 48px;

  & ~ & {
    border-top: 1px solid ${color.base};
  }
`;
