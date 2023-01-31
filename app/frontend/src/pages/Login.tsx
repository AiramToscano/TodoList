import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import { apiLogin } from '../utils/Apis';

function Login() {
//   const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const TIME_ERROR = 3000;

  function loginClick(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  async function handleSubmit(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();
    const api = await apiLogin(username, password);
    if (api.response) {
      setError(true);
      setTimeout(() => { setError(false); }, TIME_ERROR);
    }
  }

  return (
    <div>
      <form id="login_form" onSubmit={ loginClick }>
        <h4> Sign In</h4>
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
              Não foi possivel realizar o login.
            </p>
          </div>
        )}
      </form>
    </div>
  );
}

export default Login;
