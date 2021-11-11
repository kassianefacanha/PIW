const Usuario = require("../models/usuario");
const Post = require("../models/post");
const userView = require("../views/usuarios");
const postsView = require("../views/posts");

module.exports.listarUsuarios = function(req, res){
    let promisse = Usuario.find().exec();
    promisse.then(function(users){
        res.status(200).json(userView.renderMany(users));
    }).catch(function(error){
        res.status(500).json({mensagem:"Falha!"})
    })
}

module.exports.buscarUsuario = function(req, res){
    let id = req.params.id;
    let promisse = Usuario.findById(id).exec();
    promisse.then(function(user){
        res.status(200).json(userView.render(user));
    }).catch(function(error){
        res.status(400).json({mensagem: "Usuário não encontrado!"});
    });
}

module.exports.cadastrarUsuarios = function(req, res){
    let user = req.body;
    let promisse = Usuario.create(user);

    promisse.then(function(user){
        res.status(201).json(userView.render(user));
    }).catch(function(error){
        res.status(400).json({mensagem: "Requisição falhou!"});
    })
}

module.exports.deletarUsuario = function(req, res){
    let id = req.params.id;
    let promisse = Usuario.findByIdAndDelete(id);
    promisse.then(function(){
        res.status(200).json({mensagem: "Usuário deletado com sucesso!"});
    }).catch(function(error){
        res.status(400).json({mensagem: "Usuário não encontrado!"});
    })
}

module.exports.porPosts = function(req, res){
    let id = req.params.id;
    let promise = Post.find({id_usuario:id});
    promise.then(function(posts){
        res.status(200).json(postsView.renderMany(posts));
    }).catch(function(error){
        res.status(500).json({mensagem: "Erro!"});
    });
}