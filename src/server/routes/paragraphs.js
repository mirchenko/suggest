import Router from 'koa-router';
import { List } from '../controllers/paragraphs';

export default new Router()
  .get('/paragraphs', List);