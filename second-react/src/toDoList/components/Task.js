// import {useState} from 'react';
// https://youtube.com/shorts/LxJ3n-XqnD4?si=mUHiUJDIUxX3Zk9u
// vedio for props and props children
// Objects are not valid as a React child (found: [object Date]). If you meant to render a collection of children, use an array instead.

import { useContext } from "react";
import TaskContext from "../contexts/taskContext";


function Task({task: {title, description, createdDate, taskId, completed}}) {
    const {deleteTask, completeTask} = useContext(TaskContext);

    const formattedDateTime = createdDate.toLocaleString('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short'
    });
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
                        <div className="ui basic blue button" >Edit</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Task;