import axios from 'axios';

// Mocked API call for simplicity
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // Placeholder API
});

// Get mock companies
export const getCompanies = async () => {
  const response = await api.get('/users');
  return response.data;
};

// Log communication
export const logCommunication = async (companyId, data) => {
  // Mock API post request
  const response = await api.post(`/posts`, { companyId, ...data });
  return response.data;
};
