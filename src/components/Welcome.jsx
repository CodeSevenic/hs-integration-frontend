import React from 'react';

const Welcome = ({ name }) => {
  return (
    <div>
      <h1>Welcome, {name}!</h1>
      <p>You have successfully logged in.</p>
    </div>
  );
};

export default Welcome;
