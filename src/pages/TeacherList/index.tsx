import React from 'react';
import { PageTeachersList, SearchTeacher, InputBlock, TeacherItem } from './styles';
import PageHeader from '../../components/PageHeader';
import WhatsAppIcon from '../../assets/images/icons/whatsapp.svg';


function TeacherList() {
    return (
        <>
        <PageTeachersList className="container">
            <PageHeader title="Estes são os proffys disponíveis">
                <SearchTeacher>
                    <InputBlock>
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject" />
                    </InputBlock>
                    <InputBlock>
                        <label htmlFor="week_day">Dia da semana</label>
                        <input type="text" id="week_day" />
                    </InputBlock>
                    <InputBlock>
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time" />
                    </InputBlock>
                </SearchTeacher>
            </PageHeader>
            <main>
            <TeacherItem>
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
            </TeacherItem>
        </main>
        </PageTeachersList>
        </>
    );
}

export default TeacherList;