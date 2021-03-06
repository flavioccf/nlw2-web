import styled from 'styled-components';
import { breakpoint } from '../../assets/styles/breakpoints';
import { SelectBlock } from '../Select/styles';

export const InputBlock = styled.div`
    position: relative;
    label {
        font-size: 1.4rem;
    }
    input {
        width: 100%;
        height: 5.5rem;
        margin-top: 0.8rem;
        border-radius: 0.8rem;
        background: var(--color-input-background);
        border: 1px solid var(--color-line-in-white);
        outline: 0;
        padding: 1.6rem;
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
        bottom: 0;
    }
    &:not(:first-child) {
        margin-top: 1.4rem;
    }

    ${ SelectBlock } + & {
        margin-top: 0;
    }

    @media ${breakpoint.tablet} {
        margin-top: 0;
    }
`;