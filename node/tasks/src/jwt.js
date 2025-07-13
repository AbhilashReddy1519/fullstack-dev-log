const jwt = require("jsonwebtoken");

const SECRET_KEY = 'MAPS';

const generateToken = (payload) => {
    const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "1h"});
    return token;
};

const verifyToken = (token) => {
    try {
        const payload = jwt.verify(token, SECRET_KEY);
        return {isValidToken: true, payload };
    } catch (err) {
        console.log(err);
        return {isValidToken: false, payload: undefined};
    }
};

module.exports = { generateToken, verifyToken }; 



