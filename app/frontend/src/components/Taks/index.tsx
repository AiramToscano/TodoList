import React, {
  useEffect, useCallback, useState,
} from 'react';
import { apiReadTaks, apiDeleteTaks } from '../../utils/Apis';
import { ITaks } from '../../Interfaces/ITaks';
import Button from '../Button';
import FormEdit from '../FormEdit';

function Taks() {
  const [taks, setTaks] = useState<ITaks[]>([]);
  const [edittaks, setEditTaks] = useState(false);
  const [idTaks, setIdTaks] = useState('');
  const [titleTaks, settitleTaks] = useState('');

  const ApiTaks = useCallback(async (authorId: string) => {
    const TaksksData = await apiReadTaks(authorId);
    setTaks(TaksksData);
  }, []);

  async function handleSubmitDelete(id: string) {
    await apiDeleteTaks(id);
  }

  async function handleSubmitUpdate(id: string, title: string) {
    setIdTaks(id);
    settitleTaks(title);
    setEditTaks(true);
  }

  useEffect(() => {
    const userId = window.localStorage.getItem('userId');
    if (userId) {
      const findUser = JSON.parse(userId);
      ApiTaks(findUser.id);
    }
  }, [taks]);

  return (
    <div>
      {taks.length === 0 && <>Nenhumas tarefa cadastrada</>}
      {taks.length >= 1 && !edittaks && taks.map((e, index) => (
        <div key={ index }>
          <p>{e.title}</p>
          <div className="btn">
            <Button
              name="Deletar"
              onClick={ () => handleSubmitDelete(e.id) }
            />
          </div>
          <div className="btn">
            <Button
              name="Editar"
              onClick={ () => handleSubmitUpdate(e.id, e.title) }
            />
          </div>
        </div>
      ))}
      {edittaks && <FormEdit
        setEditTaks={ setEditTaks }
        id={ idTaks }
        title={ titleTaks }
      />}
    </div>
  );
}

export default Taks;
