
/**
 * Modal component that renders a customizable modal dialog using the `react-modal` library.
 *
 * @param {Object} props - The properties object.
 * @param {boolean} props.isOpen - Determines whether the modal is open or not.
 * @param {Function} props.onClose - Callback function to handle modal close action.
 * @param {string} [props.title] - Optional title to display at the top of the modal.
 * @param {React.ReactNode} props.children - The content to be displayed inside the modal.
 *
 * @returns {JSX.Element} The rendered modal component.
 */
// WealthHealth-app/src/components/Modal.jsx
//npm install react-modal
import React from "react";
import ReactModal from "react-modal";


function Modal({ isOpen, onClose, title, children }) {
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onClose} // Fermeture via clic sur l'overlay ou touche ESC
            style={{
                overlay: {
                    backgroundColor: "rgba(0, 0, 0, 0.75)",
                },
                content: {
                    top: "50%",
                    left: "50%",
                    right: "auto",
                    bottom: "auto",
                    marginRight: "-50%",
                    transform: "translate(-50%, -50%)",
                    padding: "20px",
                    borderRadius: "10px",
                    width: "400px",
                    background: "#fff",
                },
            }}
            contentLabel={title || "Modal"}
        >
            <button onClick={onClose} style={{ float: "right", marginBottom: "10px" }}>
                Close
            </button>
            {title && <h3>{title}</h3>}
            <div>{children}</div>
        </ReactModal>
    );
}

export default Modal;

