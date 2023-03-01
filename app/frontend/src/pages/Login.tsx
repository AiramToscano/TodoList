import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import style from './login.module.scss';
import { apiLogin } from '../utils/Apis';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const TIME_ERROR = 3000;

  function loginClick(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  async function handleSubmit() {
    const api = await apiLogin(username, password);
    if (api.response) {
      setError(true);
      setTimeout(() => { setError(false); }, TIME_ERROR);
    }
    if (!api.response) {
      window.localStorage.setItem('userId', JSON.stringify(api.user));
      navigate('/home');
    }
  }

  useEffect(() => {
    const userId = window.localStorage.getItem('userId');
    if (userId) {
      const findremember = JSON.parse(userId);
      if (findremember) navigate('/home');
    }
  }, []);

  return (
    <div>
      <form id="login_form" className={ style.formclass } onSubmit={ loginClick }>
        <h4> Sign In</h4>
        <div>
          <Input
            type="username"
            className={ style.fieldclass }
            value={ username }
            placeholder="Username"
            onChange={ (event) => setUsername(event.target.value) }
          />
          <Input
            type="password"
            placeholder="Password"
            className={ style.fieldclass }
            name="password"
            value={ password }
            onChange={ (event) => setPassword(event.target.value) }
          />
        </div>
        <div className="btn">
          <Button
            name="Entrar"
            className={ style.submitclass }
            onClick={ () => handleSubmit() }
          />
        </div>
        {error && (
          <div className="error-message">
            <p>
              Não foi possivel realizar o login.
            </p>
          </div>
        )}
      </form>
    </div>
  );
}

export default Login;
