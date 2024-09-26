const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
    try {
        res
            .status(200)
            .send("welcome to mern series using controller");

    } catch (error) {
        console.log(error);
    }
};

const register = async (req, res) => {
    try {
        // console.log(req.body);
        const { username, email, phone, password } = req.body;

        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: "user already exist" });
        }

        //hash the password
        // const saltRound = 10;
        // const hash_password = await bcrypt.hash(password, saltRound);

        const userCreated = await User.create({
            username,
            email,
            phone,
            password,     //: hash_password,
        });
        res.status(201).json({
            msg: "registration sucessfull",
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString(),
        });
    }
    catch (error) {
        // res.status(500).send({ msg: "internal server error" });
        next(error);
    }

}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the user exists
        const userExist = await User.findOne({ email });
        if (!userExist) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Compare passwords
        // const isMatch = await bcrypt.compare(password, userExist.password);
        const isMatch = await userExist.comparepassword(password);
        if (isMatch) {
            res.status(200).json({
                msg: "Login successful",
                token: await userExist.generateToken(),
                userId: userExist._id.toString(),
            });
        } else {
            res.status(401).json({ message: "Invalid email or password" });
        }
    } catch (error) {
        //console.error(error);
        // res.status(500).json({ message: "Internal server error" });
        next(error);
    }
};

//user logic
//to send user data

const user = async (req, res) => {
    try {
        const userData = req.user;
        console.log(userData);
        return res.status(200).json({ userData });  //passing it for the client
    }
    catch (error) {
        console.log(`error from the user route ${error}`);
    }
}

module.exports = { home, register, login, user };