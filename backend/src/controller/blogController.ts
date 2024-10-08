import { Context } from "hono";
import { getPrisma } from ".."
import { blogSchema, updateBlogSchema } from "../zod/zodSchema";

export const createBlog = async (c: Context) => {
    const prisma = getPrisma(c);

    const body = await c.req.json();

    const authorId = c.get('userId');

    const zodParsed = blogSchema.safeParse(body);

    if (!zodParsed.success) {
        return c.json({
            message: "Wrong Inputs!",
            success: false,
            error: zodParsed.error.issues[0].message
        });
    }

    const { title, description} = body;

    try {

        const blog = await prisma.blog.create({
            data: {
                title,
                description,
                authorId
            }
        });

        return c.json({
            message: "Blog created successfully!",
            success: true,
            blog: blog
        });

    } catch (error) {
        return c.json({
            message: "Some error occured!",
            success: false,
            error
        });
    }

}

export const getBlog = async (c: Context) => {
    const prisma = getPrisma(c);

    const blogId = c.req.param('blogId');

    try {
        const blog = await prisma.blog.findMany({
            where: {
                id: parseInt(blogId)
            }
        });

        return c.json({
            message: "Blogs found!",
            success: true,
            blog
        });

    } catch (error) {
        return c.json({
            message: "Some error occured!",
            success: false,
            error
        });
    }
}

export const getAllBlogs = async (c: Context) => {
    const prisma = getPrisma(c);

    const authorId = c.get('userId');

    try {
        const blogs = await prisma.blog.findMany({
            where: {
                authorId: parseInt(authorId)
            }
        });

        return c.json({
            message: "Blogs found!",
            success: true,
            blogs
        });

    } catch (error) {
        return c.json({
            message: "Some error occured!",
            success: false,
            error
        });
    }
}

export const getBlogsTable = async (c: Context) => {
    const prisma = getPrisma(c);

    try {
        const blogs = await prisma.blog.findMany();

        return c.json({
            message: "Blogs table found!",
            success: true,
            blogs
        });

    } catch (error) {
        return c.json({
            message: "Some error occured!",
            success: false,
            error
        });
    }
}

export const clearBlogsTable = async (c: Context) => {
    const prisma = getPrisma(c);

    try {
        const blogs = await prisma.blog.deleteMany();

        return c.json({
            message: "Blogs table data deleted!",
            success: true,
            blogs
        });

    } catch (error) {
        return c.json({
            message: "Some error occured!",
            success: false,
            error
        });
    }
}


export const updateBlog = async (c: Context) =>{

    const prisma = getPrisma(c);

    const body = await c.req.json();


    const zodParsed = updateBlogSchema.safeParse(body);

    if (!zodParsed.success) {
        return c.json({
            message: "Wrong Inputs!",
            success: false,
            error: zodParsed.error.issues[0].message
        });
    }
    
    const {title, description} = body;
    
    const blogId = c.req.param('blogId');

    try{

        const updatedBlog = await prisma.blog.update({
            where: {
                id: parseInt(blogId)
            },
            data: {
                title,
                description
            }
        });

        return c.json({
            message: "Blog updated successfully!",
            success: true,
            updatedBlog
        });
        
    } catch(error){
        return c.json({
            message: "Some error occured!",
            success: false,
            error
        });
    }
    

}