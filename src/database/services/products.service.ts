import { Product } from '../../types/Product';
import { ServiceResponse } from '../../types/ServiceResponse';
import ProductModel, { ProductInputtableTypes } from '../models/product.model';

async function create(productInfo: ProductInputtableTypes)
  : Promise<ServiceResponse<Product>> {
  const newProduct = await ProductModel.create(productInfo);
  return { status: 'SUCCESSFUL', data: newProduct.dataValues };
}

export default {
  create,
};