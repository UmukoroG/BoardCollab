import React from 'react'
import io from 'socket.io-client';


function Whiteboard() {

  const socket = io('http://localhost:8000');

  socket.on('connect', () => {
    socket.emit("drawing", "data")
  });


  return (
    <div>
        <h1>Whiteboard</h1>
    </div>
  )
}

export default Whiteboard
