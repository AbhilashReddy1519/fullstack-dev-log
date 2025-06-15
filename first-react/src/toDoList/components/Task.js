// import {useState} from 'react';
// https://youtube.com/shorts/LxJ3n-XqnD4?si=mUHiUJDIUxX3Zk9u
// vedio for props and props children
function Task({title, description, date}) {
    return (
        <>
            <div className="card">
                <div className="content">
                    <div className="delete">&times;</div>
                    <div className="header">
                        {title}
                    </div>
                    <div className="meta">
                        {date}
                    </div>
                    <div className="description">
                        {description}
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