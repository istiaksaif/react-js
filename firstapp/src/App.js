import Header from "./components/Header";
import Task from "./components/Task";
import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import React from 'react';
import Footer from "./components/Footer";
import About from "./components/About";
import {BrowserRouter as Router, Route} from 'react-router-dom'

const App = () => {

  const [tasks, settasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const taskFromServer = await fetchTasks()
      settasks(taskFromServer)
    }

    getTasks()
  }, [])

//Fetch Tasks
const fetchTasks = async () => {
  const res = await fetch('http://localhost:5000/tasks')
  const data = await res.json()

  return data
}

//fetch task
const fetchTask = async (id) => {
  const res = await fetch(`http://localhost:5000/tasks/${id}`)
  const data = await res.json()

  return data
}

const[showAddTask, setShowAddTask] = useState (false)

//delete task
const deleteTask = async (id) => {
  await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'DELETE'
  })

  settasks(tasks.filter((task) => task.id !==id))
}

//reminder
const  remindertoggle = async (id) => {
  const taskToToggle = await fetchTask(id)
  const upTask = { ...taskToToggle, reminder: !taskToToggle.reminder}
  const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(upTask)
  })
  const data = await res.json()

  settasks(tasks.map((task) => task.id === id ? { ...task, reminder: data.reminder} : task))
}

//task add
const addTask = async (task) => {

  const res = await fetch('http://localhost:5000/tasks', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(task)
  })

  const data = await res.json()
  settasks([...tasks,data])

  // const id = Math.floor(Math.random() * 10000)+1
  // const newTask = {id, ...task}
  // settasks([...tasks,newTask])
}
  return (
    <Router>
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)}
      showAdd={showAddTask}/>
      <Route path='/' exact render={(props) => (
        <>
          {showAddTask && <AddTask onAdd={addTask}/>}
          {
            tasks.length > 0 ?
            <Task tasks={tasks} onDelete={deleteTask}
            onToggle={remindertoggle}/>
            : 'no task exits'
          }
        </>
      )}/>
      <Route path='/about' component={About}/>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
