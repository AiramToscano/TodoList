import React from 'react';

interface InputsProps {
    value?: string;
    type?: string;
    name?: string;
    className?: string;
    placeholder?: string;
    onChange?: React.Dispatch<React.ChangeEvent<HTMLInputElement>>
}

function Input(object: InputsProps) {
  const { value, type, placeholder, onChange, name, className } = object;
  return (
    <div>
      <input
        type={ type }
        value={ value }
        name={ name }
        className={ className }
        placeholder={ placeholder }
        autoComplete="on"
        onChange={ onChange }
      />
    </div>
  );
}

export default Input;
