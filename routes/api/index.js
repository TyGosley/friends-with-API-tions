// connect to the user and thought routes
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

// add prefix of /users and /thoughts
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);
// export the router
module.exports = router;