import styled, { css } from 'styled-components';
import { ButtonProps } from './types';


export const StyledButtonIcon = styled.button<ButtonProps>`
display: flex;
align-items: center;
justify-content: center;
width: ${({ size }) => size || 40}px;
height: ${({ size }) => size || 40}px;
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

export const StyledIcon = styled.img`
  width: 50%;
  height: 50%;
`;

