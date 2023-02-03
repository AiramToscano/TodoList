import React, {
  useEffect, useCallback, useState,
} from 'react';
import { apiReadTaks } from '../../utils/Apis';
import { ITaks, IUser } from '../../Interfaces/ITaks';

function Taks(idUser: IUser) {
  const { authorId } = idUser;
  const [taks, setTaks] = useState<ITaks[]>([]);

  const ApiTaks = useCallback(async () => {
    const TaksksData = await apiReadTaks(authorId);
    setTaks(TaksksData);
  }, []);

  //   function handleSubmit(obj : ICustomers) {
  //     const { _id } = obj;
  //     setUpdateConsumer(obj);
  //     navigate(`/customers/${_id}`);
  //   }

  useEffect(() => {
    ApiTaks();
  }, [taks]);

  return (
    <div>
      {taks.length >= 1 ? taks.map((e, index) => (
        <div key={ index }>
          <p>{e.title}</p>
        </div>
      )) : <h3>Nenhuma taks cadastrada</h3>}
    </div>
  );
}

export default Taks;
