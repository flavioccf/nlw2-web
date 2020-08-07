import styled from 'styled-components';
import { breakpoint } from '../../assets/styles/breakpoints';

export const TextAreaBlock = styled.div`
    position: relative;
    label {
        font-size: 1.4rem;
    }
    textarea {
        width: 100%;
        min-height: 8rem;
        height: 16rem;
        margin-top: 0.8rem;
        border-radius: 0.8rem;
        background: var(--color-input-background);
        border: 1px solid var(--color-line-in-white);
        outline: 0;
        resize: vertical;
        padding: 1.2rem 1.6rem;
        font: 1.6rem Archivo;
    }
    &:focus-within::after {
        width: calc(100% - 3.2rem);
        height: 2px;
        content: '';
        background: var(--color-primary-light);
        position: absolute;
        left: 1.6rem;
        right: 1.6rem;
        bottom: 6px;
    }
    &:not(:first-child) {
        margin-top: 1.4rem;
    }
    @media ${breakpoint.tablet} {
        margin-top: 0;
    }
`;