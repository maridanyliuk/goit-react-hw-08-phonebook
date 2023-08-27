import styled from 'styled-components';

export const Text = styled.p`
  display: flex;
  justify-content: center;
  font-size: 18px;
  color: white;
  @media screen and (min-width: 320px) and (max-width: 767px) {
    font-size: 12px;
  }
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  @media screen and (min-width: 320px) and (max-width: 767px) {
    gap: 10px;
  }
`;
