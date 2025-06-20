import { Server } from "socket.io"

export default function attachSocketIO(httpServer) {
  const io = new Server(httpServer)

  io.on("connection", (socket) => {
    console.log("Socket connected:", socket.id)

    socket.on("broadcast", (msg) => {
      io.emit("broadcast", msg)
    });

    socket.on("disconnect", () => {
      console.log("Socket disconnected:", socket.id);
    })
  })

  return io
}