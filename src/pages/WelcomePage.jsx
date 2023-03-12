import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../features/authSlice';
import '../styles/WelcomePage.css';

const WelcomePage = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const contacts = user?.contacts;

  useEffect(() => {
    if (!user?.userLoggedIn) {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    dispatch(setUser(null));
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
          {contacts ? (
            contacts.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.properties.firstname}</td>
                <td>{contact.properties.lastname}</td>
                <td>{contact.properties.email}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No Contacts</td>
            </tr>
          )}
        </tbody>
      </table>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default WelcomePage;
