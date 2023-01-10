/* eslint-disable @typescript-eslint/no-var-requires */
import express from 'express';
import serverless from 'serverless-http';
import { router } from './routers/router';

const client = require('./data/db');

const BASE_URL = '/.netlify/functions/server';

const app = express();

app.use(express.json());

client.connect();

router.get('/', (req, res) => {
  res.send(`
  <h1>Phone Book Api</h1>
  <h2>GET: /contacts</h2> <p>to get all contacts</p>
  <br>
  <h2>GET: /companies</h2> <p>to get all companies</p>
  <br>
  <h2>POST: /companies</h2> <p>to add company (returns new company)</p>
  <br>
  <h2>POST: /contacts</h2> <p>to add contact (returns new contact)</p>
  <br>
  <h2>DELETE: /contacts/:id</h2> <p>to remove contact (returns deleted contact)</p>
  <br>
  <h2>DELETE: /companies/:id</h2> <p>to remove company (returns deleted company)</p>
  <br>
  <h2>PATCH: /contacts/:id</h2> <p>to edit contact (returns updated contact)</p>
  <br>
  <h2>PATCH: /companies/:id</h2> <p>to edit company (returns updated company)</p>
  <br>
  `);
});

app.use(BASE_URL, router);

export const handler = serverless(app);
