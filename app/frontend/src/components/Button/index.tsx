import React from 'react';

interface IButtonProps {
    name: string;
    className?: string;
    onClick?: () => void,
}

function Button(object: IButtonProps) {
  const { onClick, name, className } = object;
  return (
    <div>
      <button className={ className } type="submit" onClick={ onClick }>{name}</button>
    </div>
  );
}

export default Button;
