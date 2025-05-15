'use client'
import React from 'react'
import Task from './task'
import { authClient } from '@/lib/auth-client'

export default function Page() {
  const { data: session} = authClient.useSession()

  if (!session?.user) return <div>You must be logged in to view this page.</div>
  const { name, email, image } = session.user


  function removeTask() {
    console.log("Removed task!")
  }

  function toggleTask() {
    console.log("Toggled task!")
  }

  function addTask() {
    console.log("Added task!")
  }

  return (
    <div id="taskmanager-container">
        
        <div className="program-header">
          <button className="button minimize">
            <span className="minimize-content">🗕</span>
          </button>
          <h1>Task Manager</h1>
          <div className="double-button-container">
            <button className="button">▲</button>
            <button className="button">▼</button>
          </div>
        </div>

        <div className="program-main">
          <div className="main-top-container">
            <button className="button add" onClick={addTask}>Add</button>
            <input type="text" className="new-task-input" placeholder="New task . . ." />
          </div>

          <div className="task-container">
            <div className="current-tasks-container">
              <h1>Current Tasks</h1>
              <div className="current-tasks">
                <Task description="Finish Next.js project" removeFunc={removeTask} toggleFunc={toggleTask}></Task>
              </div>
            </div>
            <div className="completed-tasks-container">
              <h1>Completed Tasks</h1>
              <div className="completed-tasks">

              </div>
            </div>
          </div>
        </div>

      </div>
    /* {<div>
        <h2>{name}</h2>
        <p>{email}</p>
        <img src={image || ''} alt="profile" />
    </div>} */
  )
}