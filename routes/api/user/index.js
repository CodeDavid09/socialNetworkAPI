const router = require("express").Router();
const {
    createUser,
    getAllUsers,
    getUserById,
    updateUserById,
    addFriend,
    deleteUserById,
    removeFriend,
} = require("../../../controllers/userController");

router.route("/").post(createUser).get(getAllUsers);

router
    .route("/:Id")
    .get(getUserById)
    .put(updateUserById)
    .delete(deleteUserById);

router.route("/:Id/friends/:friendId").post(addFriend).put(removeFriend);

module.exports = router;