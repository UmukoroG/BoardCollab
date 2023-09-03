//Websocket server for chat and drawing collaboration
const io = require('socket.io')(8000,{
    cors: {
        origin: ['http://localhost:3000'],//client url
    },
})

io.on('connection', socket => {
    console.log(socket.id)
    socket.on('sendMessage', message => {
        socket.broadcast.emit('receivedMessage', message);//send the message to all clients(all sockets out there)
    }),
    socket.on('drawing', data => {//url is http://localhost:8000/drawing
        console.log("draw")
        socket.broadcast.emit('drawing', data);
    }),
    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });

})




