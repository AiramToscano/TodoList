import React from 'react';
import Login from './Login';
import Register from './Register';
import style from './login.module.scss';

function Main() {
  return (
    <div className={ style.divLogin }>
      <Login />
      <Register />
    </div>
  );
}

export default Main;
