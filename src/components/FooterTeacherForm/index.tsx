import React from 'react';
import { FooterComp } from './styles';
import WarningIcon from '../../assets/images/icons/warning.svg';

function Footer() {
    return (
        <FooterComp>
            <p>
                <img src={WarningIcon} alt="Aviso Importante" />
                Importante! <br />
                Preencha todos os dados
            </p>
            <button type="submit">Salvar Cadastro</button>
        </FooterComp>
    );
}

export default Footer;