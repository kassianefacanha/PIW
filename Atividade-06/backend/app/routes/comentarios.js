const controller = require('../controllers/comentarios')
const auth = require("../controllers/auth");
var cors = require('cors')
module.exports = function(app){
    app.use(cors())
    app.use('/api/comentarios', auth.checar);
    app.post('/api/comentarios', controller.cadastrarComentarios) 
    app.get('/api/comentarios', controller.listarComentarios)
    app.get('/api/comentarios/:id',controller.buscarComentario)
    app.delete('/api/comentarios/:id', controller.deletarComentario)

    
}