var app = require('./config/server');

var server = app.listen(80, function() {
    console.log("servidor online");
});

var io = require('socket.io').listen(server);

app.set('io', io);

io.on('connection', function(socket) {
    console.log('Usuario conectado');

    socket.on('disconnect', function() {
        console.log('Usuario desconectou');
    });
});