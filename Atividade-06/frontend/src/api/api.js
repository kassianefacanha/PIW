import axios from 'axios';

export function LoginUser(login_data){
    return axios({
            method:"POST",
            url:"http://localhost:8000/api/usuarios/sigin",
            data: login_data,
        })
}

export function CadastroUser(usuario){
    return axios({
            method: "POST",
            url: "http://localhost:8000/api/usuarios",
            data: usuario,
        })    
      }


export function ListarPosts(token){
    return axios({
        method:"GET",
        url:"http://localhost:8000/api/posts",
        headers:{
            "token": token,
        }
    })
}
export function ListarPostId(token, id_user){
    return axios({
        method:"GET",
        url:"http://localhost:8000/api/usuarios/"+id_user+"/posts",
        headers:{
            "token": token,
            "id_user" : id_user
        }
    })
}
export function ListarUserId(token, id_user){
    return axios({
        method:"GET",
        url:"http://localhost:8000/api/usuarios/"+id_user+"",
        headers:{
            "token": token,
            "id_user" : id_user
        }
    })
}
export function CriarPost(token, post){
    return(
        axios({
            method: "POST",
            url: "http://localhost:8000/api/posts",
            data:post,
            headers:{
                "token": token,
            }
        }).catch(function(error){
           console.log(error.response)
        })
    );
}

export function ListarComentariosDoPost(token, idPost){
    return axios({
        method: "GET",
        url: "http://localhost:8000/api/posts/"+idPost+"/comentarios",
        headers: {
            "token": token,
        }
    })
}
export function ListarComentario(idPost,token){
    return axios({
        method:"GET",
        url:"http://localhost:8000/api/posts/"+idPost+"/comentarios",
        headers:{
            "token": token,
        }
    })
}

export function CriarComentario(token, comentario, idPost){
    return(
        axios({
            method: "POST",
            url: "http://localhost:8000/api/comentarios",
            headers:{
                "token": token,
            },
            data:{
                texto: comentario.texto,
                id_post: idPost
            }
        })
    );
}
