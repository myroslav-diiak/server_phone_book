import fs from 'fs';
import path from 'path';
import { Company } from 'src/types/Company';

const PATH = path.resolve(__dirname, 'data', 'companies.json');

export function getAllCompanies() {
  const data = fs.readFileSync(PATH, 'utf8');

  return JSON.parse(data);
}

export function addCompany(company: Company) {
  const data = JSON.parse(fs.readFileSync(PATH, 'utf8'));

  data.push(company);

  fs.writeFileSync(PATH, JSON.stringify(data));

  return data;
}

export function removeCompany(id: number) {
  const data = JSON.parse(fs.readFileSync(PATH, 'utf8'));

  const newData = data.filter((item: Company) => +item.id !== id);

  fs.writeFileSync(PATH, JSON.stringify(newData));

  return newData;
}

export function editCompany(id: number, editedCompany: Company) {
  const data = JSON.parse(fs.readFileSync(PATH, 'utf8'));

  const edittingIndex = data.findIndex((item: Company) => +item.id === id);

  data[edittingIndex] = editedCompany;

  fs.writeFileSync(PATH, JSON.stringify(data));

  return data;
}
