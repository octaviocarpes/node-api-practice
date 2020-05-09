import { HttpRequest } from '../interfaces';
const User = require('../model/user');

module.exports = class UserService {
  constructor () {}

  createUser (): HttpRequest {

    return {
      status: 200,
      message: null,
      data: {}
    }
  }

  getUser (id: string): HttpRequest {

    return {
      status: 200,
      message: null,
      data: {}
    }
  }

  updateUser (user: typeof User): HttpRequest {

    return {
      status: 200,
      message: null,
      data: {}
    }
  }

  deleteUser (id: string): HttpRequest {

    return {
      status: 200,
      message: null,
      data: {}
    }
  }
}