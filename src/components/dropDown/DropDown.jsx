import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const DropDown = ({ items,label,defaultValue }) => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <FormControl fullWidth>
            <InputLabel id="dynamic-select-label">{label}</InputLabel>
            <Select
                labelId="dynamic-select-label"
                id="dynamic-select"
                value={selectedValue}
                label="Select an option"
                onChange={handleChange}
                defaultValue={defaultValue}
            >
                {items.map((item, index) => (
                    <MenuItem key={index} value={item.value}>
                        {item.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default DropDown;
