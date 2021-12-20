import { Navegador } from "../../commom/Navegador/Navegador";
import { Rodape } from "../../commom/Rodape/Rodape"

import history from "../../../history"
import "./PagePost.css"

  
export function PagePosts(){
    function publicarPost(){
        history.push("/")
    }
    return (
        <div className="pagina-post">
            <Navegador />
            <form className="form">
                <textarea type="text" className="texto" placeholder="O que deseja publicar? "/>
                <input type="submit" className="botao-publicar" onClick={publicarPost} value="Publicar"/>
            </form>
            <Rodape></Rodape>
        </div>
    )
}