import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Welcome from '../components/Welcome';

const WelcomePage = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (!token) {
  //     navigate('/login');
  //   } else {
  //     fetch('/api/user', {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //       .then((response) => response.json())
  //       .then((data) => setName(data.name))
  //       .catch((error) => {
  //         console.error(error);
  //         navigate('/login');
  //       });
  //   }
  // }, [navigate]);

  // const handleLogout = () => {
  //   localStorage.removeItem('token');
  //   navigate('/login');
  // };

  return (
    <div>
      {/* <Welcome name={name} />
      <button onClick={handleLogout}>Log Out</button> */}
      Welcome Home
      </div>
      )
}

export default WelcomePage