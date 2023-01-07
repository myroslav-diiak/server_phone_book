import express from 'express';
import serverless from 'serverless-http';

const BASE_URL = '/.netlify/functions/server';

const app = express();

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    'hello': 'hi!',
  });
});

app.use(BASE_URL, router);

export const handler = serverless(app);
