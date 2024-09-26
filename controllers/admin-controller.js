const User = require("../models/user-model");
const Contact = require("../models/contact-model");

const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find({}, { password: 0 });
        console.log(users);
        if (!users || users.length === 0) {
            return res.status(404).json({ message: "No user found" });
        }
        return res.status(200).json(users);
    } catch (error) {
        next(error);
    }
};

const getUserById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await User.findOne({ _id: id }, { password: 0 });
        if (!result) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json({ result });
    } catch (error) {
        next(error);
    }
};



//user update logic

const updateUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedUserData = req.body;

        const updatedData = await User.updateOne({ _id: id },
            {
                $set: updatedUserData,
            });
        return res.status(200).json(updatedData);
    } catch (error) {
        console.log(error);
    }
}


const getAllContacts = async (req, res, next) => {
    try {
        const contacts = await Contact.find();
        console.log(contacts);
        if (!contacts || contacts.length === 0) {
            return res.status(404).json({ message: "No contact found" });
        }
        return res.status(200).json(contacts);
    } catch (error) {
        next(error);
    }
};

const deleteUserById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await User.deleteOne({ _id: id });
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.json({ message: "User deleted successfully" });
    } catch (error) {
        next(error);
    }
};

const deleteContactById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await Contact.deleteOne({ _id: id });
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "Contact not found" });
        }
        return res.json({ message: "Contact deleted successfully" });
    } catch (error) {
        next(error);
    }
};

module.exports = { getAllUsers, getUserById, updateUserById, getAllContacts, deleteUserById, deleteContactById };
