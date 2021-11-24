const controller = require('../controllers/usuarios')
const auth = require("../controllers/auth");
module.exports = function(app){
    app.post('/api/usuarios', controller.cadastrarUsuarios) 
    app.get('/api/usuarios', controller.listarUsuarios)
    app.get('/api/usuarios/:id',controller.buscarUsuario)
    app.delete('/api/usuarios/:id', controller.deletarUsuario)
    app.get("/api/usuarios/:id/posts", controller.porPosts); 

    app.post("/users/sigin", auth.logar);
    app.use("/users", auth.checar);
}