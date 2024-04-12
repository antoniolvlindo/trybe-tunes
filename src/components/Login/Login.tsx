import React from 'react';
import { createUser } from '../../services/userAPI';
import { UserType } from '../../types';

function Login() {
  const user = {};
  const [userName, setUserName] = React.useState<string>('');

  function isFormValid() {
    return userName.length >= 3;
  }
  return (
    <form action="">
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
        onClick={ () => createUser(user as UserType) }
        disabled={ !isFormValid() }
      >
        Entrar
      </button>
    </form>
  );
}

export default Login;
