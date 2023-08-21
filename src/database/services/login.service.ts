import bcrypt from 'bcryptjs';
import { Login } from '../../types/Login';
import { ServiceResponse } from '../../types/ServiceResponse';
import { Token } from '../../types/Token';
import UserModel from '../models/user.model';
import jwt from '../../utils/jwt';

async function login(loginInput: Login)
  : Promise<ServiceResponse<Token>> {
  if (!loginInput.username || !loginInput.password) { 
    return { status: 'INVALID_DATA', data: { message: '"username" and "password" are required' } };
  }
  const userData = await UserModel.findOne({ where: { username: loginInput.username } });
  if (!userData || !bcrypt.compareSync(loginInput.password, userData.dataValues.password)) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
  }
  const { id, username } = userData.dataValues;
  const token = jwt.sign({ id, username });
  return { status: 'SUCCESSFUL', data: { token } };
}

export default {
  login,
};