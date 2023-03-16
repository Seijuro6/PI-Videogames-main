const { Router } = require('express');
const router = Router();
const morgan = require('morgan');
const express = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videogamesRouter = require('./videogamesRouter');
const generosRouter = require('./generosRouter');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use(express.json());
router.use(morgan('dev')); 

router.get('/videogames/name', videogamesRouter);
// router.get('/videogames/:idVideoGame', videogamesRouter);
// router.post('/videogames', videogamesRouter);
// router.get('/genres', generosRouter);


module.exports = router;
