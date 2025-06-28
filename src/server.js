import { createServer } from 'http' 
import { Server } from 'socket.io' 

const PORT = 8848

export function startBroadcastServer() {
    const httpServer = createServer() 
    const io = new Server(httpServer)

    io.on('connection', (socket) => {
        console.log('Client connected:', socket.id) 

        socket.on('join-server', (name)=>{
            socket.emit('new-client', `${name} has joined the server`)
            //attaches the username to the client
            socket.username = name
            console.log(`${name} has joined the server`)
        })

        socket.on('broadcast', (message) => {
            // Broadcast to all clients except sender
            socket.broadcast.emit('broadcast', `${socket.username}: ${message}`)
            console.log(`${socket.username}: ${message}`) 
        }) 

        socket.on('disconnect', () => {
            console.log('Client disconnected:', socket.id) 
        }) 
    }) 
        httpServer.listen(PORT, () => {
            console.log(`Broadcast server listening on port: ${PORT}`) 
    }) 
}