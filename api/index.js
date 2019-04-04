const express = require('express');

// init controllers
const questions = require('../question/controller');

const initRouters = () => {
  const router = express();

  router.use('/questions', questions());

  return router;
};

module.exports = initRouters;