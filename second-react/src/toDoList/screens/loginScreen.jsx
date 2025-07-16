import { useState } from "react";
import {isEmail} from "validator"
import { loginUserApi } from "../apis/user-api";
import './screen.css';


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
        const responce = await loginUserApi({...credentials});
        console.log(responce.data);
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
            <iframe title="carbon" width="710" height="1300" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" src="https://calculator.carbonfootprint.com/calculator.aspx"></iframe>

        </>
    )
}

export default LoginScreen;