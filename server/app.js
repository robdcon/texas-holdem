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
var port = process.env.PORT || 3000;

var server = http.listen(port, function () {
    console.log("Listening at port: " + port);
});

const io = socket(server);

io.on('connection', () => {
    console.log('Listening at : ', Port);
})




