# Broadcast Server
## backend multi-client broadcast server 



- [ ] Create a server that listens for incoming connections.
- [ ] When a client connects, store the connection in a list of connected clients.
- [ ] When a client sends a message, broadcast this message to all connected clients.
- [ ] Handle client disconnections and remove the client from the list of connected clients.
- [ ] Implement a client that can connect to the server and send messages.
- [ ] Test the server by connecting multiple clients and sending messages.

### Messaging
- [ ] Prefix messages with usernames or IDs 
- [ ] Private messaging support (DMs using a command like `/dm user message`).
- [ ] Message history

### Server Handling
- [ ] Logging (connection/disconnection, errors, message flow).
- [ ] Max clients limit to avoid server overload.
- [ ] Rate limiting or flood protection.

### Client Features
- [ ] Reconnect on failure.
- [ ] Command support (e.g., `/help`, `/list`, `/quit`).

### Admin Commands
- [ ] `/kick user`
- [ ] `/shutdown`
- [ ] `/broadcast`

### Rooms/Channels
- [ ] Room or channel support (multiple rooms like in Discord).





