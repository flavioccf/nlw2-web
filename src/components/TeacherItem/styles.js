import styled from 'styled-components';
import { breakpoint } from '../../assets/styles/breakpoints';

export const TeacherItemArt = styled.article`
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
                color: var(--color-line-in-white);
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
            color: var(--color-title-in-primary);
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

            button, a {
                width: 20rem;
                height: 5.6rem;
                background: var(--color-primary-dark);
                color: var(--color-button-text);
                border: 0;
                border-radius: 0.8rem;
                cursor: pointer;
                font: 700 1.4rem Archivo;
                display: flex;
                align-items: center;
                justify-content: space-evenly;
                transition: 0.2s;
                text-decoration: none;
                &:hover {
                    background: var(--color-primary-darker);
                }
            }
        }
    @media ${breakpoint.tablet} {
        header, footer {
            padding: 3.2rem;
        }
        > p {
            padding: 0 3.2rem;
        }
        footer {
            p strong {
                display: initial;
                margin-left: 1.6rem;
            }
            button {
                width: 24.5rem;
                font-size: 1.6rem;
                justify-content: center;
                img {
                    margin-right: 1.6rem;
                }
            }
        }
    }
`;