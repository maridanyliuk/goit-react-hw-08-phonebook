import styled from 'styled-components';

export const Header = styled.header`
background: rgb(217,3,104);
background: linear-gradient(135deg, rgba(217,3,104,0.85) 0%, rgba(241,196,15,0.85) 52%, rgba(0,204,102,0.85) 82%, rgba(34,116,165,0.85) 100%);
  padding: 10px 20px;
  margin-bottom: 12px;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 20px;
  @media screen and (min-width: 320px) and (max-width: 767px) {
    justify-content: center;
    gap: 10px;
  }
`;
