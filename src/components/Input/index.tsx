import React, { InputHTMLAttributes } from 'react';
import { InputBlock } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string,
    label: string,
    type?: string,
}

const Input: React.FC<InputProps> = ({ label, name, type, ...rest }) => {
    if (type === null) {
        type = "text"
    }
    return (
        <InputBlock>
            <label htmlFor={ name }>
                { label }
            </label>
            <input name={ name } id={ name } type={ type } {...rest}/>
        </InputBlock>
    );
}

export default Input;