import React, {useState} from 'react';
import ListItem from "./listItem/listItem";
import {routes} from "../../mock";
import styles from "./List.module.css";
import Modal from "../../components/modal/Modal";

const List = () => {
    const [isModal,setIsModal ] = useState(false)
    const [selectedItem, setSelectedItem] = useState(null);


    return (
        <div className={styles.container}>
            {routes.map((item, i) => (
                <ListItem key={i} item={item} setIsModal={setIsModal} setSelectedItem={setSelectedItem}  />
            ))}
            <Modal setIsModal={setIsModal} isModal={isModal} selectedItem={selectedItem}/>
        </div>
    );
};


export default List;
