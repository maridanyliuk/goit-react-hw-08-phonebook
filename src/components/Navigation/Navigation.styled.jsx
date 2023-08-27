import styled from 'styled-components';
import { NavLink as StyledLink } from 'react-router-dom';

export const Link = styled(StyledLink)`
  color: white;
  font-weight: 600;
  font-size: 24px;
  &.active {
   color: white;
    border-bottom: 2px dashed white;
  }
  @media screen and (min-width: 320px) and (max-width: 767px) {
    font-size: 20px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 320px) and (max-width: 767px) {
    font-size: 16px;
    gap: 8px;
  }
`;
