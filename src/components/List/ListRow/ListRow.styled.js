import styled from 'styled-components';

import color from '../../../styles/variables/color';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  line-height: 48px;
  padding: 0 16px;

  & ~ & {
    border-top: 1px solid ${color.base};
  }
`;
