# Task Manager — Full-Stack CRUD App

A simple task manager built with Next.js and SQLite, featuring full CRUD functionality and user authentication.

## Features

* Authentication: Only logged-in users can access the app

* Create: Add new tasks to your list

* Read: View tasks stored in the SQLite database

* Update: Mark tasks as completed or revert them

* Delete: Remove tasks permanently

* Client-server architecture using Next.js API routes (GET, POST, PUT, DELETE)

* Persistent storage with better-sqlite3

* Dynamic task interface with UI state sync

## Setup Instructions
### 1. Install dependencies

    npm install

### 2. Configure Better Auth
https://www.better-auth.com/docs/installation

Create a .env file with the following:

    BETTER_AUTH_SECRET
    BETTER_AUTH_URL

    GITHUB_CLIENT_ID
    GITHUB_CLIENT_SECRET

Then run:
npx @better-auth/cli generate
npx @better-auth/cli migrate

### 3. Create the tasks table
Run the following SQL in your SQLite database:

    CREATE TABLE task (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      content TEXT NOT NULL,
      is_done BOOLEAN NOT NULL DEFAULT 0
    );

Once complete, you're ready to start the app.