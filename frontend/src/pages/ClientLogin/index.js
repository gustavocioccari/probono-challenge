import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api'

import './styles.css';

export default function ClientLogin(){

    const [cpf,setCpf] = useState();
    const [password,setPassword] = useState();

    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();
        try{
            const response = await api.post('client/login', { cpf, password });
            localStorage.setItem('clientId', response.data.id);
            localStorage.setItem('clientName', response.data.name);
            history.push('/profile');
        }
        catch (err){
            alert('Falha no login, tente novamente.');
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
                <form onSubmit={handleLogin}>
                    <h1>Login como cliente</h1>
                    <input 
                        placeholder="CPF (apenas números)"
                        value = {cpf}
                        onChange = {e => setCpf(e.target.value)}
                    />
                    <input 
                        placeholder="Senha"
                        value = {password}
                        onChange = {e => setPassword(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>
                    <Link className="back-link" to="/client/register">
                        <FiLogIn size={16} color ="#5700d0"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>      
        </div>
    )
}