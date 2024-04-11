import React from 'react';
import { createUser } from '../../services/userAPI';

function Login() {
  return (
    <form action="">
      <label>
        Login
        <input type="text" placeholder="Username" data-testid="login-name-input" />
      </label>
      <button
        type="submit"
        data-testid="login-submit-button"
        onSubmit={ createUser }>
        Entrar
      </button>
    </form>
  );
}

export default Login;
