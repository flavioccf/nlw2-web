import React, { SelectHTMLAttributes } from 'react';
import { SelectBlock } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string,
    label: string,
    options: Array<{
        value: string,
        label: string;
    }>;
}

const Select: React.FC<SelectProps> = ({ options, label, name, ...rest }) => {
    return (
        <SelectBlock>
            <label htmlFor={ name }>
                { label }
            </label>
            <select name={ name } id={ name } {...rest}>
                <option value="" disabled hidden>Selecione uma opção</option>
                { options.map(option => {
                    return <option key={ option.value } value={ option.value }>{ option.label }</option>
                })}
            </select>
        </SelectBlock>
    );
}

export default Select;