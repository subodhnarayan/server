const adminMiddleware = async (req, res, next) => {   //dont forget to write the next
    try {
        console.log(req.user);
        const adminRole = req.user.isAdmin;
        if (!adminRole) {
            return res.status(403).json({ message: "Access denied.User is not a admin" });
        }
        //if user is admin,procced to the next middleware
        next();
    }
    catch (error) {
        next(error);
    }
}

module.exports = adminMiddleware;