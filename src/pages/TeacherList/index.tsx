import React, { FormEvent, useState } from 'react';
import { PageTeachersList, SearchTeacher, NoTeacherAvailable } from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import useForm from '../../hooks/useForm';
import api from '../../services/api';
import Toast from '../../components/Toast';

function TeacherList() {
    const toast = Toast;
    const [teachers, setTeachers] = useState([]); 
    const [noTeachers, setNoTeachers] = useState('Faça a sua busca e encontre um professor para você!')

    const classFindForm = {
        subject: '',
        week_day: '',
        time: '',
    };

    const { values, handleChange, clearForm } = useForm(classFindForm);

    async function searchTeachers(e: FormEvent) {
        e.preventDefault();
        try {
            const classes = await api.get('/classes', {
                params: values,
            });
            if (classes.data.length === 0) {
                setNoTeachers('Ops! Nenhum professor foi encontrado...');
                Toast.fire({
                    icon: 'info',
                    title: 'Ops! Nenhum professor foi encontrado...'
                  })
            }
            setTeachers(classes.data);   
        } catch (error) {
            if (error.response.status) {
                setNoTeachers('Preencha todos os campos para fazer sua busca...');
                Toast.fire({
                    icon: 'warning',
                    title: 'Preencha todos os campos para fazer sua busca...'
                  })
            }
        }
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
                    { teachers.length === 0 && <NoTeacherAvailable>{ noTeachers }</NoTeacherAvailable> }
                { teachers.map((teacher: Teacher) => {
                    return <TeacherItem key={ teacher.id } teacher={ teacher }/>;
                }) }
            </main>
        </PageTeachersList>
    );
}

export default TeacherList;