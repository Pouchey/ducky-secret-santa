import { createPortal } from 'react-dom';
import Loader from '_components/loader';

import { ModalContainer, ModalContent } from './style';
import { ModalProps } from './types';

export default ({ children, isLoading }: ModalProps) =>
  createPortal(
    <ModalContainer className="modal">
      {isLoading ? (
        <Loader/>
      ) : (
        <ModalContent>{children}</ModalContent>
      )}
    </ModalContainer>,
    document.getElementById('modal') as HTMLElement
  );
