import axios from 'axios';

function useAuthService() {
  const apiUrl = 'http://localhost:8000/api'; // Replace with your backend API URL

  async function login(email, password) {
    const response = await axios.post(`${apiUrl}/login`, {
      email: email,
      password: password,
    });
    return response.data;
  }

  async function register(name, email, password) {
    const response = await axios.post(`${apiUrl}/register`, {
      name: name,
      email: email,
      password: password,
    });
    return response.data;
  }

  async function logout() {
    // Implement logout logic here
  }

  return { login, register, logout };
}

export default useAuthService;

