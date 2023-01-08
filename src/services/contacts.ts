import fs from 'fs';
import path from 'path';
import { Contact } from 'src/types/Contacts';

const PATH = path.resolve(__dirname, 'data', 'contacts.json');

export function getAllContacts() {
  const data = fs.readFileSync(PATH, 'utf8');

  return JSON.parse(data);
}

export function addContact(contact: Contact) {
  const data = JSON.parse(fs.readFileSync(PATH, 'utf8'));

  data.push(contact);

  fs.writeFileSync(PATH, JSON.stringify(data));

  return data;
}

export function removeContact(id: number) {
  const data = JSON.parse(fs.readFileSync(PATH, 'utf8'));

  const newData = data.filter((item: Contact) => +item.id !== id);

  fs.writeFileSync(PATH, JSON.stringify(newData));

  return newData;
}

export function editContact(id: number, editedContact: Contact) {
  const data = JSON.parse(fs.readFileSync(PATH, 'utf8'));

  const edittingIndex = data.findIndex((item: Contact) => +item.id === id);

  data[edittingIndex] = editedContact;

  fs.writeFileSync(PATH, JSON.stringify(data));

  return data;
}
