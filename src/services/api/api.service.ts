import axios from 'axios';
import { IUser } from 'src/types';

const apiClient = axios.create({
  headers: { 'Content-Type': 'application/json' },
});

class ApiService {
  async getUsers(): Promise<IUser[]> {
    try {
      const { data } = await apiClient.get('https://jsonplaceholder.typicode.com/users');
      return data;
    } catch {
      return [];
    }
  }
}

export const apiService = new ApiService();
