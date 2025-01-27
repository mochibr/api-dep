/*exports.gatAllUsers = (req, res) => {

    const users = [
        {"id": 1, "name": "Anuj Sir"},
        {"id": 2, "name": "Raman Sir"},
    ];

    res.json(users);
}


exports.singleUser = (req, res) => {
    console.log(req);
}*/

const User = require('../models/userModel');

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get user by ID
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
        return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
  
// Create a new user
exports.createUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a user by ID
exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
        return res.status(404).json({ message: 'User not found' });
        }
        await user.deleteOne(); // Delete the user
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a user by ID
exports.updateUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const user = await User.findById(req.params.id);

        if (!user) {
        return res.status(404).json({ message: 'User not found' });
        }

        // Update the user fields
        user.name = name || user.name;
        user.email = email || user.email;
        user.password = password || user.password;

        const updatedUser = await user.save();

        res.json({
        message: 'User updated successfully',
        user: updatedUser,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};