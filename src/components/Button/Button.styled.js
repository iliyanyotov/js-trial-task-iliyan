import styled from 'styled-components';

import color from '../../styles/variables/color';

export const Wrapper = styled.button`
  cursor: pointer;
  height: 32px;
  line-height: 32px;
  color: white;
  background: ${color.base};
  border-radius: 3px;
  text-transform: uppercase;
  font-size: 12px;
  border: none;
  transition: 0.3s background linear;

  &:hover {
    background: #37537a;
  }
`;
