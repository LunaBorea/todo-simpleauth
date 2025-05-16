'use client'
import React from 'react'

type TaskProps = {
  id: number;
  description: string;
  isDone: boolean;
  removeFunc: (id: number) => void;
  toggleFunc: (id: number, currentDone: boolean) => void;
};

export default function Task({ id, description, isDone, removeFunc, toggleFunc }: TaskProps) {
  return (
    <li data-id={id}>
      <p style={{ textDecoration: isDone ? 'line-through' : 'none' }}>{description}</p>
      <div className='buttonContainer'>
        <button className='removeButton' onClick={() => removeFunc(id)}>Delete</button>
        <button
          className='toggleButton'
          onClick={() => toggleFunc(id, isDone)}
          style={{
            backgroundImage: `url(${isDone ? '/cross.png' : '/checkmark.png'})`
          }}
        >
          {isDone ? 'Unfinish' : 'Finish'}
        </button>
      </div>
    </li>
  )
}