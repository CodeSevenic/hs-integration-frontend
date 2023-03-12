import React from 'react';

const RegisterForm = ({ onSubmit, onChange, values }) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={values.name} onChange={onChange} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={values.email} onChange={onChange} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" value={values.password} onChange={onChange} />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
