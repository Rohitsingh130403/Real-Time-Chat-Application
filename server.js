const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const rooms = {};

app.use(express.static('public'));

io.on('connection', (socket) => {
  socket.on('createRoom', ({ room, password }) => {
    rooms[room] = { password, users: [] };
    socket.join(room);
  });

  socket.on('joinRoom', ({ room, password }) => {
    if (rooms[room] && rooms[room].password === password) {
      socket.join(room);
      socket.emit('message', 'Welcome to the chat room!');
      socket.broadcast.to(room).emit('message', 'A user has joined the chat.');
    } else {
      socket.emit('message', 'Invalid room name or password.');
    }
  });

  socket.on('chatMessage', ({ room, username, message }) => {
    io.to(room).emit('message', `${username}: ${message}`);
  });

  socket.on('leave', ({ room, username }) => {
    socket.leave(room);
    io.to(room).emit('message', `${username} has left the chat.`);
  });

  socket.on('disconnect', () => {
    // Handle user disconnect
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

 // use http://localhost:3000 



