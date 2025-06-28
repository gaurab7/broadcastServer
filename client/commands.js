import { Command } from 'commander'
import { startBroadcastServer } from '../src/server.js'
import { joinServer } from './client.js'

const program = new Command()

program
  .command('start-server')
  .description('Start the broadcast server')
  .action(()=>{
      startBroadcastServer()
    })

program
    .command('join-server <username>')
    .description('Join the broadcast server as a client')
    .action((username)=>{
        joinServer(username)
    })


program.parse(process.argv)