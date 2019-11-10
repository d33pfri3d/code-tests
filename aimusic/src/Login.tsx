import React from 'react';
import './App.css';

import {apiReq} from './api';

const Login: React.FC = () => {

  const [userEmail, setUserEmail] = React.useState('');
  const [userPassword, setUserPassword] = React.useState('');

  const auth = async () => {
    try {
      const userData = await apiReq('https://zg542ck007.execute-api.eu-west-1.amazonaws.com/staging/auth', 'post', {
        email: userEmail,
        password: userPassword
      })
      console.log(`User :: ${JSON.stringify(userData.data.token)}`)
    } catch (err) {
      console.log(`Error :: ${err}`)
    }
  }

  
  return (
    <div className="Login">
      Login

      <form onSubmit={ e => {
        e.preventDefault();
        auth()
      }}>
        <label>Username</label>
        <input type="text" onChange={ e => setUserEmail(e.target.value) }/>
        <label> Passworld</label>
        <input type="password" onChange={e => setUserPassword(e.target.value)}/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;