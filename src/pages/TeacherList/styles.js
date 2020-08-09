import styled from 'styled-components';
import { breakpoint } from '../../assets/styles/breakpoints';
import { ButtonStyle } from '../../components/FooterTeacherForm/styles';

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
    button {
        ${ ButtonStyle }
        @media ${breakpoint.tablet} {
            margin-top: 3.2rem;
        }
    }
    @media ${breakpoint.tablet} {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        column-gap: 16px;
        position: absolute;
        bottom: -28px;
    }
`;

export const NoTeacherAvailable = styled.div`
    text-align: center;
    padding: 5rem;
    font-size: 3rem;
`;