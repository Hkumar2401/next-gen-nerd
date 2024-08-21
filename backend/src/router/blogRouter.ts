import { Hono } from "hono";
import { clearBlogsTable, createBlog, getAllBlogs, getBlog, getBlogsTable, updateBlog } from "../controller/blogController";
import { authMiddleware } from "../middlewares/authMiddleware";

export const blogRouter = new Hono();

blogRouter.post('/createBlog', authMiddleware, createBlog);
blogRouter.get('/getAllBlogs', authMiddleware, getAllBlogs);
blogRouter.get('/getBlog/:blogId', authMiddleware, getBlog);
blogRouter.put('/updateBlog/:blogId', authMiddleware, updateBlog);
blogRouter.get('/getBlogsTable', getBlogsTable);
blogRouter.delete('/clearBlogsTable', clearBlogsTable);