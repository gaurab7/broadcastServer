import { createServer } from "http"
import express from "express"
import { Server } from "socket.io"
import  socketHandler  from './services/broadcaster.js'

const app = express()

app.use(express.json())
app.use(express.static('public'))


const PORT = process.env.PORT || 8848

const httpServer = createServer(app)

const server = new Server(httpServer)
socketHandler(server)


httpServer.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`)
})