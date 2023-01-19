/* eslint-disable @typescript-eslint/no-var-requires */
import { Request, Response } from 'express';

const client = require('../data/db');

export const getAll = async(req: Request, res: Response) => {
  const allCompanies = await client.query(`SELECT *
    FROM companies 
    ORDER BY id ASC`);

  res.statusCode = 200;
  res.send(allCompanies.rows);
};

export const addCompany = async(req: Request, res: Response) => {
  const { newCompany } = req.body;

  if (!newCompany) {
    res.sendStatus(400);

    return;
  }

  const { id, name, link, logolink } = newCompany;

  const resposeData = await client.query(
    `INSERT INTO companies (id, name, link, logolink)
    values ($1, $2, $3, $4) RETURNING *`,
    [id, name, link, logolink],
  );

  res.statusCode = 201;
  res.send(resposeData.rows[0]);
};

export const removeCompany = async(req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    res.sendStatus(400);

    return;
  }

  const resposeData = await client.query(
    'DELETE FROM companies WHERE id = $1 RETURNING *',
    [id],
  );

  res.statusCode = 200;
  res.send(resposeData.rows[0]);
};

export const editCompany = async(req: Request, res: Response) => {
  const { companyId } = req.params;
  const { newCompany } = req.body;

  if (!companyId || !newCompany) {
    res.sendStatus(400);

    return;
  }

  const { name, link, logolink } = newCompany;

  const resposeData = await client.query(
    `UPDATE companies set name = $1, link = $2, logolink = $3 WHERE id = $4 RETURNING *`,
    [name, link, logolink, companyId],
  );

  res.statusCode = 200;

  res.send(resposeData.rows[0]);
};
