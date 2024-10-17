import { createBlogInput, updateBlogInput } from "@parikshit45/medium-blog";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono"
import { verify } from "hono/jwt";
type Variables = {
  userId: string
}
const blogApp = new Hono<{
  Variables: Variables
  Bindings: {
    DATABASE_URL: string
    JWT_SECRET_KEY: string
  }
}>()

blogApp.use('/*', async (c, next) => {
  const header = c.req.header('authorization') || '';

  const token = header.split(" ")[1];
  const secretKey = c.env.JWT_SECRET_KEY;
  const response = await verify(token, secretKey);

  if (response.id) {
    const { id } = response;
    const userId = id as string;
    console.log(userId)
    c.set('userId', userId)
    await next();
  } else {
    c.status(403);
    return c.json({ error: "unauthorized" })
  }
})

blogApp.post('/', async (c) => {
  const prisma = new PrismaClient(
    { datasourceUrl: c.env.DATABASE_URL }
  ).$extends(withAccelerate())
  const userId = c.get('userId');
  const body = await c.req.json();
  console.log(userId)

  const { success } = createBlogInput.safeParse(body);
  if (!success) {
    c.status(403);
    return c.json({
      message: "Invalid inputs"
    })
  }


  try {
    const post = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        // published: body.published,
        authorId: userId
      }
    })
    console.log(post)


    return c.json({
      message: "Post Generated SuccessFully",
      id: post.id
    })
  } catch (e) {
    c.status(403);
    console.log(e);
    return c.json({
      message: "Something went wrong please try again"
    })

  }
})

blogApp.put('/', async (c) => {
  const body = await c.req.json();
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate())

  const { success } = updateBlogInput.safeParse(body);
  if (!success) {
    c.status(403);
    return c.json({
      message: "Invalid inputs"
    })
  }

  try {
    const post = await prisma.post.update({
      where: {
        id: body.id,
      },
      data: {
        title: body.title,
        content: body.content
      }
    })
    return c.json({
      message: "Post updated successfully",
      id: post.id
    })
  } catch (error) {
    c.status(403);
    console.log(error);
    return c.json({
      message: "Something went wrong please try again"
    })

  }
})



blogApp.get('/bulk', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate())

  try {
    const posts = await prisma.post.findMany()
    // console.log(posts)
    return c.json({ posts })
  } catch (error) {
    c.status(403);
    console.log(error);
    return c.json({
      message: "Something went wrong please try again"
    })

  }
})

blogApp.get('/:id', async (c) => {
  const id = c.req.param('id');
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate())
  try {
    const post = await prisma.post.findUnique({
      where: {
        id: Number(id)
      }
    })

    return c.json(post)


  } catch (error) {
    c.status(403);
    return c.json({
      message: "Something went wrong please try again"
    })
  }
})

blogApp.delete('/:id', async (c) => {
  const id = c.req.param('id');

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate())

  try {
    await prisma.post.delete({
      where: {
        id: Number(id)
      }
    });
    return c.text("post deleted")
  } catch (error) {
    c.status(403);
    return c.json({
      message: "Something went wrong please try again"
    })
  }
})

export default blogApp
