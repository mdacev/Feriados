const { Router } = require('express');
const router = Router();

const { getInitData, getFeriado, updateFeriado } = require('../controllers/feriados.controller');

router.route('/')
    .get(getInitData)

router.route('/:id')
    .get(getFeriado)
    .put(updateFeriado)

module.exports = router;


