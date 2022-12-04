import { rgba } from 'polished';
import styled, { keyframes } from 'styled-components';

const overlayFadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const modalAnimation = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 40px;
  background-color: ${({ theme }) => rgba(theme.color.black, 0.5)};
  animation: ${overlayFadeIn} 0.3s ease-in-out;
`;

export const ModalContent = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  height: 600px;
  padding:40px;
  background-color: ${({ theme }) => theme.color.secondary};
  border-radius: 8px;
  animation: ${modalAnimation} 0.3s ease-in-out;
`;
