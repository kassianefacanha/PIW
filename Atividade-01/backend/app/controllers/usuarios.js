let users = [];

module.exports.listarUsuarios = function(req, res){
    let users_retorno = users;
    if(req.query.nome){
        let nome = req.query.nome;
        users_retorno = users_retorno.filter(function(user){
            return user.nome == nome;
        });
    }
    res.json(users_retorno);
}

module.exports.buscarUsuario = function(req, res){
    let id = req.params.id;
    let user = users.find(function(user){
        return user.id == id;
    });
    if(user){
        res.json(user); 
    }
    else {
        res.status(404).json({mensagem:"Usuário não encontrado!"});
    }
}

module.exports.cadastrarUsuarios = function(req, res){
    let user = req.body;
    users.push(user);
    res.status(200).json(user);
}

module.exports.deletarUsuario = function(req, res){
    let id = req.params.id;
    users = users.filter(function(user){
        return user.id != id;
    });
    res.json({mensagem: "Usuário removido!"});
}