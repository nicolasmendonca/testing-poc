import { Request, Response } from 'express';
import { findUsers, createUser } from '../logic/users'

export class UsersController {
  static async get(req: Request, res: Response) {
      const users = await findUsers()
      return res.json(users);
    };
  static async post(req: Request, res: Response) {
      const users = await createUser(req.body)
      return res.json(users);
    };
}
