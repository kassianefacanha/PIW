import { useContext, useState } from 'react'
import { AuthContext } from '../../../App';
import { Comentarios } from "./Comentarios";
import "./Posts.css"

export function Post(props){
    // eslint-disable-next-line
    const {auth} = useContext(AuthContext)
    const [count, setCount] = useState(0);
    const clickButton = () => {
        setCount(count + 1)
    }

    return(
        <div className="bloco">
            <div className="post">
            <p className="title">Postagem</p>
                <div className="user">
                   --- {props.user}
                </div>
                <div className="text">
                    <br></br>
                   <p className="text2"> {props.texto} </p>
                </div>
                <div className="likes">
                    Curtidas: {props.likes}
                    <span>{count} Likes</span>
                    <button onClick={clickButton}>Curtir</button>
                </div>
            </div>          
            <div className="comentariosBloco">
                -----------------------------------------------------------------------------------------------------------------------------------
                <p className="title">Comentários</p>
                <Comentarios id={props.id} user={props.nome_usuario} texto={props.texto} likes={0}></Comentarios>
            </div>           
        </div>
        
        
    )
}