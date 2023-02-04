import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';

function Header() {
  const navigate = useNavigate();
  const [username, setUsename] = useState('');
  function handleSubmitLogoff() {
    localStorage.removeItem('userId');
    navigate('/login');
  }

  useEffect(() => {
    const userId = window.localStorage.getItem('userId');
    if (userId) {
      const findremember = JSON.parse(userId);
      setUsename(findremember.username);
    }
  }, []);

  return (
    <div>
      <header>
        <div>
          <p>{`bem vindo ${username}`}</p>
          <Button
            name="Logoff"
            onClick={ () => handleSubmitLogoff() }
          />
        </div>
      </header>
    </div>
  );
}

export default Header;
