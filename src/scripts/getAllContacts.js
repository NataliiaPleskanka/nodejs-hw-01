import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  return await readContacts();
};

console.log(await getAllContacts());
