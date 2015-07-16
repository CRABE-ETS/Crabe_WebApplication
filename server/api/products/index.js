'use strict';

var express = require('express');
var products2 = require('./products.controller');

var router = express.Router();

router.get('/', products2.getAll);
router.get('/:id', products2.getOne);
router.post('/', products2.create);
router.put('/:id', products2.update);
router.delete('/:id', products2.delete);

module.exports = router;