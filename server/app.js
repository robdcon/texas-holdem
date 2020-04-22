const express = require('express');
const socket = require('socket.io');
const path = require('path');
const app = express();
const http = require('http').createServer(app);
const index = require('./routes/index.js');

app.use(index);

app.get('/', (req, res) => {
    res.send('public');
})
var port = process.env.PORT || 4001;

var server = http.listen(port, function () {
    console.log("Listening at port: " + port);
});

const io = socket(server);

io.on('connection', (socket) => {
    console.log('Connected : ', port);
    socket.on('connection', (data) => {
        console.log(socket.id, data);
    })
})




