import Database from "better-sqlite3"

const db = new Database("./sqlite.db")

// Hämtar från tabellen users alla rader
export async function GET(){
    const users = db.prepare("SELECT * FROM todos").all()
    //skickar tillbaka json respons
    return Response.json(users)
}

// Skapar en ny todo
export async function POST(req: Request){
    // Läser in request body
    const body = await req.json()
    const data = db.prepare("INSERT INTO todos (title, todo) VALUES (?, ?)").run(body.title, body.todo)
    //skcikar tillbaka json respons
    return Response.json(data)
}

// Tar bort en todo
export async function DELETE(req: Request){
    // Läser in request body
    const body = await req.json()
    const data = db.prepare("DELETE FROM todos WHERE id = ?").run(body)
    return Response.json(data)
}
// Updatarar en todo
export async function PUT(req: Request){
    // Läser in request body
    const body = await req.json()
    console.log('body', body)
    const data = db.prepare("UPDATE todos SET title = ?, todo = ? WHERE id = ?").run(body.title, body.todo, body.id)
    return Response.json(data)
}