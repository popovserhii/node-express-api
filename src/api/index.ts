import express from 'express';
//import {Request, Response} from "express";
//import * as bodyParser from  "body-parser";

// init controllers
import questions from '../question/controller';

const initRouters = () => {
  const router = express();

  router.use('/questions', questions());

  return router;
};

export default initRouters;