import styled from 'styled-components';
import { NavLink as StyledLink } from 'react-router-dom';

export const Link = styled(StyledLink)`
  color: white;
  font-size: 20px;
  font-weight: 600;
  &.active {
    color: #d90368;
    border-bottom: 2px dashed #d90368;
  }
  /* @media screen and (min-width: 320px) and (max-width: 767px) {
    font-size: 16px;
  } */

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 28px;
  }
`;

export const AuthDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  @media screen and (min-width: 320px) and (max-width: 767px) {
    gap: 8px;
  }
`;
