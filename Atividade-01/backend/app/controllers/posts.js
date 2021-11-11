let posts = [];

module.exports.listarPosts = function(req, res){
    let posts_retorno = posts;
    if(req.query.nome){
        let nome = req.query.nome;
        posts_retorno = posts_retorno.filter(function(post){
            return post.nome == nome;
        });
    }
    res.json(posts_retorno);
}

module.exports.buscarPost = function(req, res){
    let id = req.params.id;
    let post = posts.find(function(post){
        return post.id == id;
    });
    if(post)
        res.json(post); 
    else 
        res.status(404).json({mensagem:"Post não foi encontrado!"});
    
}

module.exports.cadastrarPosts = function(req, res){
    let post = req.body;
    posts.push(post);
    res.status(200).json(post);
}

module.exports.deletarPost = function(req, res){
    let id = req.params.id;
    posts = posts.filter(function(post){
        return post.id != id;
    });
    res.json({mensagem: "Post foi removido!"});
}