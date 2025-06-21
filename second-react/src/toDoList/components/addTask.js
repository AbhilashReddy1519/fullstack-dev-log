import { useContext, useState } from "react";
import '../todo.css';
import TaskContext from "../contexts/taskContext";
import { useNavigate } from "react-router-dom";
// function AddTask() {
//     return (
//         <></>
//     );
// }

const AddTask = () => {
    const navigate = useNavigate();

    const {addNewTask} = useContext(TaskContext);
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
        if(task.title === "" || task.description === "") {
            alert("Task title and description should not be empty.");
            return;
        }
        addNewTask(task);
        setTask({}); // making task as empty.
        navigate('/');
    }

    return (
        <>
            <section className="screen">
                <form onSubmit={onFormSubmit}>
                    <h3 className="ui heading center">Add New Task</h3>
                    <div className="ui form">
                        <div className="field">
                            <label htmlFor="title">Title</label>
                            <input type="text" id="title" placeholder="Task Title" name="title" onChange={handleInput} value={task.title}/>
                        </div>
                        <div className="field">
                            <label htmlFor="description">Description</label>
                            <textarea rows="4" id='description' placeholder="Description here..." name="description" onChange={handleInput} value={task.description}/>
                        </div>
                        <button type="submit" className="ui primary button"> Submit </button>
                    </div>
                </form>
            </section>
        </>
    );
};


export default AddTask;