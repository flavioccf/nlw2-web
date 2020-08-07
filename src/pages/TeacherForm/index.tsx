import React, { useState, FormEvent } from 'react';
import { PageTeacherForm, FieldSetForm, ScheduleItem } from './styles';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import FooterTeacherForm from '../../components/FooterTeacherForm';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';
import useForm from '../../hooks/useForm';

function TeacherForm() {
    const profile = {
        name: '',
        avatar: '',
        whatsapp: '',
        bio: ''
    };

    const profileForm = useForm(profile);

    const classInfo = {
        subject: '',
        cost: ''
    };

    const classInfoForm = useForm(classInfo);

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: "0", from: '', to: '' },
    ]);

    function handleCreateClass(e: FormEvent) {
        e.preventDefault();
        console.log(profileForm.values, classInfoForm.values, scheduleItems);
    }

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { 
                week_day: "0", 
                from: '', 
                to: '' 
            }
        ]);
    }

    function setScheduleItemValue(position: number, field: string, value: string) {
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                return { ...scheduleItem, [field]: value};
            }
            return scheduleItem;
        });
        setScheduleItems(updatedScheduleItems);
    }

    return (
        <PageTeacherForm className="container">
            <PageHeader 
            title="Que incrível que você quer dar aulas"
            description="O primeiro passo é preencher esse formulário de inscrição"
            ></PageHeader>
            <main>
            <form onSubmit={handleCreateClass}>
            <FieldSetForm>
                <legend>Seus dados</legend>
                <Input
                    name="name"
                    label="Nome completo"
                    value={ profileForm.values.name }
                    onChange={ profileForm.handleChange }
                >
                </Input>
                <Input
                    name="avatar"
                    label="Avatar"
                    value={ profileForm.values.avatar }
                    onChange={ profileForm.handleChange }
                >
                </Input>
                <Input
                    name="whatsapp"
                    label="WhastApp"
                    value={ profileForm.values.whatsapp }
                    onChange={ profileForm.handleChange }
                >
                </Input>
                <TextArea
                    name="bio"
                    label="Biografia"
                    value={ profileForm.values.bio }
                    onChange={ profileForm.handleChange }
                ></TextArea>
            </FieldSetForm>
            <FieldSetForm>
                <legend>Sobre a aula</legend>
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
                    value={ classInfoForm.values.subject }
                    onChange={ classInfoForm.handleChange }
                >
                </Select>
                <Input
                    name="cost"
                    label="Custo da sua aula por hora"
                    value={ classInfoForm.values.cost }
                    onChange={ classInfoForm.handleChange }
                >
                </Input>
            </FieldSetForm>
            <FieldSetForm>
                <legend>Horários disponíveis 
                    <button type="button" onClick={addNewScheduleItem}>+ Novo horário</button>
                </legend>
                { scheduleItems.map((scheduleItem, index) => {
                    return(
                        <ScheduleItemFunc scheduleItem={scheduleItem} position={index} key={ scheduleItem.week_day }></ScheduleItemFunc>
                    );
                }) }
            </FieldSetForm>
            <FooterTeacherForm></FooterTeacherForm>
            </form>
            </main>
        </PageTeacherForm>
    );

    function ScheduleItemFunc({ scheduleItem, position } : any) {
        return (<ScheduleItem>
            <Select
                name="week_day"
                label="Dia da semana"
                value={ scheduleItem.week_day }
                onChange={e => setScheduleItemValue(position, 'week_day', e.target.value)}
                options={[
                    { value: '1', label: 'Segunda' },
                    { value: '2', label: 'Terça' },
                    { value: '3', label: 'Quarta' },
                    { value: '4', label: 'Quinta' },
                    { value: '5', label: 'Sexta' },
                    { value: '6', label: 'Sábado' },
                    { value: '0', label: 'Domingo' },
                ]}
            >
            </Select>
            <Input
                name="from"
                label="Das"
                type="time"
                value={ scheduleItem.from }
                onChange={e => setScheduleItemValue(position, 'from', e.target.value)}
            >
            </Input>
            <Input
                name="to"
                label="Até"
                type="time"
                value={ scheduleItem.to }
                onChange={e => setScheduleItemValue(position, 'to', e.target.value)}
            >
            </Input>
        </ScheduleItem>);
    }
}

export default TeacherForm;