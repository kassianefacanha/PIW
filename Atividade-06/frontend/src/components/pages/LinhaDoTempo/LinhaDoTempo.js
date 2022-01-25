import { useContext, useEffect, useState } from 'react'
import {Post} from "../Posts/Posts"
import { AuthContext } from '../../../App'
import { ListarPosts } from '../../../api/api'
import "./LinhaDoTempo.css"

export function Feed(){
    const {auth} = useContext(AuthContext);
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
            ListarPosts(auth.token).then(
                (response) => {
                    setPosts(response.data);
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
        <Post 
        id={post.id} 
        user={post.nome_usuario} 
        texto={post.texto} 
        likes={post.likes} 
        comentarios={post.comentarios}></Post>

    )

    return (
        <div className="feed">
            {listaPosts}
        </div>
    )

}