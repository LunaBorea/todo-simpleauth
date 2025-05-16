'use client'
import React, { useEffect } from 'react'
import { authClient } from '@/lib/auth-client'
import { redirect } from 'next/navigation'

export default function page() {
  const { data: session} = authClient.useSession()

  useEffect(() => { // If logged in, redirects
    if (session?.user) {
      redirect('/todo')
    }
  }, [session])

  const handleSignIn = async () => {
    await authClient.signIn.social({ provider: 'github' })
  }

  return (
    <div id="signin-container">

        <div className="program-header">
          <button className="button minimize">
            <span className="minimize-content">🗕</span>
          </button>
          <h1>Sign into Task Manager</h1>
          <div className="double-button-container">
            <button className="button">▲</button>
            <button className="button">▼</button>
          </div>
        </div>

        <div className="program-main">
          <div className="main-top-container-signin">
            <button className="button signin" onClick={handleSignIn}>Sign in with GitHub</button>
          </div>
        </div>

    </div>
  )
}