import styled from 'styled-components';
import { breakpoint } from '../../assets/styles/breakpoints';
import { InputBlock } from '../../components/Input/styles';
import { TextAreaBlock } from '../../components/TextArea/styles';
import { SelectBlock } from '../../components/Select/styles';

export const PageTeacherForm = styled.div`
    width: 100vw;
    height: 100vh;
    main {
        background: var(--color-box-base);
        margin: -1.5rem auto 3.2rem;
        width: 100%;
        max-width: 74rem;
        border-radius: 0.8rem;
        padding-top: 5rem;
        overflow: hidden;
    }
    @media ${breakpoint.tablet} {
        max-width: 100%;
        main {
            margin-top: -3.5rem;
            padding: 3.2rem 0;
            max-width: 740px;
            /* margin: 0 auto; */
        }
    }
`;

export const FieldSetForm = styled.fieldset`
    border: 0;
    padding: 0 2.4rem;
    color: var(--color-primary-light);
    &:not(:first-child) {
        margin-top: 6.4rem;
    }
    legend {
        font: 700 2.4rem;
        color: var(--color-line-in-white);
        margin-bottom: 2.4rem;
        display:flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding-bottom: 1.6rem;
        border-bottom: 1px solid var(--color-line-in-white);
        button {
            background: none;
            border: none;
            color: var(--color-primary);
            font: 700 1.6rem Archivo;
            cursor: pointer;
            transition: color 0.2s;
            &:hover {
                color: var(--color-primary-dark);
            }
        }
    }

    ${ InputBlock } + ${ TextAreaBlock },
    ${ SelectBlock } + ${ InputBlock } {
        margin-top: 2.4rem;
    }

    @media ${breakpoint.tablet} {
        padding: 0 6.4rem;
    }
`;

export const ScheduleItem = styled.div`
    @media ${breakpoint.tablet} {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr;
        column-gap: 1.6rem;

        ${ InputBlock } {
            margin-top: 0 !important;
        }
    }
`;