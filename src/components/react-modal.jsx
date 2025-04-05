
// WealthHealth-app/src/components/Modal.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../css/modal.module.css'; // Créez un fichier CSS pour les styles du modal

function Modal({ isOpen, onClose, title, children }) {
    if (!isOpen) return null;
    return (
        <div className={styles.modalOverlay} onClick={onClose} >
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>
                    Close
                </button>
                <h3>{title}</h3>
                <div className={styles.modalBody}>
                    {children}
                </div>
                <button className={styles.submitButton} onClick={onClose}>
                    Close
                </button>
            </div>

        </div>

    )
}


export default Modal;
