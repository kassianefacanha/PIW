import { CriarComentario } from '../../../api/api';
import { useContext, useEffect, useState } from 'react'
import { ListarComentariosDoPost } from '../../../api/api';
import { useForm } from 'react-hook-form'
import { AuthContext } from '../../../App'
import "./Comentario.css"

function ListaComentarios(comentario) {

    return (
        <div className="comentarios">
            <div className="comentario">
                <div className="userComent">-{comentario.nome}</div> 
                <div className="textoComent">{comentario.texto}</div>
            </div>
        </div>
    
    )
}

export function Comentarios(props){
    const {auth} = useContext(AuthContext)
    const { register, handleSubmit, reset } = useForm([]);
    const [comentarios, setComentarios] = useState([])

    function ComentariosDoPost(){

        ListarComentariosDoPost(auth.token, props.id).then(
            (response)=>{
                setComentarios(response.data)
            }
        ).catch(
            
            (error)=>{
                console.log(error)
            }
        )
    }

    useEffect(()=>{
        ComentariosDoPost()
        // eslint-disable-next-line
    }, [])

    const adicionarComentario = (comentario) =>{
        CriarComentario(auth.token, comentario, props.id).then(
            (response) => {
                ComentariosDoPost()
                reset()
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
        
    }
    let lista = comentarios.map((comentario) => 
        <ListaComentarios key={comentario.id} texto={comentario.texto} nome={comentario.nome_usuario}></ListaComentarios>
    )
    return(
        
        <div className="container-comentarios">
            {lista}
            <form className="comentar" onSubmit={handleSubmit(adicionarComentario)}>
                <input className="comentarTexto" type="text"  {...register('texto')}/>    
                <button className="comentarBotao">Comentar</button>
            </form>
        </div>
    )
}