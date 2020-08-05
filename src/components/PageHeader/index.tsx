import React from 'react';
import { HeaderContent, PageHeaderH, TopBarContainer } from './styles';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backImg from '../../assets/images/icons/back.svg';

interface PageHeaderProps {
    title: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) =>  {
    return (
    <PageHeaderH>
        <TopBarContainer>
            <Link to="/">
                <img src={backImg} alt="Voltar"/>
            </Link>
            <img src={logoImg} alt="Proffy" />
        </TopBarContainer>
        <HeaderContent>
            <strong>{props.title}</strong>
            {props.children}
        </HeaderContent>
    </PageHeaderH>
    );
}

export default PageHeader;