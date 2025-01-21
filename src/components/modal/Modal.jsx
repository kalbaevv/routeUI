import React from 'react';
import styles from './Modal.module.css';
import { Button } from "@mui/material";

const Modal = ({ setIsModal, isModal, selectedItem }) => {
    return (
        isModal && (
            <div className={styles.modalBackdrop} onClick={() => setIsModal(false)}>
                <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
                    <h2>{selectedItem.name}</h2>
                    <p><strong>Длина:</strong> {selectedItem.length}</p>
                    <p><strong>Сложность:</strong> {selectedItem.difficulty}</p>
                    <p><strong>Описание:</strong> {selectedItem.description}</p>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => setIsModal(false)}
                    >
                        Закрыть
                    </Button>
                </div>
            </div>
        )
    );
};

export default Modal;
