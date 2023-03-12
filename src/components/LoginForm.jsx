import React from 'react';
import '../styles/LoginForm.css';

const LoginForm = ({ onSubmit, onChange, values }) => {
  return (
    <div className="login-form">
      <h1>Log In</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label>Username or Email:</label>
          <input
            type="text"
            name="usernameOrEmail"
            value={values.usernameOrEmail}
            onChange={onChange}
          />
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
