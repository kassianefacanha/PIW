const controller = require('../controllers/comentarios')

module.exports = function(app){
    app.post('/api/comentarios', controller.cadastrarComentarios) 
    app.get('/api/comentarios', controller.listarComentarios)
    app.get('/api/comentarios/:id',controller.buscarComentario)
    app.delete('/api/comentarios/:id', controller.deletarComentario)
}