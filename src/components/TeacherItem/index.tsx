import React from 'react';
import { TeacherItemArt } from './styles';
import WhatsAppIcon from '../../assets/images/icons/whatsapp.svg';
import api from '../../services/api';

export interface Teacher {
    avatar: string,
    bio: string,
    cost: number,
    id: number,
    user_id: number,
    name: string,
    subject: string,
    whatsapp: string
};
interface TeacherItemProps {
    teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
    function createNewConnection() {
        api.post('/connections', {
            user_id: teacher.user_id
        });
    }
    return(
        <TeacherItemArt>
        <header>
            <img src={ teacher.avatar } alt={ teacher.name }/>
            <div>
                <strong>{ teacher.name }</strong>
                <span>{ teacher.subject }</span>
            </div>
        </header>
        <p>{ teacher.bio }</p>
        <footer>
            <p>Preço/Hora
    <strong>R$ { teacher.cost }</strong>
            </p>
            <a onClick={ createNewConnection } target="_blank" rel="noopener noreferrer" href={`https://wa.me/55${ teacher.whatsapp }?text=Oi!%20te%20vi%20no%20Musify!`}>
                <img src={WhatsAppIcon} alt="WhatsApp" />Entrar em contato
            </a>
        </footer>
    </TeacherItemArt>
    );
}

export default TeacherItem;