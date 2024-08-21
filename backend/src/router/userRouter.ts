import { Hono } from 'hono'
import { deleteAllUsers, getAllUsers, signin, signup } from '../controller/userController';

export const userRouter = new Hono();

userRouter.get('/getAllUsers', getAllUsers);
userRouter.post('/signup', signup);
userRouter.post('/signin', signin);
userRouter.delete('/deleteAllUsers', deleteAllUsers);