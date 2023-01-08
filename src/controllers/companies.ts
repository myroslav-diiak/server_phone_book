import { Request, Response } from 'express';

import * as companiesService from '../services/companies';

export const getAll = (req: Request, res: Response) => {
  const data = companiesService.getAllCompanies();

  res.statusCode = 200;
  res.send(data);
};

export const addCompany = (req: Request, res: Response) => {
  const { newCompany } = JSON.parse(req.body.toString());

  if (!newCompany) {
    res.sendStatus(400);

    return;
  }

  res.statusCode = 201;
  res.send(companiesService.addCompany(newCompany));
};

export const removeCompany = (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    res.sendStatus(400);

    return;
  }

  res.statusCode = 200;
  res.send(companiesService.removeCompany(+id));
};

export const editCompany = (req: Request, res: Response) => {
  const { id } = req.params;
  const { newCompany } = JSON.parse(req.body.toString());

  if (!id || !newCompany) {
    res.sendStatus(400);

    return;
  }

  res.statusCode = 200;

  res.send(companiesService.editCompany(+id, newCompany));
};
