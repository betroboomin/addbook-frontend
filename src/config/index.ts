// ApiService.ts

import { DataItem, FormData } from './types';

class ApiService {
  async fetchData(): Promise<DataItem[]> {
    const response = await fetch('http://localhost:4000/books');
    return response.json();
  }
  async fetchDataitem(id: string): Promise<DataItem> {
    const response = await fetch(`http://localhost:4000/books/${id}`);
    return response.json();
  }

  async sendData(data: FormData): Promise<DataItem> {
    const response = await fetch('http://localhost:4000/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }
}

export default new ApiService();
