// src/services/api.js
import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api'; // URL của Spring Boot API

export const chatService = {
  getMessages: async () => {
    const response = await axios.get(`${BASE_URL}/messages`);
    return response.data;
  },
  
  sendMessage: async (message) => {
    const response = await axios.post(`${BASE_URL}/messages`, message);
    return response.data;
  },
  
  // Thêm các phương thức khác tương ứng với API endpoints
};