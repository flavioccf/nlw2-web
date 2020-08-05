import styled from 'styled-components';
import { breakpoint } from '../../assets/styles/breakpoints';

export const PageTeachersList = styled.div`
    width: 100vw;
    height: 100vh;
    main {
        margin: 3.2rem auto;
        width: 90%;
    }
    @media ${breakpoint.tablet} {
        max-width: 100%;
        main {
            padding: 3.2rem 0;
            max-width: 740px;
            margin: 0 auto;
        }
    }
`;

export const SearchTeacher = styled.form`
    margin-top: 3.2rem;
    label {
        color: var(--color-text-in-primary);
    }
    @media ${breakpoint.tablet} {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 16px;
        position: absolute;
        bottom: -28px;
    }
`;

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
    @media ${breakpoint.tablet} {
        margin-top: 0 !important;
    }
`;

