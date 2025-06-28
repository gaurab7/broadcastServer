import io from 'socket.io-client'
import readline from 'readline'
import chalk from 'chalk'

export function joinServer(username) {
//connects the clients to the server
const client = io('http://localhost:8848')

client.on('connect', () => {
    console.log('Connected to the broadcast server')
    client.emit('join-server', username)
    startBroadcast(client)
})

client.on('new-client', (message) => {
    console.log(chalk.bgGray.black(message))
})

client.on('disconnect', ()=> {
    console.log(chalk.red('Disconnected from the server'))
})

client.on('broadcast', ({username, message }) => {
    console.log(chalk.green(`${username}: `) + chalk.magentaBright(`${message}`)) 
})
}

function startBroadcast(client){
   

    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true,
    prompt: '>'
    })

    rl.prompt()

    rl.on('line', (input)=> {
        //exit command
        if (input.trim().toLowerCase() === '--exit') {
        console.log('Exiting...');
        rl.close();
        client.disconnect();
        process.exit(0);
    }
        // Move cursor up and clear the current line
        readline.moveCursor(process.stdout, 0, -1)
        readline.clearLine(process.stdout, 0)
        console.log(chalk.bold.cyanBright('You: ')+chalk.italic.magenta(`${input}`))
        rl.prompt()

        // Emit the broadcast message to the server
        client.emit('broadcast', input) 
    })

}


