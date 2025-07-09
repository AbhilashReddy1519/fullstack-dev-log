const bcrypt = require("bcrypt");

const encrytPassword = async (normalPassword) => {
    try {
        return await bcrypt.hash(normalPassword, 8);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const checkPassword = async (normalPassword, encrytedPassword) => {
    try {
        return await bcrypt.compare(normalPassword, encrytedPassword);
    } catch (err) {
        console.log(error);
        throw error;
    }
}

module.exports = { encrytPassword, checkPassword };