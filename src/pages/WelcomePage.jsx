import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../styles/WelcomePage.css';

const WelcomePage = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const contacts = user.contacts;

  useEffect(() => {
    if (!user.userLoggedIn) {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div>
      <h1>Contacts</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.properties.firstname}</td>
              <td>{contact.properties.lastname}</td>
              <td>{contact.properties.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WelcomePage;
