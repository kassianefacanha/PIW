import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../App'
import { ListarPostId } from '../../../api/api'
import { PerfilPost } from './Perfil';
import "./Perfil.css";

export function ListId(){
    const {auth} = useContext(AuthContext);
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
            ListarPostId(auth.token, auth.id_user).then(
                (response) => {
                    setPosts(response.data);
                    console.log(response.data)
                } 
            ).catch(
                (error => {
                    console.log(error);
                })
            )
            // eslint-disable-next-line
        }, [] 
    )

    const listaPosts = posts.map((post) =>
        <PerfilPost
        id={post.id} 
        user={post.nome_usuario} 
        texto={post.texto} 
        likes={post.likes} 
        ></PerfilPost>
    )

    return (
        <div className="perfil">
            {listaPosts}
        </div>
    )

}