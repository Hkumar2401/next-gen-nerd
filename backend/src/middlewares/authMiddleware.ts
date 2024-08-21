import { createMiddleware } from "hono/factory";
import { Context } from "hono";
import { verify } from "hono/jwt";

export const authMiddleware = createMiddleware(async (c: Context, next) => {

    const token: any = c.req.header('authorization');
    if (!token) {
        return c.json({
            message: "error : unauthorized"
        });
    }

    try {

        const verified = await verify(token, c.env.JWT_PASSWORD);

        if (verified.firstName) {
            c.set('userId', verified.id)
            await next();
        }

    } catch (error) {
        return c.json({
            message: "Wrong token!",
        })
    }



})