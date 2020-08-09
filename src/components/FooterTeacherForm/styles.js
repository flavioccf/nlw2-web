import styled, { css } from 'styled-components';
import { breakpoint } from '../../assets/styles/breakpoints';

export const ButtonStyle = css`
        width: 100%;
        height: 5.6rem;
        background: var(--color-input-background);
        color: var(--color-primary-dark);
        border: 2px solid var(--color-primary-light);
        border-radius: 0.8rem;
        cursor: pointer;
        font: 700 1.6rem Archivo;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        transition: background-color 0.2s;
        margin-top: 3.2rem;
        &:hover {
            background: var(--color-primary-dark);
            color: var(--color-line-in-white);
        }
        @media ${breakpoint.tablet} {
            width: 20rem;
            margin-top: 0;
        }
`;

export const FooterComp = styled.footer`
    padding: 4rem 2.4rem;
    background: var(--color-box-footer);
    border-top: 1px solid var(--color-line-in-white);
    margin-top: 6.4rem;

    p {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.4rem;
        line-height: 2.4rem;
        color: var(--color-text-complement);

        img {
            margin-right: 2rem;
        }
    }

    button {
        ${ButtonStyle};
    }

    @media ${breakpoint.tablet} {
        padding: 4rem 6.4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        p {
            justify-content: space-between;
        }
    }
`;