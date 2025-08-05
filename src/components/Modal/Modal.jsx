import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

export default function Modal({ 
  children, 
  onClose, 
  open, 
  title = "Modal", 
  showCloseButton = true 
}) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal.showModal();
    }
    return () => {
      modal.close();
    };
  }, [open]);

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  const handleBackdropClick = (e) => {
    // Cerrar modal si se hace click en el backdrop
    if (e.target === dialog.current) {
      handleClose();
    }
  };

  return createPortal(
    <dialog 
      ref={dialog} 
      onClose={onClose}
      className={styles.modal}
      onClick={handleBackdropClick}
    >
      <div onClick={(e) => e.stopPropagation()}>
        {/* Header del modal */}
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>{title}</h2>
          {showCloseButton && (
            <button 
              className={styles.closeButton}
              onClick={handleClose}
              aria-label="Cerrar modal"
            >
              ✕
            </button>
          )}
        </div>

        {/* Body del modal */}
        <div className={styles.modalBody}>
          {children}
        </div>
      </div>
    </dialog>,
    document.getElementById("modal")
  );
}
