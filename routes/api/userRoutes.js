const router = require('express').Router();

// import the user controller
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/userController');

// api/users
router.route('/').get(getAllUsers).post(createUser);
// api/users/:id
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);
// api/users/:id/friends/:friendId
router.route('/:id/friends/:friendId').post(addFriend).delete(deleteFriend);

// export the router
module.exports = router;