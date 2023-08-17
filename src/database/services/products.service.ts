import { Product } from '../../types/Product';
import { ServiceResponse } from '../../types/ServiceResponse';
import ProductModel, { 
  ProductInputtableTypes, ProductSequelizeModel } from '../models/product.model';

async function create(productInfo: ProductInputtableTypes)
  : Promise<ServiceResponse<Product>> {
  const newProduct = await ProductModel.create(productInfo);
  return { status: 'SUCCESSFUL', data: newProduct.dataValues };
}

async function getAll(): Promise<ServiceResponse<ProductSequelizeModel[]>> {
  const newProduct = await ProductModel.findAll();
  return { status: 'SUCCESSFUL', data: newProduct };
} 

export default {
  create,
  getAll,
};