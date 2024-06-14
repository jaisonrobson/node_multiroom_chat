var app = require('./config/server');

var server = app.listen(80, function() {
    console.log("servidor online");
});

require('socket.io').listen(server);