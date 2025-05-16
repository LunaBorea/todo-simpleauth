'use client'
import React, { useState, useEffect } from 'react'
import Task from './task'
import { authClient } from '@/lib/auth-client'

type Todo = {
  id: number
  content: string
  is_done: boolean
}

export default function Page() {
  const { data: session } = authClient.useSession()
  const [tasks, setTasks] = useState<Todo[]>([])
  const [newTaskText, setNewTaskText] = useState("")

  useEffect(() => {
    if (session?.user) {
      fetch('/api/todo')
        .then(res => res.json())
        .then(data => setTasks(data))
    }
  }, [session])

  if (!session) return <div>Loading...</div>
  if (!session.user) return <div>You must be logged in to view this page.</div>

  const addTask = async () => {
    if (!newTaskText.trim()) return
    const res = await fetch('/api/todo', {
      method: 'POST',
      body: JSON.stringify({ content: newTaskText }),
      headers: { 'Content-Type': 'application/json' }
    })
    const result = await res.json()
    setTasks(prev => [...prev, { id: result.lastInsertRowid, content: newTaskText, is_done: false }])
    setNewTaskText("")
  }

  const removeTask = async (id: number) => {
    await fetch('/api/todo', {
      method: 'DELETE',
      body: JSON.stringify({ id }),
      headers: { 'Content-Type': 'application/json' }
    })
    setTasks(prev => prev.filter(task => task.id !== id))
  }

  const toggleTask = async (id: number, currentDone: boolean) => {
    const updated = tasks.map(t =>
      t.id === id ? { ...t, is_done: !currentDone } : t
    )
    setTasks(updated)

    await fetch('/api/todo', {
      method: 'PUT',
      body: JSON.stringify({ id, content: updated.find(t => t.id === id)?.content, is_done: !currentDone }),
      headers: { 'Content-Type': 'application/json' }
    })
  }

  const currentTasks = tasks.filter(t => !t.is_done)
  const completedTasks = tasks.filter(t => t.is_done)

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
          <input
            type="text"
            className="new-task-input"
            placeholder="New task . . ."
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
          />
        </div>

        <div className="task-container">
          <div className="current-tasks-container">
            <h1>Current Tasks</h1>
            <ul className="current-tasks">
              {currentTasks.map(task => (
                <Task
                  key={task.id}
                  id={task.id}
                  description={task.content}
                  isDone={false}
                  removeFunc={removeTask}
                  toggleFunc={toggleTask}
                />
              ))}
            </ul>
          </div>
          <div className="completed-tasks-container">
            <h1>Completed Tasks</h1>
            <ul className="completed-tasks">
              {completedTasks.map(task => (
                <Task
                  key={task.id}
                  id={task.id}
                  description={task.content}
                  isDone={true}
                  removeFunc={removeTask}
                  toggleFunc={toggleTask}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
