import { Request, Response } from 'express';

export const getAll = (req: Request, res: Response) => {
  res.statusCode = 200;
  res.send();
};

export const addCompany = (req: Request, res: Response) => {
  const { newCompany } = JSON.parse(req.body.toString());

  if (!newCompany) {
    res.sendStatus(400);

    return;
  }

  res.statusCode = 201;
  res.send();
};

export const removeCompany = (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    res.sendStatus(400);

    return;
  }

  res.statusCode = 200;
  res.send();
};

export const editCompany = (req: Request, res: Response) => {
  const { id } = req.params;
  const { newCompany } = JSON.parse(req.body.toString());

  if (!id || !newCompany) {
    res.sendStatus(400);

    return;
  }

  res.statusCode = 200;

  res.send();
};
