import { createServer } from 'http' 
import { Server } from 'socket.io' 
import chalk from 'chalk'

const PORT = 8848

export function startBroadcastServer() {
    const httpServer = createServer() 
    const io = new Server(httpServer)

    io.on('connection', (socket) => {
        console.log(chalk.green(`Client connected with id: ${socket.id}/ username: ${socket.username}`)) 

        socket.on('join-server', (name)=>{
            socket.emit('new-client', `${name} has joined the server`)
            //attaches the username to the client
            socket.username = name
            console.log(`${name} has joined the server`)
        })

        socket.on('broadcast', (message) => {
            // Broadcast to all clients except sender
            socket.broadcast.emit('broadcast' ,{ username: socket.username, message})
            console.log(`${socket.username}: ${message}`)
        }) 

        socket.on('disconnect', () => {
            console.log(chalk.red(`Client disconnected: ${socket.username}`))
        }) 
    }) 
        httpServer.listen(PORT, () => {
            console.log(`Broadcast server listening on port: ${PORT}`) 
    }) 
}