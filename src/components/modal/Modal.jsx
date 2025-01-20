import React from 'react';
import styles from './Modal.module.css';
import {Button} from "@mui/material";

const Modal = ({ setIsModal, isModal,selectedItem }) => {
    return (
        isModal && (
            <div className={styles.modalBackdrop}>
                <div className={styles.modalContainer}>
                    <h2>{selectedItem.name}</h2>
                    <p>длина:{selectedItem.length}</p>
                    <p>сложность:{selectedItem.difficulty}</p>
                    <p>описание:{selectedItem.description}</p>
                    <Button variant="outlined" onClick={() => setIsModal(false)}>Close</Button>
                </div>
            </div>
        )
    );
};

export default Modal;
