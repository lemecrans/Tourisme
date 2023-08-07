const router = require('express').Router();
const agenceDb = require('../db/agence.db');
const Agence = require('../models/agence');
const Controll = require('../controllers/AgenceController');

// localhost:3000/api/agence/generate
router.get('/generate', Controll.generateData);

// localhost:3000/api/agence/64c57f94d1d6db7ae0325383
router.get('/:id', Controll.getById);

// localhost:3000/api/agence/
router.get('/', Controll.getAll);

// localhost:3000/api/agence/
router.post('/', Controll.signup);

// localhost:3000/api/agence/
router.post('/login', Controll.login);

// localhost:3000/api/agence/
router.put('/mofidAgence', Controll.modifAgence);

// localhost:3000/api/agence/64c67e89651d776487275fe6
router.delete('/delete/:id', Controll.deleteAgence);

module.exports = router;
