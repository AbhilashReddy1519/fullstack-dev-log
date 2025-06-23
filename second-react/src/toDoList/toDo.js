// import { Component } from "react";
import { useContext } from "react";
// import AddTask from "./components/addTask";
import './todo.css';
import Task from './components/Task';
import TaskContext from "./contexts/taskContext";
import { useNavigate } from "react-router-dom";


function ToDo() {
    // const [taskCount, setTaskCount] = useState(0);
    // const [taskList, setTaskList] = useState([]);
    const {taskList} = useContext(TaskContext);
    const navigate = useNavigate();
    

    // let addNewTask = (task) => {
    //     if(!task) return;
    //     setTaskList([
    //         ...taskList,{
    //             ...task, createdDate: new Date()
    //         }
    //     ]);
    // }

    return (
        <>
            <div className="todo">
                <h1 className="ui heading center">To Do List App</h1>
                <div>
                    <button onClick={(e) => {
                        navigate('/addTask');
                            // less reliable
                            // setTaskCount(taskCount + 1);
                            // Better way
                            // setTaskCount(prev => prev + 1);
                        // setTaskList([
                        //     ...taskList,
                        //     {
                        //         title:"Task Preview",
                        //         description: "This is normal preview of task",
                        //         createdDate: new Date()
                        //     }
                        // ]);
                    }} className="ui secondary button" title="This is normal button to preview task adding." >Add Task</button>
                    </div>
                    {/* <AddTask getTask={addNewTask}/> */}
                    <div className="ui cards"
                        style={{
                            marginTop: '2rem', 
                            background: '#f2f2f2', 
                            borderRadius: '10px', 
                            justifyContent: 'space-evenly', 
                            boxShadow: '0 0 10px gray'
                        }}>
                        {taskList.map((task) => (
                            <Task task={task} key={task.taskId}/>
                        ))}
                    </div>
                </div>
        </>
    )
}

export default ToDo;




// console.log(taskCount);
                    // this.setState({...this.state, taskCount: this.state.taskCount + 1});
                    // console.log(this.state.taskCount);
                    // this.taskCount += 1;
                    // let count = setInterval(() => {
                    //     this.taskCount += 1;
                    //     if(this.taskCount % 100 === 0) {                                    
                    //         clearInterval(count);
                    //     }




// setState is Asynchronus
//     Key Points about setState:
// Never modify state directly (don't do this.state.taskCount += 1)
// Always use setState() to change state
// State updates may be asynchronous for performance reasons
// React batches multiple setState calls for performance
// You can pass a callback function as second argument to setState to run after the update is complete

// this.setState({...this.state, taskCount: this.state.taskCount + 1});
// This uses the spread operator (...) to:
// Copy all existing state properties
// Update only the taskCount property


// Let me explain how prevState works in the setState callback function:

// What is prevState?
// prevState is a parameter that React automatically provides to the setState callback
// It contains the guaranteed latest state values at the time the update is being applied
// React ensures this is accurate even with multiple rapid updates
// Syntax Breakdown:

// // Using prevState (conventional)
// this.setState((prevState) => ({
//     taskCount: prevState.taskCount + 1
// }));

// // Using oldState
// this.setState((oldState) => ({
//     taskCount: oldState.taskCount + 1
// }));

// // Using just state
// this.setState((state) => ({
    //     taskCount: state.taskCount + 1
    // }));
    
    // // Even using x (not recommended - less readable)
    // this.setState((x) => ({
        //     taskCount: x.taskCount + 1
// }));

//js class component here we extend it to Component class
// we can use state directly but in terms of funcntion components we use hooks for state
// class toDo extends Component {
//     state = {
//         taskCount: 0,
//     };

//     render() {
//         return (
//             <>
//                 <div className="todo">
//                     <h1 className="ui heading center">To Do List App</h1>
//                     <div >
//                         <button onClick={(e) => {
//                             if(e.target) {
//                                 this.setState({...this.state, taskCount: this.state.taskCount + 1});
//                                 console.log(this.state.taskCount);
//                                 // this.taskCount += 1;
//                                 // let count = setInterval(() => {
//                                     //     this.taskCount += 1;
//                                     //     if(this.taskCount % 100 === 0) {
//                                         //         clearInterval(count);
//                                         //     }
//                                         // }, 100);
//                             }
//                         }} className="ui secondary button" title="Add Task 😎😎">Add Task</button>
//                     </div>
//                     <p>The number of tasks are {this.state.taskCount}</p>
//                 </div>
//             </>
//         )
//     }
// }
                        // }, 100);