import { Context } from "hono";
import { getPrisma } from "..";
import { sign} from "hono/jwt";
import { signinSchema, signupSchema } from "../zod/zodSchema";


export const signup = async (c: Context) => {
  const prisma = getPrisma(c);

  const body = await c.req.json();

  const zodParsed = signupSchema.safeParse(body);

  if(!zodParsed.success){
    return c.json({
      message: "Wrong Inuts!",
      error: zodParsed.error.issues[0].message
    });
  }
  
  const { email, password, firstName, lastName } = body;


  try {

    const isUserPresent = await prisma.user.findUnique({
      where: { email }
    });

    if (isUserPresent) {
      return c.json({
        message: "User already present with this email!"
      });
    }

    const user = await prisma.user.create({
      data: {
        email,
        password,
        firstName,
        lastName
      }
    });

    const token = await sign({ id: user.id, firstName, lastName }, c.env.JWT_PASSWORD);

    return c.json({
      message: "Users created successfully!!",
      data: user,
      token
    });

  } catch (error) {
    return c.json({
      message: "Some error occured while signing up!",
      error
    });
  }
}

export const signin = async (c: Context) => {
  const prisma = getPrisma(c);

  const body = await c.req.json();

  const zodParsed = signinSchema.safeParse(body);

  if(!zodParsed.success){
    return c.json({
      message: "Wrong Inuts!",
      error: zodParsed.error.issues[0].message
    });
  }

  try {

    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
        password: body.password
      }
    });

    if(!user){
      return c.json({
        message: "User not found!"
      });
    }

    const token = await sign({ id: user.id,  firstName: user.firstName, lastName: user.lastName }, c.env.JWT_PASSWORD);

    return c.json({
      message: "Signed in Successfully!",
      user: user,
      token,
    });

  } catch (error) {

    return c.json({
      message: "Some error occured!",
      error
    });

  }

}


export const getAllUsers = async (c: Context) => {
  const prisma = getPrisma(c);

  const users = await prisma.user.findMany();

  return c.json({
    message: "All Users found successfully!!",
    data: users
  });
}


export const deleteAllUsers = async (c: Context) => {
  const prisma = getPrisma(c);

  const user = await prisma.user.deleteMany();

  return c.json({
    message: "All Users deleted successfully!!",
    data: user
  });
}