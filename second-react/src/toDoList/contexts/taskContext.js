import { createContext, useState } from "react";
import {v4 as randomUUID} from 'uuid';

const TaskContext = createContext();
const TASK_EDITS = ['title', 'description'];

const TaskProvider = ({children}) => {
    const [taskList, setTaskList] = useState([]);

    const addNewTask = (task) => {
        setTaskList([
            ...taskList,{
                ...task, createdDate: new Date(),
                taskId: randomUUID(),
                completed: false
            }
        ]);
    }

    const deleteTask = (taskId) => {
        setTaskList(taskList.filter((task) =>  taskId !== task.taskId ));
    };

    const completeTask = (taskId) => {
        setTaskList(taskList.map(task => task.taskId === taskId
            ? {...task, completed: !task.completed }
            : task 
        ));
    }

    const editTask = (task) => {
        let tempTaskList = [...taskList];
        for(let t of tempTaskList) {
            if(t.taskId === task.taskId) {
                TASK_EDITS.forEach((field) => t[field] = task[field]);
            }
        }
        setTaskList(taskList);
    }

    return (
        <TaskContext.Provider value={{taskList, addNewTask, deleteTask, completeTask, editTask}}>
            {children}
        </TaskContext.Provider>
    );
}


export {TaskProvider};
export default TaskContext;