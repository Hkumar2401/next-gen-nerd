import z from 'zod';

export const signupSchema = z.object({
    email: z.string({ message: "email - Wrong input!" }),
    password: z.string({ message: "password - Wrong input!" }),
    firstName: z.string({ message: "firstName - Wrong input!" }),
    lastName: z.string({ message: "lastName - Wrong input!" })
});

export const signinSchema = z.object({
    email: z.string({ message: "email - Wrong input!" }),
    password: z.string({ message: "password - Wrong input!" }),
});

export const blogSchema = z.object({
    title: z.string({ message: "title - Wrong Input!" }),
    description: z.string({ message: "description - Wrong Input!" })
});

export const updateBlogSchema = z.object({
    title: z.string({ message: "title - Wrong Input!" }).optional(),
    description: z.string({ message: "description - Wrong Input!" }).optional()
});

