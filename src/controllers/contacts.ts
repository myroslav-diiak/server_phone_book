import { Request, Response } from 'express';
import client from '../data/db';

export const getAll = async(req: Request, res: Response) => {
  const allContacts = await client.query('SELECT * FROM contacts');

  res.statusCode = 200;
  res.send(allContacts.rows);
};

export const addContact = (req: Request, res: Response) => {
  const { newContact } = JSON.parse(req.body.toString());

  if (!newContact) {
    res.sendStatus(400);

    return;
  }

  res.statusCode = 201;
  res.send();
};

export const removeContact = (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    res.sendStatus(400);

    return;
  }

  res.statusCode = 200;
  res.send();
};

export const editContact = (req: Request, res: Response) => {
  const { id } = req.params;
  const { newContact } = JSON.parse(req.body.toString());

  if (!id || !newContact) {
    res.sendStatus(400);

    return;
  }

  res.statusCode = 200;

  res.send();
};
