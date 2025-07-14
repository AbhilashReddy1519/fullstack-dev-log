import { useState } from "react";
import {isEmail} from "validator"
import { loginUserApi } from "../apis/user-api";

const LoginScreen = () => {

    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    });

    const validateCredentials = ({email, password}) => {
        if(isEmail(email) && password?.length >= 8) {
            return true;
        }
        return false;
    };

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!validateCredentials(credentials)) { return };
        await loginUserApi({...credentials});
    };



    return (
        <>
            <div className="login">
                <h1 className="ui heading center">Login</h1>
                <div className="form">
                    <form className="ui form" style={{
                        margin: "0px 20%"
                    }} onSubmit={handleSubmit}>
                        <div className="field">
                            <label>Email</label>
                            <input type="email" name="email" placeholder="Enter your email..." value={credentials.email} onChange={handleChange}/>
                        </div>
                        <div className="field">
                            <label>Password</label>
                            <input type="password" name="password" placeholder="Enter Password" value={credentials.password} onChange
                            ={handleChange}/>
                        </div>
                        <button className="ui button primary" type="submit" style={{
                            width: "100%",

                        }}>Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginScreen;