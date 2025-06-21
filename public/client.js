
const socket = io('http://localhost:8848')
const form = document.getElementById('messages-form')
const input = document.getElementById('user-message')
form.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent page reload
      const msg = input.value;
      if (msg) {
        socket.emit('message', msg); // 👈 Send message to backend
        input.value = ''; // Clear input
      }
    });