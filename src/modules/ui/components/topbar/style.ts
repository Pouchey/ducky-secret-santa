import styled from 'styled-components';

export const StyledTopBar = styled.div`
  position: relative;
  display: flex;
  grid-area: topbar;
  align-items: center;
  justify-content: center;
  height: 50px;
  background-color: ${({ theme }) => theme.color.black};
`;

