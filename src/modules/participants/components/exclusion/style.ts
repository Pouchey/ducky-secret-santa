import { rgba } from 'polished';
import styled, { css } from 'styled-components';


export const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const StyledHeader = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
`;

export const StyledTitle = styled.h1`
  font-size:${({ theme }) => theme.size.grizzly};
  font-weight: ${({ theme }) => theme.weight.bold};
  color: ${({ theme }) => theme.color.white};
`;

export const StyledSelectionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

export const StyledSelectionInput = styled.input`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

export const StyledSelectionLabel = styled.label`
  font-size:${({ theme }) => theme.size.tall};
  color: ${({ theme }) => theme.color.white};

`;

export const StyledSelectionName = styled.div`
  font-size:${({ theme }) => theme.size.tall};
  font-weight: ${({ theme }) => theme.weight.bold};
  color: ${({ theme }) => theme.color.white};
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const StyledSelectionItem = styled.div<{checked:boolean}>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  padding: 4px;
  overflow: hidden;
  border-radius: 8px;
  background-color: ${({ theme }) => rgba(theme.color.black, 0.1)};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => rgba(theme.color.black, 0.2)};
  }

  ${({ checked,  theme }) => 
    checked && css`
      background-color: ${rgba(theme.color.primary, 0.4)};
      &:hover {
        background-color: ${rgba(theme.color.primary, 0.5)};
      }
  `}
  
`;




