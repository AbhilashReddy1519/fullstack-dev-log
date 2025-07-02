const express = require("express");

const app = express();

app.get("/", (req, res) => {
    // res.send("This is my first express js server response");
    res.json({message: "This is my first express js server response"});
    // res.send(...) for text or res.json(...) for JSON.
});

app.get("/add", (req, res) => {
    let {a , b} = req.query;
    let sum = parseInt(a) + parseInt(b);
    res.send({ sum });
})

app.listen(8080, ()=> {
    console.log("Server is running...");
});










// const http = require("http");

// const server = http.createServer((req, res) => {
//     res.write("This is my first node js server response");
//     res.end();
// });

// server.listen(8080, () => {
//     console.log("server is running");
// });


// REST Api has 2 parts:
//      1: URL
//      2: HTTP method


// function addNum(...args) {
//     let sum = 0;
//     args.forEach((arg) => sum += arg);

//     return sum;
// }

// console.log(addNum(10,20,-122,2343,344,12,-132,23,23));