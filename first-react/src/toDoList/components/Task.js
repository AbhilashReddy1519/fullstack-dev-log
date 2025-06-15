// import {useState} from 'react';
// https://youtube.com/shorts/LxJ3n-XqnD4?si=mUHiUJDIUxX3Zk9u
// vedio for props and props children
// Objects are not valid as a React child (found: [object Date]). If you meant to render a collection of children, use an array instead.


function Task({task}) {
    const formattedDateTime = task.createdDate.toLocaleString('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short'
    });
    return (
        <>
            <div className="card">
                <div className="content">
                    <div className="delete">&times;</div>
                    <div className="header">
                        {task.title}
                    </div>
                    <div className="meta">
                        {formattedDateTime}
                    </div>
                    <div className="description">
                        {task.description}
                    </div>
                    </div>
                    <div className="extra content">
                    <div className="ui two buttons">
                        <div className="ui basic green button">Edit</div>
                        <div className="ui basic red button">Complete</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Task;