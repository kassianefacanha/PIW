import { useContext, useEffect, useState } from 'react'
import {Perfil} from "./Perfil"
import { AuthContext } from '../../../App'
import { ListarUserId } from '../../../api/api'

export function Perfildados(){
    const {auth} = useContext(AuthContext);
    const [posts, setPosts] = useState([]);
    const id_user = auth.id_user;

    useEffect(()=>{
            ListarUserId(auth.token, id_user).then(
                (response) => {
                    console.log(response.data)
                    setPosts([response.data]);
                } 
            ).catch(
                (error => {
                    console.log(error);
                })
            )
            // eslint-disable-next-line
        }, [] 
    )

    const Perfilis = posts.map((post) =>
    <Perfil
    nome={post.nome} 
    email={post.email}></Perfil>

)

    return (
        <div className="perfil">
            {Perfilis}
        </div>
    )
}