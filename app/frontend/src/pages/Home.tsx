import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import { apiCreatetaks } from '../utils/Apis';
import Taks from '../components/Taks';

function Home() {
  const navigate = useNavigate();
  const [createTaks, setCreateTaks] = useState('');
  const [idUser, setIdUser] = useState('');

  async function handleSubmit(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();
    await apiCreatetaks(createTaks, idUser);
  }

  useEffect(() => {
    const userId = window.localStorage.getItem('userId');
    if (!userId) navigate('/login');
    if (userId) {
      const findUser = JSON.parse(userId);
      setIdUser(findUser);
    }
  }, []);

  return (
    <div>
      <Input
        type="taks"
        value={ createTaks }
        placeholder="Tarefa do dia"
        onChange={ (event) => setCreateTaks(event.target.value) }
      />
      <div className="btn">
        <Button
          type="submit"
          onClick={ (e) => handleSubmit(e) }
        />
      </div>
      <Taks authorId={ idUser } />
    </div>
  );
}

export default Home;
