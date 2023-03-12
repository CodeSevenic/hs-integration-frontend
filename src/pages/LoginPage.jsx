import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../apiService';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  const [values, setValues] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const data = await login(values);
      console.log(data);
      navigate('/welcome');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <LoginForm onSubmit={handleLogin} onChange={handleChange} values={values} />
    </div>
  );
};

export default LoginPage;
