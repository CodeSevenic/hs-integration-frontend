import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../apiService';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    usernameOrEmail: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const data = await login(credentials);
      localStorage.setItem('token', data.token);
      navigate('/welcome');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <LoginForm onSubmit={handleLogin} onChange={handleChange} values={credentials} />
    </div>
  );
};

export default LoginPage;
