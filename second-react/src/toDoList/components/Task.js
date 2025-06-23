// import {useState} from 'react';
// https://youtube.com/shorts/LxJ3n-XqnD4?si=mUHiUJDIUxX3Zk9u
// vedio for props and props children
// Objects are not valid as a React child (found: [object Date]). If you meant to render a collection of children, use an array instead.

import { useContext, useState } from "react";
import TaskContext from "../contexts/taskContext";


function Task({task: incomingTask}) {
    let  {title, description, createdDate, taskId, completed} = incomingTask;
    const {deleteTask, completeTask, editTask} = useContext(TaskContext);

    const formattedDateTime = createdDate.toLocaleString('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short'
    });

    const [isEditing, setIsEditing] = useState(false);

    const [task, setTask] = useState(incomingTask);

    let handleInput = (e) => {
        setTask({
            ...task, 
            [e.target.name]: e.target.value
        });
        // console.log(task);
    }


    if(isEditing) {
        return (
            <div className="card">
                    <div className="content">
                        {/* <div className="delete" title="Delete Task🗑️" onClick={() => deleteTask(taskId)}>&times;</div> */}
                        <div className="ui form">
                            <div className="field">
                                <label htmlFor="title">Title</label>
                                <input type="text" id="title" placeholder="Task Title" name="title" onChange={handleInput} value={task.title}/>
                            </div>
                            <div className="meta" style={{color: completed? "black" : "gray"}}>
                                {formattedDateTime}
                            </div>
                            <div className="field">
                                <label htmlFor="description">Description</label>
                                <textarea rows="4" id='description' placeholder="Description here..." name="description" onChange={handleInput} value={task.description}/>
                            </div>
                        </div>
                    </div>
                    <div className="extra content">
                        <div className="ui two buttons">
                            <div className="ui basic green button" onClick={() => {editTask(task); setIsEditing(false)}}>
                                Save</div>
                            <div className="ui basic blue button" onClick={() => {setIsEditing(false); setTask(incomingTask)}} >Cancel</div>
                        </div>
                    </div>
                </div>
            // <div className="ui form">
            //     <div className="field">
            //         <label htmlFor="title">Title</label>
            //         <input type="text" id="title" placeholder="Task Title" name="title" onChange={handleInput} value={task.title}/>
            //     </div>
            //     <div className="field">
            //         <label htmlFor="description">Description</label>
            //         <textarea rows="4" id='description' placeholder="Description here..." name="description" onChange={handleInput} value={task.description}/>
            //     </div>
            // </div>
        );
    } else {
        return (
            <>
                <div className="card">
                    <div className="content">
                        <div className="delete" title="Delete Task🗑️" onClick={() => deleteTask(taskId)}>&times;</div>
                        <div className="header" style={{
                            textDecoration: completed ? "line-through": "none",
                            color: completed ? "green" : "black"
                            }}>
                            {title}
                        </div>
                        <div className="meta" style={{color: completed? "black" : "gray"}}>
                            {formattedDateTime}
                        </div>
                        <div className="description" style={{
                            textDecoration: completed ? "line-through": "none",
                            color: completed ? "green" : "black",
                            }}>
                            {description}
                        </div>
                        </div>
                        <div className="extra content">
                        <div className="ui two buttons">
                            <div className="ui basic green button" onClick={() => {completeTask(taskId);}}>
                                {!completed ? "Complete" : "Revoke"}</div>
                            <div className="ui basic blue button" onClick={() => setIsEditing(true)} >Edit</div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Task;