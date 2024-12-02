// src/Modal.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css'; // Импортируем стиль

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <div className="modal-content">
        {children}
        </div>
      </div>
    </div>,
    document.getElementById('modal-root') as HTMLElement // Убедитесь, что элемент с id "modal-root" существует в вашем HTML
  );
};

export default Modal;