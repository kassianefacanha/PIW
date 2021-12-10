import "./Posts.css"

export function Post(props){
    return(
        <div className="post">
            <p className="usuario">
               - {props.usuario}
            </p>
            <p className="texto">
                {props.texto}
            </p>
            <p className="likes">
                Like: {props.likes}
            </p>
            <p className="bt-like">
                <button>Curtir</button>
            </p>
        </div>
    )
}