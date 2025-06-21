import chalk from "chalk"

export default function socketHandler(server)
{
    server.on('connection', (socket)=>{
        console.log(chalk.green(`User Connected with ID: ${socket.id}`))
        socket.on('msg', (msg)=>{
              console.log(chalk.green(`Broadcast: ${msg}`))
              socket.broadcast.emit('msg',msg)
    })
    })

}
