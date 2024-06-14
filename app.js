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

    socket.on('msgParaServidor', function(data) {

        // COMUNICACAO COM OS DIALOGOS DOS CLIENTES
        socket.emit('msgParaCliente', { apelido: data.apelido, mensagem: data.mensagem });
        socket.broadcast.emit('msgParaCliente', { apelido: data.apelido, mensagem: data.mensagem });

        // ATUALIZACAO DA LISTA DE PARTICIPANTES
        if (parseInt(data.apelido_atualizado_nos_clientes) == 0) {
            socket.emit('participantesParaCliente', { apelido: data.apelido });
            socket.broadcast.emit('participantesParaCliente', { apelido: data.apelido });
        }
    });


});