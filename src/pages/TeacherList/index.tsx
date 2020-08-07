import React from 'react';
import { PageTeachersList, SearchTeacher } from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

function TeacherList() {
    return (
        <>
        <PageTeachersList className="container">
            <PageHeader title="Estes são os músicos disponíveis">
                <SearchTeacher>
                    <Select
                        name="subject"
                        label="Matéria"
                        options={[
                            { value: 'Violão', label: 'Violão'},
                            { value: 'Guitarra', label: 'Guitarra'},
                            { value: 'Baixo', label: 'Baixo'},
                            { value: 'Bateria', label: 'Bateria'},
                            { value: 'Teclado', label: 'Teclado'},
                            { value: 'Violino', label: 'Violino'},
                            { value: 'Gaita', label: 'Gaita'}
                        ]}
                    >
                    </Select>
                    <Select
                        name="week_day"
                        label="Dia da semana"
                        options={[
                            { value: '1', label: 'Segunda'},
                            { value: '2', label: 'Terça'},
                            { value: '3', label: 'Quarta'},
                            { value: '4', label: 'Quinta'},
                            { value: '5', label: 'Sexta'},
                            { value: '6', label: 'Sábado'},
                            { value: '0', label: 'Domingo'},
                        ]}
                    >
                    </Select>
                    <Input
                        name="time"
                        label="Hora"
                        type="time"
                    >
                    </Input>
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