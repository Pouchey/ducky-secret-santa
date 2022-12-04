export interface ModalProps {
  children: React.ReactNode;
  isLoading?: boolean;
  onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
