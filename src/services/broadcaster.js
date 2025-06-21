export default function socketHandler(server)
{
    server.on('connection', (socket)=>{
        console.log(`User Connected with ID: ${socket.id}`)
        socket.on('message', (msg)=>{
              console.log(`Broadcast: ${msg}`)
              socket.broadcast.emit(msg)
    })
    })

}
