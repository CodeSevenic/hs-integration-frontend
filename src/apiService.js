import { createAsyncThunk } from '@reduxjs/toolkit';

// apiService.js
const API_BASE_URL = 'http://localhost:8000';

export const login = async (credentials) => {
  const response = await fetch(`${API_BASE_URL}/api/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });
  const data = await response.json();
  return data;
};

export const getUserProfile = async (token) => {
  const response = await fetch(`${API_BASE_URL}/api/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
};

// Add other API endpoints as needed
