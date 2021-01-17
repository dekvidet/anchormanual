import io from 'socket.io-client'

export const sockets = {}

export const connect = id => {
  sockets[id] = io('http://192.168.1.126:3000')
  return sockets[id]
}

export const getSocket = id => sockets[id]
