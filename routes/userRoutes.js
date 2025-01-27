const express = require("express")
const router = express.Router();
const userController = require("../controllers/userController");

router.get('/users', userController.getAllUsers); // Get all users
router.get('/users/:id', userController.getUserById); // Get user by ID
router.post('/users', userController.createUser); // Create a new user
router.delete('/users/:id', userController.deleteUser); // Delete user by ID
router.put('/users/:id', userController.updateUser); // Update user by ID


/*route.gatAllUsers = (req, res) => {

    const users = [
        {"id": 1, "name": "Anuj Sir"},
        {"id": 2, "name": "Raman Sir"},
    ];


    res.json(users);
}*/

module.exports = router;