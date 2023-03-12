import React from 'react';

const LoginForm = ({ onSubmit, onChange, values }) => {
  return (
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
  );
};

export default LoginForm;
