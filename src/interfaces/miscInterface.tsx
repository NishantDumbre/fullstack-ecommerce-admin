export interface NavbarPropsInterface{
    onToggleNav: () => void
}

export interface BackdropProps {
    onClick: () => void;
  }
  
  export interface ModalOverlayProps {
    children: React.ReactNode;
  }
  
  export interface ModalProps {
    onClick: () => void;
    children: React.ReactNode;
  }