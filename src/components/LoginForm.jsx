import React from 'react';
import '../styles/LoginForm.css';

const LoginForm = ({ onSubmit, onChange, values }) => {
  return (
    <div className="login-form">
      <form onSubmit={onSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={values.email} onChange={onChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={values.password} onChange={onChange} />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LoginForm;
