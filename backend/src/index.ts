import { Context, Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { userRouter } from './router/userRouter';
import { blogRouter } from './router/blogRouter';


const app = new Hono();

app.route('/user', userRouter);
app.route('/blog', blogRouter);

export default app

export function getPrisma(c: Context){
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate());
return prisma;
}