import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalStyled } from './Modal.styled';

const modalRoot = document.querySelector('#root--modal');
export default function Modal({ children, closeModal }) {
  //while pressing Esc - close modal
  useEffect(() => {
    function handleKeyDown({ key }) {
      console.log('key: ', key);

      switch (key) {
        case 'Escape':
          closeModal();
          break;
        default:
          return;
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return window.removeEventListener('keydown', handleKeyDown);
  }, [closeModal]);

  //while clicking on overlay - close modal
  function handleOverlayClick(evt) {
    if ([...evt.target.classList].includes('modal__overlay')) {
      closeModal();
    }
  }

  return createPortal(
    <ModalStyled className="modal__overlay" onClick={handleOverlayClick}>
      <div className="modal__box">{children}</div>
    </ModalStyled>,
    modalRoot
  );
}
