const express = require('express') 
const routes = express() 

routes.get('/', function (req,res) { 
    res.send('Hello World')
  })
  

routes.post('/api/usuários', function (req,res) { 
   res.json([{id: 1, nome: "Victor",
    email:"victor.aefarias@gmail.com", senha: 123}])
})
routes.get('/api/usuários', function (req,res) { 
   
})

routes.get('/api/usuários/:id', function (req,res) { 
   
})
routes.delete('/api/usuários/:id', function (req,res) { 
   
})


  module.exports = routes;