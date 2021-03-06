const Post = require("../models/post");
const Comentario = require("../models/comentario");
const viewPost = require("../views/posts");
const viewComentario = require("../views/comentarios");
const jwt = require("jsonwebtoken");

module.exports.listarPosts = function(req, res){
    let promisse = Post.find().populate("id_usuario");
    promisse.then(function(posts){
        res.status(200).json(viewPost.renderMany(posts));
    }).catch(function(error){
        res.status(500).json({mensagem:"Falha"})
    })
}

module.exports.buscarPost = function(req, res){
    let id = req.params.id;
    let promisse = Post.findById(id).exec();
    promisse.then(function(post){
        res.status(200).json(viewPost.render(post));
    }).catch(function(error){
        res.status(400).json({mensagem: "Post não encontrado!"});
    });
}


module.exports.cadastrarPosts = function(req, res){
    let token = req.headers.token;
    let paypload = jwt.decode(token);
    let logado_id = paypload.id;

    let promisse = Post.create({texto: req.body.texto, likes: 0, id_usuario: logado_id});

    promisse.then(function(post){
        res.status(200).json(viewPost.render(post));
    }).catch(function(error){
        res.status(400).json({mensagem: "Requisição falhou!"});
        console.log(error.message)
        
    })
}

module.exports.deletarPost = function(req, res){
    let id = req.params.id;
    let token = req.headers.token;
    let paypload = jwt.decode(token);
    let logado_id = paypload.id;

    let promise = Post.findOneAndDelete({_id: id, id_usuario: logado_id});
    promise.then(function(post){
        if(post == null){
            res.status(400).json({mensagem: "Erro!"});    
        } else{
            res.status(200).json({mensagem: "Post deletado com sucesso!"});
        }
    }).catch(function(error){
        res.status(400).json({mensagem: "Erro!"});
    })

}

module.exports.porComentarios = function(req, res){
    let id = req.params.id;
    let promise = Comentario.find({id_post: id}).populate("id_usuario").exec();
    promise.then(function(comentarios){
        res.status(200).json(viewComentario.renderMany(comentarios));
    }).catch(function(error){
        res.status(500).json({mensagem: "Erro!"});
    })
}