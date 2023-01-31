import axios from 'axios';

export async function apiLogin(username: string, password: string) {
  try {
    const response = await axios.post(
      'http://localhost:3001/user/login',
      { username, password },
    );
    return response.data;
  } catch (err) {
    return err;
  }
}

export async function apiRandomUsers(page: number) {
  try {
    const response = await axios.get(`https://randomuser.me/api/?page=${page}&results=12&seed=abc`);
    return response.data;
  } catch (err) {
    return err;
  }
}
