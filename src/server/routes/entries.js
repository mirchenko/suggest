import Router from 'koa-router';
import { Create, Patch, List, Delete } from '../controllers/entries';

export default new Router()
  .get('/entries', List)
  .post('/entries', Create)
  .patch('/entries/:id', Patch)
  .delete('/entries/:id', Delete);