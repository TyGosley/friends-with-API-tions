const router = require('express').Router();

// import the thought controller
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thoughtController');

// api/thoughts
router.route('/').get(getAllThoughts).post(createThought);
// api/thoughts/:id
router.route('/:id').get(getThoughtById).put(updateThought).delete(deleteThought);
// api/thoughts/:id/reactions
router.route('/:id/reactions').post(addReaction);
router.route('/:id/reactions/:reactionId').delete(deleteReaction);
// export the router
module.exports = router;