const {model , Schema} = require("mongoose");
const { isEmail } = require("validator");
const { encrytPassword, checkPassword } = require("../bcrypt");

// SPA: Secure Password Authentication is also done.

const UserSchema = new Schema({
    name: {type: String, trim: true,required: true},
    email: {type: String, trim: true, lowercase: true, unique: true, required: true, validate: {
        validator(email) {
            return isEmail(email);
        }
    }},
    age: {type: Number, required: true, validate: {
        validator(age) {
            if(age <= 6) {
                throw new Error("Age must be always positive and greater than \"6\" years.")
            } 
            return true;
        }
    }},
    password: {type: String, required: true, minlength: 8, validate: {
        validator(password) {
            if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])[^\\\s]{8,}$/.test(password)) 
                throw new Error("Password must be at least 8 characters, include uppercase, lowercase, digit, special character, and not contain spaces or backslashes."); 
            return true;
        }
    }}
}, 
{
    timestamps: true
});


UserSchema.statics.AuthenticateUser = async (email, password) => {
    try {
        const user =  await User.findOne({ email });

        if(!user) {
            throw new Error("Invalid email, No user Exists");
        }

        const isMatch = await checkPassword(password, user.password);

        if(!isMatch) {
            throw new Error("Invalid Credentials/Password");
        }
        console.log("Login Successful.")
        return user;
    } catch(err) {
        console.log(err);
        throw err;
    }
}

UserSchema.pre('save', async function (next) { // here we enter into function before exceuting function.
    const user = this;
    if(user.modifiedPaths().includes("password")) {
        user.password = await encrytPassword(user.password);
    }
    next(); // this will return function to save point
})

const User = model("User", UserSchema);

module.exports = User;