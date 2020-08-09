import React, { useState, useEffect } from 'react';
import { PageLanding, PageLandingContent, LogoContainer, HeroImage, ButtonsContainer, TotalConnections } from './styles';
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import Toast from '../../components/Toast';

function Landing({ location }: any) {
    const state = location.state;
    const toast = Toast;

    if (state !== undefined) {
        if(state.values) {
            toast.fire({
                icon: 'success',
                title: 'Cadastro efetuado com sucesso'
              })
        }
    }

    const [totalConnections, setTotalConnecionts] = useState(0);

    useEffect(() => {
        api.get('/connections').then(response => {
            const { total }= response.data;
            setTotalConnecionts(total);
        })
    }, []);

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
                    Total de { totalConnections } conexões já realizadas <img src={purpleHeartIcon} alt="Coração roxo"/>
                </TotalConnections>
            </PageLandingContent>
        </PageLanding>
    );
}

export default Landing;