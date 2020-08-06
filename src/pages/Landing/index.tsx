import React from 'react';
import { PageLanding, PageLandingContent, LogoContainer, HeroImage, ButtonsContainer, TotalConnections } from './styles';
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <PageLanding>
            <PageLandingContent className="container">
                <LogoContainer>
                    <img src={logoImg} alt="Logo Proffy" />
                    <h2>Aprenda a tocar online.</h2>
                </LogoContainer>
                <HeroImage src={landingImg} alt="Plataforma de Estudos" className="hero-image"/>
                <ButtonsContainer>
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Estudar" />
                        Aprender
                    </Link>
                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="Dar Aulas" />
                        Dar Aulas
                    </Link>
                </ButtonsContainer>
                <TotalConnections>
                    Total de 200 conexões já realizadas <img src={purpleHeartIcon} alt="Coração roxo"/>
                </TotalConnections>
            </PageLandingContent>
        </PageLanding>
    );
}

export default Landing;