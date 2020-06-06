import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

export default function LawyerRegister(){
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();
    
    async function handleRegister(e){
        e.preventDefault();
        const data = {
            name,
            email,
            password
        };

        const response = await api.post('lawyer/register', data)
        try{
            alert(`Parabéns ${response.data.name}, seu cadastro foi realizado.`);
            history.push('/');
        }
        catch (err){
            alert('Erro no cadastro, tente novamente');
        }
    }

    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <h1>Cadastro de advogado</h1>
                    <p>Faça seu cadastro e mantenha seu clientes informados de forma simplificada.</p>
                    <Link className="back-link" to="/">
                            <FiArrowLeft size={16} color ="#5700d0"/>
                            Voltar à tela de Login
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Nome completo"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input 
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                        placeholder="Senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button className="button" type="submit">Cadastrar</button>
                </form>             
            </div>
        </div>
    )
}