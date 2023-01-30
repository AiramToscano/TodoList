import React from 'react';

interface IButtonProps {
    type?: string;
    onClick?: React.Dispatch<React.MouseEvent<HTMLInputElement>>;
}

function Button(object: IButtonProps) {
  const { type, onClick } = object;
  return (
    <div>
      <input
        type={ type }
        onClick={ onClick }
      />
    </div>
  );
}

export default Button;
