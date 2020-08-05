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

export const TeacherItem = styled.article`
    background: var(--color-box-base);
    border: 1px solid var(--color-line-in-white);
    border-radius: 0.8rem;
    margin-top: 2.4rem;
    overflow: hidden;

    header {
        padding: 3.2rem 2rem;
        display: flex;
        align-items: center;

        img {
            width: 8rem;
            height: 8rem;
            border-radius: 50%;
        }

        div {
            margin-left: 2.4rem;
            strong {
                font: 700 2.4rem Archivo;
                display: block;
                color: var(--color-text-title);
            }
            span {
                font-size: 1.6rem;
                display: block;
                margin-top: 0.4rem; 
            }
        }
    }
    > p {
            padding: 0 2rem;
            font-size: 1.6rem;
            line-height: 2.8rem;
        }
        footer {
            padding: 3.2rem 2rem;
            background: var(--color-box-footer);
            border-top: 1px solid var(--color-line-in-white);
            margin-top: 3.2rem;
            display: flex;
            align-items: center;
            justify-content: space-between;

            p strong {
                color: var(--color-primary);
                font-size: 1.6rem;
                display: block;
            }

            button {
                width: 20rem;
                height: 5.6rem;
                background: var(--color-secondary);
                color: var(--color-button-text);
                border: 0;
                border-radius: 0.8rem;
                cursor: pointer;
                font: 700 1.4rem Archivo;
                align-items: center;
                justify-content: space-evenly;
                transition: 0.2s;
                &:hover {
                    background: var(--color-secondary-dark);
                }
            }
        }
`;