import { Router } from 'express';
import productsController from '../database/controllers/products.controller';
import nameValidation from '../database/middlewares/nameValidation';
import priceValidation from '../database/middlewares/priceValidation';

const productsRouter = Router();

productsRouter.post('/products', nameValidation, priceValidation, productsController.create);
productsRouter.get('/products', productsController.getAll);

export default productsRouter;
