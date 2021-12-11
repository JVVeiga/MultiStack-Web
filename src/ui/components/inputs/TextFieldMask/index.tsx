import React from "react";
import InputMask from 'react-input-mask';
import TextField from "../TextField";
import { OutlinedTextFieldProps } from '@mui/material';

export interface TextFieldMask extends OutlinedTextFieldProps {
    mask: string,
    value: any
}

const TextFieldMask: React.FC<TextFieldMask> = ({mask, value, onChange, ...props}) => {
    return (
        <InputMask mask={mask} value={value} onChange={onChange}>
        {() => {
            return <TextField {...props}></TextField>;
        }}
        </InputMask>
    );
};
export default TextFieldMask;