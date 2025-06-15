// components are  main for react we use components for every thing in react 
// they are like functions and we use props to pass variables to components 
// we use to type to represent componrnts in react 
// js class and js function

// JS Class
import { Component } from "react";


class jsClass extends Component{
    name = "Abhilash";
    
    render() {
        return (
            <>
                <div>
                    <h1>Hello world!</h1>
                    <h1>Hi ,{this.name}</h1>
                </div>
            </>
        )
    }
}

// by using export default jsClass; we  can get out put from it ok 

// and js function is basically used in many react components 
// <> </> we use to for we structured html and good practice and prevents us form not worring
// about parent class error 