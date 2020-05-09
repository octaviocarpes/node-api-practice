import { Request, Response } from 'express';
const UserService  = require('./services/user-service');
const router = require('express').Router();

module.exports = class Router {
  appRouter;
  userService;
  BASE_PATH = '/api/user';

  constructor () {
    this.appRouter = router;
    this.userService = new UserService();
    this.initRoutes();
  }

  getRoutes (): Router {
    return this.appRouter
  }

  initRoutes () {
    this.appRouter.post(this.BASE_PATH, (req: Request, res: Response) => {
      this.userService.createUser(req.body);
    });

    this.appRouter.get(this.BASE_PATH, (req: Request, res: Response) => {
      res.send('Hello World!')
    })

    this.appRouter.put(this.BASE_PATH, (req: Request, res: Response) => {
      res.send('Hello World!')
    })

    this.appRouter.delete(this.BASE_PATH, (req: Request, res: Response) => {
      res.send('Hello World!')
    })
  };
};
