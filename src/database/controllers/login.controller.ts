import { Request, Response } from 'express';
import loginService from '../services/login.service';

async function login(req: Request, res: Response): Promise<Response> {
  const { status, data } = await loginService.login(req.body);
  if (status === 'INVALID_DATA') return res.status(400).json(data);
  if (status === 'UNAUTHORIZED') return res.status(401).json(data);
  return res.status(200).json(data);
}

export default {
  login,
};