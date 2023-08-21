import { Router } from 'express';
import loginController from '../database/controllers/login.controller';

const loginRouter = Router();

loginRouter.post('/login', loginController.login);

export default loginRouter;
