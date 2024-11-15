import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB);
    console.log('Вміст файлу:', data);
    return JSON.parse(data);
  } catch (error) {
    console.error('Помилка читання файлу:', error);
  }
};
