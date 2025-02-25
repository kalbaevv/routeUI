import React from 'react';
import {Button, Input} from "@mui/material";
import  styles from "./CreateRouter.module.css";

const CreateRoute = () => {
    return (
        <div className={styles.route}>
            <div className={styles.route_name}>
                <Input variant="outlined" placeholder="название сваги" />
            </div>
            <div className={styles.route_destination}>
                <Input variant="solid " placeholder="откуда сваги"  />
                <Input variant="soft " placeholder="куда сваги" />
            </div>

            <div className={styles.route_length}>
                <Input variant="solid " placeholder="расстояние сваги"  />
                <Button className={styles.route_button}  variant="contained" onClick={() => console.log("svaga tut ?")}>Подтвердить</Button>
            </div>

        </div>
    );
};

export default CreateRoute;