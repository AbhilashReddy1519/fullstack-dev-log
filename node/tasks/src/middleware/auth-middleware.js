const { verifyToken } = require("../jwt");
const User = require("../models/User");

const authMiddleware = async (req, res, next) => {
    // token is sent in the form of 'Authorization': 'Bearer YOUR_TOKEN_HERE'
    // fetch('/protected-route', {
    //     method: 'GET',
    //     headers: {
    //         'Authorization': 'Bearer YOUR_TOKEN_HERE'
    //     }
    // });
    const { authorization } = req.headers;
    if(!authorization) {
        return res.send({message: "Please Send Valid Token"});
    }
    const token = authorization.substring(7);   
    const { isValidToken , payload } = verifyToken(token);
    if(isValidToken) {
        console.log("Is a valid token", payload);
        const user = await User.findOne({_id: payload.id});
        if (!user) {
            return res.status(401).send({ message: "Unauthorized: User not found." });
        }
        req.token = token;
        req.user = user;
        next();
    } else {
        console.warn("Token is invalid");
        return res.send({message: "Please Send a valid token."})
    }
}

module.exports = { authMiddleware };