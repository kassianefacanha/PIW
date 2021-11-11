const controller = require('../controllers/usuarios')

module.exports = function(app){
    app.post('/api/usuarios', controller.cadastrarUsuarios) 
    app.get('/api/usuarios', controller.listarUsuarios)
    app.get('/api/usuarios/:id',controller.buscarUsuario)
    app.delete('/api/usuarios/:id', controller.deletarUsuario)
}