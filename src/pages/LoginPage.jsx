import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../apiService';
import LoginForm from '../components/LoginForm';
import { setUser } from '../features/authSlice';

const LoginPage = () => {
  const [values, setValues] = useState({
    username: '',
    password: '',
  });

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const data = await login(values);
      // dispatch loginUser with the response data
      dispatch(setUser(data));
      console.log(data);
      navigate('/');
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
