import socketio from 'socket.io'
import express from 'express'
import { createServer } from 'http'

export default config => {
  const expressApp = express()
  const server = createServer(expressApp)
  const io = socketio(server, {
    cors: {
      origin: '*',
    },
  })

  expressApp.get('/', (req, res) => {
    res.sendFile(`${__dirname}/test.html`)
  })

  const sessions = {}

  io.on('connection', socket => {
    console.log(`connected: ${socket.id}`)
    socket.on('login', role => {
      console.log(`login: ${role} (${socket.id}) from ${socket.handshake.address}`)
      sessions[socket.id] = {
        adress: socket.handshake.address,
        role,
      }
    })
    socket.on('sync', data => {
      console.log(`synced: ${socket.id}`)
      io.emit('sync', data)
    })
    socket.on('disconnect', () => {
      console.log(`disconnected: ${socket.id}`)
      delete sessions[socket.id]
    })
  })

  server.listen(config.port, () => {
    console.log(`Listening on localhost:${config.port}`)
  })
}
