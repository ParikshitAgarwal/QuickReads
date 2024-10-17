import { signinInput, signupInput } from "@parikshit45/medium-blog";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { decode, sign, verify } from 'hono/jwt'



const userApp = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET_KEY: string
    }
}>();

userApp.post('/signup', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const body = await c.req.json();

    const { success } = signupInput.safeParse(body);

    const secretKey = c.env.JWT_SECRET_KEY;

    if (!success) {
        c.status(403);
        return c.json({
            message: "Invalid inputs"
        })
    }

    const user = await prisma.user.create({
        data: {
            email: body.email,
            password: body.password
        }
    })

    if (!user) {
        c.status(403);
        return c.json({ error: "user not found" })
    }

    const token = await sign(
        {
            id: user.id
        },
        secretKey

    )
    return c.json({ jwt: token })
})

userApp.post('/signin', async (c) => {
    const body = await c.req.json();
    const secretKey = c.env.JWT_SECRET_KEY;

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const { success } = signinInput.safeParse(body);

    if (!success) {
        c.status(403);
        return c.json({
            message: "Invalid inputs"
        })
    }


    const user = await prisma.user.findUnique({
        where: {
            email: body.email,
            password: body.password
        }
    })

    if (!user) {
        c.status(403);
        return c.json({ error: "user not found" })
    }


    const token = await sign(
        {
            id: user.id
        },
        secretKey

    )
    return c.json({ jwt: token })
})

export default userApp

// 
