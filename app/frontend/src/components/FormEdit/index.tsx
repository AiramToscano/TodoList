import React, { useState } from 'react';
import { ITaksForm } from '../../Interfaces/IFormEdit';
import Button from '../Button';
import Input from '../Input';
import { apiupdateTaks } from '../../utils/Apis';

function FormEdit(object : ITaksForm) {
  const { id, title, setEditTaks } = object;
  const [newTitle, setNewTitle] = useState(title);

  async function handleSubmitUpdate() {
    await apiupdateTaks(id, newTitle);
    setEditTaks(false);
  }

  async function handleSubmitCancelar() {
    setEditTaks(false);
  }

  return (
    <div>
      <Input
        type="taks"
        value={ newTitle }
        onChange={ (event) => setNewTitle(event.target.value) }
      />
      <div className="btn">
        <Button
          name="Salvar"
          onClick={ () => handleSubmitUpdate() }
        />
        <Button
          name="Cancelar"
          onClick={ () => handleSubmitCancelar() }
        />
      </div>
    </div>
  );
}

export default FormEdit;
