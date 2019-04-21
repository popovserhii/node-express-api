import { Router } from 'express';

import list from './list';

export default () => {
  const api = Router();

  api.get('/', list());
  // here put any actions you want

  return api;
};