import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const submitContact = async (data: { name: string; email: string; subject: string; message: string }) => {
  try {
    const response = await axios.post(`${API_URL}/contact`, data);
    return response.data;
  } catch (error: any) {
    throw error.response?.data?.message || 'Something went wrong';
  }
};
