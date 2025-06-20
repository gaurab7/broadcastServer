import { createServer } from "http"
import express from "express"
import { Server } from "socket.io"

const app = express()

app.use(express.json())
app.use(express.static('public'))


const PORT = process.env.PORT || 8848

const httpServer = createServer(app)

const io = new Server(httpServer)

io.on('connection', (socket) => {
    console.log('A user connected')
    
    socket.on('disconnect', () => {
        console.log('User disconnected')
    })
})

httpServer.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`)
})