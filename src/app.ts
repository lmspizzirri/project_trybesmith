import express from 'express';
import productsRouter from './routes/products.router';
// import ordersRouter from './routes/oders.router';
import loginRouter from './routes/login.router';

const app = express();

app.use(express.json());

app.use(productsRouter);
// app.use(ordersRouter);
app.use(loginRouter);

export default app;
