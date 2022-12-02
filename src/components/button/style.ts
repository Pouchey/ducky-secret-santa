import { darken } from 'polished';
import styled, { css } from 'styled-components';

import { ButtonProps } from './types';

export const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: ${({ theme, size }) => theme.size[size || 'normal']};
  background-color: ${({ theme }) => theme.color.primary};
  color: #fff;
  font-weight: ${({ theme }) => theme.weight.bold};
  font-size: ${({ theme, size }) => theme.size[size || 'normal']};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}
`;
