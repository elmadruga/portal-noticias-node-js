module.exports.index = function(app, req, res) {

    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);

    // Recupera as 5 últimas notícias
    noticiasModel.get5UltimasNoticias(function(error, result) {
        res.render('home/index', {noticias: result});
    });

    
}