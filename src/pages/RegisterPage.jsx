import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm';

const RegisterPage = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      localStorage.setItem('token', data.token);
      navigate('/welcome');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} onChange={handleChange} values={values} />
    </div>
  );
};

export default RegisterPage;
