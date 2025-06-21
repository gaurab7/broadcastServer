#!/usr/bin/env node

import { io } from 'socket.io-client'
import chalk from 'chalk'
import readline from 'readline'
import { Command } from 'commander'

//this initiates a connection from the client to the server running at PORT 8848
//the server is listening for any requests
const socket = io('http://localhost:8848')
const prog = new Command()
const rl = readline.createInterface( {
    input: process.stdin,
    output: process.stdout,
    prompt: '>'
})

//connect is a client side predefined event
//connection is serverside
socket.on('connect', ()=>{
    console.log(chalk.green('Connected to the server'))
    rl.prompt()//shows >
})

socket.on('msg', (msg)=>{
    process.stdout.clearLine()
    process.stdout.cursorTo(0)
    console.log(chalk.blue.bgCyan(`${msg}`))
    rl.prompt(true)
})

rl.on('line',(line)=>{
    socket.emit('msg', line)
    rl.prompt()
})




