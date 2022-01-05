import history from "../../../history"


export function FormPostar(){
    function publicarPost(){
        history.push("/")
    }
    return(
        <form className="form">
            <p className="title">Publique seu Post</p>
            <textarea type="text" className="texto" placeholder="O que deseja publicar? "/>
            <input type="submit" className="botao" onClick={publicarPost} value="Publicar"/>
        </form>
    )
}
