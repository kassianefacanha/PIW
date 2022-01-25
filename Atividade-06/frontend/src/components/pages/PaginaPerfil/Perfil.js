/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Perfil.css";

export function Perfil(props){
    return(
        <nav className="Perfil">
            <div className="textoPerfil" >
            <p className="titlePeril">Seja Bem Vindo(a) a seu Perfil</p>
                <table>
                    <tr className="blocoPerfil">
                        <td className="title">Usuário:</td>
                        <td>{props.nome}</td>
                    </tr>
                    <tr className="blocoEmail">
                        <td className="title">Email:</td>
                        <td>{props.email}</td>
                    </tr>
                </table>
              
            </div>
        </nav>
    )
}

export function PerfilPost(props){
    return(
    <div className="bloco">
        <div className="post">
        <p className="title">Postagem</p>
            <div className="text">
                <br></br>
               <p className="text2"> {props.texto} </p>
            </div>
            <div className="likes">
                Curtidas: {props.likes}
                <span> Likes</span>
            </div>
        </div>          
   </div>
    )
}