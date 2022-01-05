import "./Posts.css"

export function Post(props){
    return(
        <div className="bloco">
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
            <div className="comentariosBloco">
                -----------------------------------------------------------------------------------------------------------------------------------
                <p className="title">Comentários</p>
                <div className="comentarios">
                    <div className="comentario">
                        <div className="userComent">-@usuario1</div> 
                        <div className="textoComent">
                            Top demais!
                        </div>
                    </div>
                    <div className="comentario">
                        <div className="userComent">-@usuario2</div> 
                        <div className="textoComent">
                            Show de bola!
                        </div>
                    </div>
                    <div className="comentario">
                        <div className="userComent">-@usuario3</div> 
                        <div className="textoComent">
                            Muito bom!!
                        </div>
                    </div>
                    <div className="formComentar">
                        <input className="comentarTexto" placeholder="Escreva um comentário"/>
                        <input className="comentarBotao" type="submit" value="Comentar"/>
                    </div>
                </div>              
            </div>           
        </div>
        
        
    )
}