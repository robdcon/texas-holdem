const express = require('express');
const socket = require('socket.io');
const path = require('path');
const app = express();
const http = require('http');
const index = require('./routes/index.js');

app.use(index);

var port = process.env.PORT || 4001;

var server = http.createServer(app);

const io = socket(server);

let interval;

const sendMessage = (socket) => {
    const response = new Date();
    socket.emit('message', response);
}

io.on('connection', (socket) => {
    console.log('Connected : ', port);
    socket.on('connected', (data) => {
        console.log(socket.id, data);
    })
    if(interval) {
        clearInterval(interval);
    }
    interval = setInterval(() => sendMessage(socket), 1000);
});

server.listen(port, () => {
    console.log('Listening on Port:', port);
    
})




