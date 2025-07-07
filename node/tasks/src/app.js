require("./appMongoose");

const express = require("express");
const Task = require("./models/Task");


const app = express();

app.use(express.json());


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

app.post("/add-task",async (req, res) => {
    const task = new Task({title: "New Task", description: "New description..."});
    await task.save();

    return res.status(201).send({message: "Task Saved!"});
})

app.get("/get-tasks", async (req, res) => {
    const taskList = await Task.find();

    return res.status(200).send(taskList);
})

app.put("/update-tasks/:taskId", async( req, res) => {
    const { taskId } = req.params;
    const updateResult = await Task.updateOne(
        {
            _id: taskId
        }, 
        { 
            $set: {
                ...req.body
            }
        }
    )

    if(!updateResult.matchedCount) {
        return res
            .status(404)
            .send({message: `Task with ID: ${taskId} was not found`});
    }

    return res.status(200).send({message: `update success ${updateResult}`});
});

app.delete("/delete-tasks/:taskId", async (req, res) => {
    const { taskId } = req.params;
    const deleteResult = await Task.deleteOne(
        {
            _id: taskId
        }
    )

    if(!deleteResult.deleteCount) {
        return res
            .status(404)
            .send({message: `Task with ID: ${taskId} was not found`});
    }

    return res.status(200).send({message: `delete success ${deleteResult}`});
});


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