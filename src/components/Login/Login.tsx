import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../services/userAPI';
import Loading from '../Loading/Loading';
import './Login.css';

function Login() {
  const [userName, setUserName] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (userName.length <= 3) {
      return;
    }

    setIsLoading(true);

    await createUser({ name: userName });

    setIsLoading(false);
    navigate('/dashboard');
  }

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={ handleSubmit }>
        <input
          type="text"
          placeholder="Nome de usuário"
          value={ userName }
          onChange={ (e) => setUserName(e.target.value) }
        />
        <button type="submit" disabled={ isLoading || userName.length <= 3 }>
          {isLoading ? 'Carregando...' : 'Entrar'}
        </button>
      </form>
      {isLoading && <Loading />}
    </div>
  );
}

export default Login;
