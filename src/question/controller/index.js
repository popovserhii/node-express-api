const { Router: router } = require('express');

const { list } = require('./list');

module.exports = () => {
  const api = router();

  api.get('/', list());
  // here put any actions you want

  return api;
};