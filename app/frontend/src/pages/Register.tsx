import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import { apiRegister } from '../utils/Apis';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [error, setError] = useState(false);
  const TIME_ERROR = 3000;

  function registerClick(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  async function handleSubmit(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();
    const api = await apiRegister(username, password);
    console.log(api);
    if (api.response) {
      setError(true);
      setTimeout(() => { setError(false); }, TIME_ERROR);
    }
    if (!api.response) {
      setMsg('Cadastro realizado');
      setUsername('');
      setPassword('');
      setTimeout(() => { setMsg(''); }, TIME_ERROR);
    }
  }

  return (
    <div>
      <form id="register_form" onSubmit={ registerClick }>
        <h4> Register</h4>
        <div>
          <Input
            type="username"
            value={ username }
            placeholder="Username"
            onChange={ (event) => setUsername(event.target.value) }
          />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={ password }
            onChange={ (event) => setPassword(event.target.value) }
          />
        </div>
        <div className="btn">
          <Button
            type="submit"
            onClick={ (e) => handleSubmit(e) }
          />
        </div>
        {error && (
          <div className="error-message">
            <p>
              Não foi possivel realizar o cadastro.
            </p>
          </div>
        )}
        <p>{msg}</p>
      </form>
    </div>
  );
}

export default Register;
