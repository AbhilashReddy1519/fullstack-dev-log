const User = require("../models/User");

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.AuthenticateUser(email, password);
        console.info(`User with ${email} successfully logged in.`);
        return res.send(user);
    } catch(err) {
        console.error(err);
        res.send({message: `Login Failed`});
    }
}

module.exports = loginUser;
