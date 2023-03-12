import React from 'react';
import '../styles/RegisterForm.css';
const RegisterForm = ({ onSubmit, onChange, values }) => {
  return (
    <div className="register-form">
      <h1>Register</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name" className="register-label">
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={values.name}
            onChange={onChange}
            className="register-input"
          />
        </div>
        <div>
          <label htmlFor="email" className="register-label">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={values.email}
            onChange={onChange}
            className="register-input"
          />
        </div>
        <div>
          <label htmlFor="password" className="register-label">
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={values.password}
            onChange={onChange}
            className="register-input"
          />
        </div>
        <button type="submit" className="register-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
