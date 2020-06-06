import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import LawyerRegister from './pages/LawyerRegister';
import LawyerLogin from './pages/LawyerLogin';
import ClientRegister from './pages/ClientRegister';
import ClientLogin from './pages/ClientLogin';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/lawyer/register" component={LawyerRegister}/>
                <Route path="/lawyer/login" component={LawyerLogin}/>  
                <Route path="/client/register" component={ClientRegister}/>
                <Route path="/client/login" component={ClientLogin}/>
            </Switch>
        </BrowserRouter>
    )
}