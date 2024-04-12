import React, { useState } from 'react';
import { createUser } from '../../services/userAPI';
import Loading from '../Loading/Loading';

function Login() {
  const [userName, setUserName] = React.useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (userName.length <= 3) {
      return;
    }

    setIsLoading(true);

    await createUser({ name: userName });

    setIsLoading(false);
  }

  return (
    <form onSubmit={ handleSubmit }>
      <label>
        Login
        <input
          type="text"
          placeholder="Username"
          data-testid="login-name-input"
          value={ userName }
          onChange={ ({ target }) => setUserName(target.value) }
        />
      </label>
      <button
        type="submit"
        data-testid="login-submit-button"
        disabled={ userName.length < 3 || isLoading }
      >
        Entrar
      </button>
      {isLoading && <Loading />}
    </form>
  );
}

export default Login;
