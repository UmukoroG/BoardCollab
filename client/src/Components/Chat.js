import React, { useState, useEffect } from 'react'
import io from 'socket.io-client';


const MessageForm = ({ socket }) => {
  const [message, setMessage] = useState('');

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      socket.emit('sendMessage', message);
      setMessage('');
    }
  };

  return (
    <div>
      <textarea
        rows="4"
        cols="50"
        placeholder="Type your message..."
        value={message}
        onChange={handleMessageChange}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

function Chat() {

  const socket = io('http://localhost:8000');//backend server url

  socket.on('connect', () => {
    console.log('Connected');
  });

  const [messages, setMessages] = useState([])

  useEffect(() => {
    // Listen for received messages
    socket.on('receivedMessage', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
  }, []);

  return (
    
    <div>
      {/* Display messages */}
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      
      <div>
          {/* Message sender form */}
        <MessageForm socket={socket}/> 
      </div>

    </div>
  )
}

export default Chat
