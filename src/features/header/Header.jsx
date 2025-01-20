import React, { useState} from 'react';
import DropDown from "../../components/dropDown/DropDown";
import styles from "./Header.module.css";
import { Button } from "@mui/material";

const Header = ({ setIsList, isList }) => {
    const [from, setFrom] = useState(null);
    const [to, setTo] = useState(null);
    const [closest, setClosest] = useState(null);

    const dropDownData = [
        { value: 10, label: "Джал" },
        { value: 20, label: "Советская" },
        { value: 30, label: "Проспект Мира" },
    ];

    const closestDropDownData = [
        { value: true, label: "ближайший" },
        { value: false, label: "дальший" },
    ];

    const handleClick = () => {
            setIsList(!isList);
    };

    const isDisabled = !(from && to && closest !== null); //исправить потом ))


    return (
        <div className={styles.container}>
            <DropDown items={dropDownData} label={"откуда"} onChange={setFrom} />
            <DropDown items={dropDownData} label={"куда"} onChange={setTo} />
            <DropDown items={closestDropDownData} label={"ближайший/дальший"} onChange={setClosest} />
            <Button
                variant="outlined"
                onClick={handleClick}
            >
                Поиск
            </Button>
        </div>
    );
};

export default Header;
