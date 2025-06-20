import { useState } from "react";

// function AddTask() {
//     return (
//         <></>
//     );
// }

const AddTask = ({getTask}) => {
    // use state for task handling
    const [task, setTask] = useState({
        title: "",
        description: ""
    });
    
    // function(or)method to get values
    let handleInput = (e) => {
        setTask({
            ...task, 
            [e.target.name]: e.target.value
        });
        // console.log(task);
    }

    let onFormSubmit = (e) => {
        e.preventDefault();
        console.log(task);
        if(task.title === "" || task.description === "") return;
        getTask(task);
    }

    return (
        <>
            <form onSubmit={onFormSubmit}>
                <h3 className="ui heading center">Add New Task</h3>
                <div className="ui form">
                    <div className="field">
                        <label>Title</label>
                        <input type="text" placeholder="Task Title" name="title" onChange={handleInput} value={task.title}/>
                    </div>
                    <div className="field">
                        <label>Description</label>
                        <textarea rows="4" placeholder="Description here..." name="description" onChange={handleInput} value={task.description}/>
                    </div>
                    <button type="submit" className="ui primary button"> Submit </button>
                </div>
            </form>
        </>
    );
};


export default AddTask;