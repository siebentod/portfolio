import { useEffect } from 'react';
import ModalText from './ModalText';
import ModalScreenshot from './ModalScreenshot';

export default function Modal({ openedModal, closeModal }) {
  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.code === 'Escape') {
        closeModal();
      }
    });

    if (openedModal) document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', (e) => {
        if (e.code === 'Escape') {
          closeModal();
        }
      });
      document.body.style.overflow = '';
    };
  }, [closeModal, openedModal]);

  if (!openedModal) {
    return null;
  }

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10 overflow-y-auto"
      onClick={handleOverlayClick}
    >
      {openedModal.type === 'screenshot' ? (
        <ModalScreenshot openedModal={openedModal} closeModal={closeModal} />
      ) : (
        <ModalText openedModal={openedModal} closeModal={closeModal} />
      )}
    </div>
  );
}
