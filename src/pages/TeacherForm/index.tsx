import React from 'react';
import { PageTeachersList } from '../TeacherList/styles';
import PageHeader from '../../components/PageHeader';

function TeacherForm() {
    return (
        <PageTeachersList className="container">
            <PageHeader title="Que incrível que você quer dar aulas"></PageHeader>
        </PageTeachersList>
    );
}

export default TeacherForm;