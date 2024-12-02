import { FormEvent, useEffect, useState } from 'react';
import './auth.css';
import { useAuth } from './AuthContext';
import ApiService from '../../requests/API';
import { Navigate, useLocation } from 'react-router-dom';

function Auth() {
  const location = useLocation();
  const { login, isAuthenticated } = useAuth();
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  console.log('location.pathname',location.pathname);
  
  useEffect(()=>{
    if(isAuthenticated && location.pathname === '/') {
    <Navigate to='/dialogs' />
  }},[isAuthenticated, location.pathname])
  

  const onSubmitHandler = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('username', username);
    console.log('password', password);

    const response = await ApiService.auth(username, password)

    // Обработка успешного ответа
    console.log('Успешный вход:', response);
    login()
    const token = response?.access_token
    if (token) {
      localStorage.setItem('authToken', token);
    }else{
      localStorage.setItem('authToken', 'token');
    }
  }

  return (
    <div className="form-container">
      <h2>Авторизация</h2>
      <form className='form'>
        <input className='input' type="text" name="username" placeholder="Логин" required value={username} onChange={(e) => setUsername(e.target.value)} />
        <input className='input' type="password" name="password" placeholder="Пароль" required value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type='submit' onClick={e => onSubmitHandler(e)}>Войти</button>
      </form>
    </div>
  );
}

export default Auth;