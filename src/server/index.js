import Koa from 'koa';
import bodyParser from 'koa-body';
import cors from '@koa/cors';
import mongoose from 'mongoose';
import paragraphsRoutes from './routes/paragraphs';
import entriesRoutes from './routes/entries';
import mongoConnect from '../../mongo-connect';

try {
  mongoose.connect(mongoConnect.connection);
  mongoose.Promise = Promise;
} catch(e) {
  console.log(e);
}

const PORT = process.env.PORT || 3000;

export default new Koa()
  .use(cors())
  .use(bodyParser())
  .use(paragraphsRoutes.routes())
  .use(entriesRoutes.routes())
  .listen(PORT, () => console.log(`Backend service listen on port: ${PORT}`));