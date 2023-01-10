import { Request, Response } from 'express';
import client from '../data/db';

export const getAll = async(req: Request, res: Response) => {
  const allContacts = await client.query('SELECT * FROM contacts');

  res.statusCode = 200;
  res.send(allContacts.rows);
};

export const addContact = async(req: Request, res: Response) => {
  const { newContact } = req.body;

  if (!newContact) {
    res.sendStatus(400);

    return;
  }

  const {
    id,
    name,
    lastname,
    adress,
    city,
    country,
    email,
    number,
    companyId,
  } = newContact;

  const resposeData = await client.query(
    `INSERT INTO contacts (id, name, lastname, adress, city, country, email, number, companyId)
    values ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
    [id, name, lastname, adress, city, country, email, number, companyId],
  );

  res.statusCode = 201;
  res.send(resposeData.rows[0]);
};

export const removeContact = async(req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    res.sendStatus(400);

    return;
  }

  const resposeData = await client.query(
    'DELETE FROM contacts WHERE id = $1',
    [id],
  );

  res.statusCode = 200;
  res.send(resposeData.rows[0]);
};

export const editContact = async(req: Request, res: Response) => {
  const { contactId } = req.params;
  const { newContact } = JSON.parse(req.body.toString());

  if (!contactId || !newContact) {
    res.sendStatus(400);

    return;
  }

  const {
    id,
    name,
    lastname,
    adress,
    city,
    country,
    email,
    number,
    companyId,
  } = newContact;

  const resposeData = await client.query(
    `UPDATE contacts set
    name = $1,
    lastname = $2,
    adress = $3,
    city = $4,
    country = $5,
    email = $6,
    number = $7,
    companyId = $8
    WHERE id = $9
    RETURNING *`,
    [name, lastname, adress, city, country, email, number, companyId, id],
  );

  res.statusCode = 200;

  res.send(resposeData.rows[0]);
};
