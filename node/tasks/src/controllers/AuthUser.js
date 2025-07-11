const User = require("../models/User");

const addNewUser = async (req, res) => {
    try {
        const {name, email, age, password } = req.body;
        const user = new User({name, email, age, password});
        const token = user.generateUserToken();
        await user.save();
        console.info("User signup Success.")
        return res.send({ user , token });

    } catch(err) {
        console.error(err);
        return res.send({message: err.message});
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.AuthenticateUser(email, password);
        const token = user.generateUserToken();
        console.info(`User with ${email} successfully logged in.`);
        return res.send({ user, token });
    } catch(err) {
        console.error(err);
        return res.send({message: `Login Failed`});
    }
}

const deleteUser = async (req, res) => {
    const { user } = req;
    if (!user) {
        return res.status(401).send({ message: "Unauthorized: No user found in request." });
    }
    console.log(user._id);
    const userId = user._id;
    const deleteResult = await User.deleteOne({_id: userId});
    if(!deleteResult.deletedCount) {
        console.error(`Delete failed: User with Id: ${userId} was not found`);
        return res.send({message: `Delete failed: User with Id: ${userId} was not found`});
    }
    console.info(`Delete Success: User with Id: ${userId} deleted`);
    res.send({message: "Delete Success."});
}

module.exports = { loginUser, addNewUser, deleteUser };
