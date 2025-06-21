// import logo from './logo.svg';
// import { useState } from 'react';
import ToDo from './toDoList/toDo';
import {createBrowserRouter, RouterProvider} from 'react-router';
import './App.css';
import AddTask from './toDoList/components/addTask';
import { TaskProvider } from './toDoList/contexts/taskContext';

let router = createBrowserRouter([
  {
    path: '/',
    element: <ToDo />
  },
  {
    path: '/addTask',
    element: <AddTask  />
  }
])


function App() {
  return(
    <TaskProvider>
      <RouterProvider router={router}/>
    </TaskProvider>
  );
}

export default App;
