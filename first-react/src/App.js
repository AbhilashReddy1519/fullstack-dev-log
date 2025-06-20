// import logo from './logo.svg';
// import { useState } from 'react';
import ToDo from './toDoList/toDo';
import './App.css';
import {createBrowserRouter, RouterProvider } from 'react-router';

// function App() {
//   return (
//     // <div className="App">
//     //   <header className="App-header">
//     //     <h1>Hello world</h1>
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//     <>
//       <ToDo />
    
//     </>
//   );
// }
// here both are functional components so we can use both syntax

const router = createBrowserRouter([
  {
    path: "/",
    element: <ToDo />
  },
])

const App = () => {
  // const [tasks,  setTasks] = useState([]);
  return <RouterProvider router={router} />
};

export default App;
