import React, { TextareaHTMLAttributes } from 'react';
import { TextAreaBlock } from './styles';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string,
    label: string,
}

const TextArea: React.FC<TextAreaProps> = ({ label, name, ...rest }) => {
    return (
        <TextAreaBlock>
            <label htmlFor={ name }>
                { label }
            </label>
            <textarea id={ name } name={ name } {...rest}></textarea>
        </TextAreaBlock>
    );
}

export default TextArea;