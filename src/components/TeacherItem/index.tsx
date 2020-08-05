import React from 'react';
import { TeacherItemArt } from './styles';
import WhatsAppIcon from '../../assets/images/icons/whatsapp.svg';

const TeacherItem = () => {
    return(
        <TeacherItemArt>
        <header>
            <img src="https://avatars3.githubusercontent.com/u/26256201?s=460&u=5311cec62d5fc06c305f6bda597bac2905d9cb76&v=4" alt="Flavio Carvalho"/>
            <div>
                <strong>Flavio Carvalho</strong>
                <span>História</span>
            </div>
        </header>
        <p>Teste teste teste<br /><br />Teste Teste Teste</p>
        <footer>
            <p>Preço/Hora
                <strong>R$ 80,00</strong>
            </p>
            <button type="button">
                <img src={WhatsAppIcon} alt="WhatsApp" />Entrar em contato
            </button>
        </footer>
    </TeacherItemArt>
    );
}

export default TeacherItem;