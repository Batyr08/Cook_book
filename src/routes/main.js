const router = require('express').Router();

const render = require('../lib/render');

router.get('/', async (req, res) => {

    res.send('OK');
  });

module.exports = router;
