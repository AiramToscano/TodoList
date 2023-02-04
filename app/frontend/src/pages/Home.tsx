import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import { apiCreatetaks } from '../utils/Apis';
import Taks from '../components/Taks';
import Header from '../components/Header';

function Home() {
  const navigate = useNavigate();
  const [createTaks, setCreateTaks] = useState('');
  const [idUser, setIdUser] = useState('');

  async function handleSubmit() {
    await apiCreatetaks(createTaks, idUser);
    setCreateTaks('');
  }

  useEffect(() => {
    const userId = window.localStorage.getItem('userId');
    if (!userId) navigate('/login');
    if (userId) {
      const findUser = JSON.parse(userId);
      setIdUser(findUser.id);
    }
  }, []);

  return (
    <div>
      <Header />
      <Input
        type="taks"
        value={ createTaks }
        placeholder="Tarefa do dia"
        onChange={ (event) => setCreateTaks(event.target.value) }
      />
      <div className="btn">
        <Button
          name="Criar tarefa"
          onClick={ () => handleSubmit() }
        />
      </div>
      <Taks />
    </div>
  );
}

export default Home;
