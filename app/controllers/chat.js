module.exports.iniciaChat = function(application, req, res) {
    var dadosForm = req.body;

    req.assert('apelido', 'Apelido obrigatório').notEmpty();
    req.assert('apelido', 'Apelido deve conter de 3 a 15 caracteres').len(3, 15);

    var errors = req.validationErrors();

    if (errors) {
        res.render('index', {validacao: errors});
    }

    res.render('chat');
}