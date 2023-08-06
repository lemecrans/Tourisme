const router = require('express').Router();
const agenceDb = require('../db/desti.db');
const Agence = require('../models/destination');
const Controll = require('../controllers/DestinationController');

// localhost:3000/api/agence/generate
router.get('/generate', Controll.generateData);

// localhost:3000/api/agence/64c57f94d1d6db7ae0325383
router.get('/:id', Controll.getById);

// localhost:3000/api/agence/
router.get('/', Controll.getAll);

// localhost:3000/api/agence/
router.put('/', Controll.modifDesti);

// localhost:3000/api/agence/64c67e89651d776487275fe6
router.delete('/:id', Controll.deleteDesti);

module.exports = router;