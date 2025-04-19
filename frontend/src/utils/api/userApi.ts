import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const userApi = {
  async getProfile() {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${API_URL}/user/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },

  async updateProfile(data: any) {
    const token = localStorage.getItem('token');
    const response = await axios.patch(`${API_URL}/user/profile`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },
}; 