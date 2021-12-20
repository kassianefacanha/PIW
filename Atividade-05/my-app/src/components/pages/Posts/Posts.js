import "./Posts.css"

export function Post(props){
    return(
        <div className="post">
            <div className="user">
                {props.user}
            </div>
            <div className="texto">
                {props.texto}
            </div>
            <div className="likes">
                Curtidas: {props.likes}
                <button>Curtir</button>
            </div>
        </div>
    )
}