import { Hono } from 'hono'
import userApp from './routes/User';
import blogApp from './routes/Blog';
import { cors } from 'hono/cors'
const app = new Hono().basePath('/api/v1');

app.use('/*',cors())

app.route('/user',userApp)

app.route('/blog',blogApp)







export default app
