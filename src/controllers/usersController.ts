import { Request, Response } from 'express';
import { User } from '../services/UserServices';

export class UsersController {
  static async get(req: Request, res: Response) {
      const users = await req.context.services.userServices.findUsers()
      return res.json(users);
    };
  static async post(req: Request, res: Response) {
      const users = await req.context.services.userServices.createUser(req.body as Omit<User, 'id'>)
      return res.json(users);
    };
}
