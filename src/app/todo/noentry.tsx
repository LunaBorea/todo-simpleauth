'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

export default function NoEntry() {
  const router = useRouter()

  return (
    <div id="signin-container">
      <div className="program-header">
        <button className="button minimize">
          <span className="minimize-content">🗕</span>
        </button>
        <h1 className='fix'>Unauthorized Entry Detected</h1>
        <div className="double-button-container">
          <button className="button">▲</button>
          <button className="button">▼</button>
        </div>
      </div>

      <div className="program-main">
        <div className="main-top-container-signin">
          <h1>You must be logged in to view this page.</h1>
          <button onClick={() => router.push('/login')} className="button signin">
            Go to Login
          </button>
        </div>
      </div>
    </div>
  )
}
