const Usuario = require("../models/usuario");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.logar = function(req, res){
    Usuario.findOne({email: req.body.email})
    .then(function(user){
        if(bcrypt.compareSync(req.body.senha, user.senha)){
            let token = jwt.sign({id: user._id}, "senha_secreta");
            res.status(200).json({token:token});
        }else{
            res.status(401).send("Credenciais erradas!");
        }
    })
    .catch(function(error){
        res.status(401).send("Credenciais erradas!");
    })
}

module.exports.checar = function(req, res, next){
    let token = req.headers.token;
    jwt.verify(token, "senha_secreta", function(err, decoded){
        if(err){
            res.status(401).send("Token inválido!");
        }else{
            next();
        }
    })
}