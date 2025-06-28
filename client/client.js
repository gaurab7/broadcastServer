import io from 'socket.io-client'
import readline from 'readline'


export function joinServer(username) {
//connects the clients to the server
const client = io('http://localhost:8848')

client.on('connect', () => {
    console.log('Connected to the broadcast server')
    client.emit('join-server', username)
})

client.on('new-client', (message) => {
    console.log(message)
})

client.on('broadcast', (message) => {
    console.log(message)
})

startBroadcast(client)
}

function startBroadcast(client){
   
    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '>'
    })

    rl.prompt()

    rl.on('line', (input)=> {
        // Move cursor up and clear the current line
        readline.moveCursor(process.stdout, 0, -1)
        readline.clearLine(process.stdout, 0)

        // Print formatted message and show new prompt
        console.log(`You: ${input}`)
        rl.prompt()

        // Emit the broadcast message to the server
        client.emit('broadcast', input) 
    })

}

