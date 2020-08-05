import React from 'react';
import { PageTeachersList, SearchTeacher, InputBlock } from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

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
                <TeacherItem></TeacherItem>
                <TeacherItem></TeacherItem>
                <TeacherItem></TeacherItem>
                <TeacherItem></TeacherItem>
            </main>
        </PageTeachersList>
        </>
    );
}

export default TeacherList;