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

export async function apiRegister(username: string, password: string) {
  try {
    const response = await axios.post(
      'http://localhost:3001/user',
      { username, password },
    );
    return response.data;
  } catch (err) {
    return err;
  }
}

export async function apiCreatetaks(title: string, authorId: string) {
  try {
    const response = await axios.post(
      'http://localhost:3001/tasks',
      { title, authorId },
    );
    return response.data;
  } catch (err) {
    return err;
  }
}

export async function apiReadTaks(authorId: string) {
  try {
    const response = await axios.post(
      'http://localhost:3001/tasks/read',
      { authorId },
    );
    return response.data;
  } catch (err) {
    return err;
  }
}

export async function apiDeleteTaks(id: string) {
  try {
    const response = await axios.delete(
      `http://localhost:3001/tasks/delete/${id}`,
    );
    return response.data;
  } catch (err) {
    return err;
  }
}

export async function apiupdateTaks(id: string, title: string) {
  try {
    const response = await axios.put(
      'http://localhost:3001/tasks/update',
      { id, title },
    );
    return response.data;
  } catch (err) {
    return err;
  }
}
