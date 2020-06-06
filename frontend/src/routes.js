import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import LawyerRegister from './pages/LawyerRegister';
import LawyerLogin from './pages/LawyerLogin';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/lawyer/register" component={LawyerRegister}/>
                <Route path="/lawyer/login" component={LawyerLogin}/>  
            </Switch>
        </BrowserRouter>
    )
}