const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.recipe.get);

router.post('/', auth(), controllers.recipe.post);

router.put('/:id', auth(), controllers.recipe.put);

router.delete('/:id', auth(), controllers.recipe.delete);

module.exports = router;