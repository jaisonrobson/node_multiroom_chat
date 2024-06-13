module.exports = function(application) {
    application.post('/chat', function(req, res){
        res.send('chat');
    });

    application.get('/chat', function(req, res){
        res.send('chat');
    });
}