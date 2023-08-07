const express = require('express');
const router = express();
const path = require('path');
const agenceRouter = require('./src/routes/agence.routes');
const destinationRoute = require('./src/routes/destination.routes');
router.use('/agence', agenceRouter);
router.use('/desti', destinationRoute);

module.exports = router;