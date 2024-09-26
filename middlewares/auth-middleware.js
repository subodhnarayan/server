const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const authMiddleware = async (req, res, next) => {
    const token = req.header("Authorization");

    if (!token) {
        return res.status(401).json({ message: "Unauthorized. Token not provided" });
    }

    const jwtToken = token.replace("Bearer", "").trim();  // Remove 'Bearer' from token and trim spaces
    console.log("Token from auth middleware:", jwtToken);

    try {
        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
        console.log("Verified token payload:", isVerified);

        const userData = await User.findOne({ email: isVerified.email }).select({ password: 0 });  // Fetch user data without password
        console.log("User data:", userData);

        if (!userData) {
            return res.status(401).json({ message: "Unauthorized. User not found" });
        }

        req.user = userData;
        req.token = token;
        req.userID = userData._id;

        next();
    } catch (error) {
        console.error("Authentication error:", error);
        return res.status(401).json({ message: "Unauthorized. Invalid token" });
    }
};

module.exports = authMiddleware;
