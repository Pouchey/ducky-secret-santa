import { rgba } from 'polished';
import styled from 'styled-components';

export const StyledTopBar = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
`;

export const StyledTitle = styled.h1`
  font-size: ${({ theme }) => theme.size.diplodocus};
  color: ${({ theme }) => theme.color.secondary};
`;
