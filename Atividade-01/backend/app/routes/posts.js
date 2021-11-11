const controller = require("../controllers/posts");

module.exports = function(app){
    app.post("/posts", controller.cadastrarPosts)
    app.get("/posts", controller.listarPosts);
    app.get("/posts/:id", controller.buscarPost);
    app.delete("/posts/:id", controller.deletarPost);
}