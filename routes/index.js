const router = require('express').Router();
// import all of the API routes from /api/index.js
const apiRoutes = require('./api');
// add prefix of `/api` to all of the api routes imported from the `api` directory
router.use('/api', apiRoutes);
// if no API routes are hit, send the wrong route message
router.use((req, res) => res.send('Wrong Route!'));

// export the router
module.exports = router;