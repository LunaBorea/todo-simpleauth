import Database from "better-sqlite3"

const db = new Database("./sqlite.db")

// Hämtar från tabellen users alla rader
export async function GET(){
    const data = db.prepare("SELECT * FROM todos").all()
    //skickar tillbaka json respons
    return Response.json(data)
}

// Skapar en ny todo
export async function POST(req: Request){
    // Läser in request body
    const body = await req.json()
    const data = db.prepare("INSERT INTO todos (content) VALUES (?)").run(body.content)
    //skcikar tillbaka json respons
    return Response.json(data)
}

// Tar bort en todo
export async function DELETE(req: Request){
    // Läser in request body
    const body = await req.json()
    const data = db.prepare("DELETE FROM todos WHERE id = ?").run(body.id)
    return Response.json(data)
}
// Updatarar en todo
export async function PUT(req: Request){
    // Läser in request body
    const body = await req.json()
    console.log('body', body)
    const data = db.prepare("UPDATE todos SET content = ? WHERE id = ?").run(body.content, body.id)
    return Response.json(data)
}