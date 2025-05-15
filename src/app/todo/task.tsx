'use client'
import React from 'react'

type TaskProps = {
    description: string;
    removeFunc: () => void;
    toggleFunc: () => void;
};

export default function Task({ description, removeFunc, toggleFunc }: TaskProps) {
  return (
    <li>
        <p>{description}</p>
        <div className='buttonContainer'>
            <button className='removeButton' onClick={removeFunc}>Delete</button>
            <button className='toggleButton' onClick={toggleFunc}>Finish</button>
        </div>
    </li>
  )
}
