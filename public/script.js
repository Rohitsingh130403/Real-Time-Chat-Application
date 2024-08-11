
const socket = io();

const messageInput = document.getElementById('message');
const sendButton = document.getElementById('send');
const exitButton = document.getElementById('exit');
const output = document.getElementById('output');
const usernameInput = document.getElementById('username');

sendButton.addEventListener('click', sendMessage);
exitButton.addEventListener('click', exitChat);
messageInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    sendMessage();
  }
});

function sendMessage() {
  const message = messageInput.value;
  const username = usernameInput.value;
  const roomName = localStorage.getItem('roomName');

  if (username && message) {
    socket.emit('chatMessage', { room: roomName, username: username, message: message });
    messageInput.value = '';
  }
}

function exitChat() {
  const roomName = localStorage.getItem('roomName');
  const username = usernameInput.value;
  if (roomName && username) {
    socket.emit('leave', { room: roomName, username: username });
    socket.disconnect();
    localStorage.removeItem('roomName');
    localStorage.removeItem('roomPassword');
    window.location.href = 'index.html';
  }
}

socket.on('message', (message) => {
  const p = document.createElement('p');
  p.textContent = message;
  output.appendChild(p);
  output.scrollTop = output.scrollHeight;
});

socket.on('connect', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const action = urlParams.get('action');
  const roomName = localStorage.getItem('roomName');
  const roomPassword = localStorage.getItem('roomPassword');

  if (action === 'create') {
    socket.emit('createRoom', { room: roomName, password: roomPassword });
  } else if (action === 'join') {
    socket.emit('joinRoom', { room: roomName, password: roomPassword });
  }
});
