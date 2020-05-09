import { Request, Response } from 'express';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Router = require('./router');

const app = express();
const appRouter = new Router();

app.use(cors());
app.use(bodyParser.json({ type: 'application/*+json' }))

app.use(appRouter.getRoutes());

app.get('/health', (req: Request, res: Response): void => {
  res.status(200).send({
    status: 'up'
  });
});

app.listen(8080, () => {
  console.log('User service up on port 8080');
});
