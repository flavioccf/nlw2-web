import React, { FormEvent, useState } from 'react';
import { PageTeachersList, SearchTeacher } from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import useForm from '../../hooks/useForm';
import api from '../../services/api';

function TeacherList() {
    const [teachers, setTeachers] = useState([]); 

    const classFindForm = {
        subject: '',
        week_day: '',
        time: '',
    };

    const { values, handleChange, clearForm } = useForm(classFindForm);

    async function searchTeachers(e: FormEvent) {
        e.preventDefault();
        console.log(values);

        const classes = await api.get('/classes', {
            params: values,
        });

        setTeachers(classes.data);
    }

    return (
        <PageTeachersList className="container">
            <PageHeader title="Estes são os músicos disponíveis">
                <SearchTeacher onSubmit={searchTeachers}>
                    <Select
                        name="subject"
                        label="Matéria"
                        value={ values.subject }
                        onChange={ handleChange }
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
                        value={ values.week_day }
                        onChange={ handleChange }
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
                        value={ values.time }
                        onChange={ handleChange }
                    >
                    </Input>
                    <button type="submit">Buscar</button>
                </SearchTeacher>
            </PageHeader>
            <main>
                { teachers.length === 0 && <p>Nenhum professor...</p> }
                { teachers.map((teacher: Teacher) => {
                    return <TeacherItem key={ teacher.id } teacher={ teacher }/>;
                }) }
            </main>
        </PageTeachersList>
    );
}

export default TeacherList;