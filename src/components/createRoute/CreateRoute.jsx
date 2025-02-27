import React from 'react';
import { useState} from 'react';
import {Button, Input} from "@mui/material";
import  styles from "./CreateRouter.module.css";
import DropDown from "../dropDown/DropDown";
import {dropDownData} from "../../mock";

const CreateRoute = () => {

    const [from, setFrom] = useState(null);
    const [to, setTo] = useState(null);


    return (
        <div className={styles.route}>
            <div className={styles.route_name}>
                <Input variant="outlined" placeholder="название сваги" />
            </div>
            <div className={styles.route_destination}>
                <DropDown items={dropDownData} label={"откуда"} onChange={setFrom} />
                <DropDown items={dropDownData} label={"куда"} onChange={setTo} />
            </div>
            <div className={styles.route_length}>
                <Input variant="solid " placeholder="расстояние сваги"  />
                <Button className={styles.route_button}  variant="contained" onClick={() => console.log("svaga tut ?")}>Подтвердить</Button>
            </div>
        </div>
    );
};

export default CreateRoute;