import { createServer } from "http"
import express from "express"

//rooms using net would be more difficult to setup
//plus socket is better really
import { Server } from "socket.io"
import  socketHandler  from './services/broadcaster.js'


const app = express()

const PORT = process.env.PORT || 8848

//http server is needed for socket
const httpServer = createServer(app)

const server = new Server(httpServer)
socketHandler(server)


httpServer.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`)
})