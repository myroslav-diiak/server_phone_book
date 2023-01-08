import { Request, Response } from 'express';

import * as contactsService from '../services/contacts';

export const getAll = (req: Request, res: Response) => {
  const data = contactsService.getAllContacts();

  res.send(data);
};

export const addContact = (req: Request, res: Response) => {
  const { newContact } = JSON.parse(req.body.toString());

  if (!newContact) {
    res.sendStatus(400);

    return;
  }

  res.statusCode = 201;
  res.send(contactsService.addContact(newContact));
};

export const removeContact = (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    res.sendStatus(400);

    return;
  }

  res.statusCode = 200;
  res.send(contactsService.removeContact(+id));
};

export const editContact = (req: Request, res: Response) => {
  const { id } = req.params;
  const { newContact } = JSON.parse(req.body.toString());

  if (!id || !newContact) {
    res.sendStatus(400);

    return;
  }

  res.statusCode = 200;

  res.send(contactsService.editContact(+id, newContact));
};
