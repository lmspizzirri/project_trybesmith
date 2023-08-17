import { Request, Response } from 'express';
import productsService from '../services/products.service';

async function create(req: Request, res: Response): Promise<Response> {
  const { data } = await productsService.create(req.body);
  return res.status(201).json(data);
}

async function getAll(_req: Request, res: Response): Promise<Response> {
  const { data } = await productsService.getAll();
  return res.status(200).json(data);
}

export default {
  create,
  getAll,
};