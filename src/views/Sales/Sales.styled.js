import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 600px;
  padding: 30px 10px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 50px;
  }
`;

export const ErrorMessage = styled.h5`
  color: red;
`;

export const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 16px;
`;
