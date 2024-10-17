import { Hono } from 'hono'
import userApp from './routes/User';
import blogApp from './routes/Blog';

const app = new Hono().basePath('/api/v1');


app.route('/user',userApp)

app.route('/blog',blogApp)







export default app
