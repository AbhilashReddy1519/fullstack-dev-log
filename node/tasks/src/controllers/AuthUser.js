const User = require("../models/User");

const addNewUser = async (req, res) => {
    try {
        const {name, email, age, password } = req.body;
        const user = new User({name, email, age, password});
        await user.save();

        return res.send(user);

    } catch(err) {
        console.error(err);
        return res.send({message: err.message});
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.AuthenticateUser(email, password);
        console.info(`User with ${email} successfully logged in.`);
        return res.send(user);
    } catch(err) {
        console.error(err);
        return res.send({message: `Login Failed`});
    }
}

module.exports = { loginUser, addNewUser};
