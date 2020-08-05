import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from '../pages/Landing';
import TeacherList from '../pages/TeacherList';
import TeacherForm from '../pages/TeacherForm';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing}/>
                <Route path="/study" exact  component={TeacherList}/>
                <Route path="/give-classes" exact component={TeacherForm}/>
                <Route component={() => (<div>404</div>)} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;