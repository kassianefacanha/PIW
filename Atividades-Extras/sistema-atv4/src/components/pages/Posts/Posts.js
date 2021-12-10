import "./Posts.css"

export function Post(props){
    return(
        <div className="post">
             <table>
            <tr>
                <td>
                    {props.usuario}
    
                </td> 
            </tr>
            <tr>
                <td>
                    {props.texto}
                </td> 
            </tr>
            <tr>
                <td>
                    Likes: {props.likes}
                    <button>Like</button>
                 
                </td> 
            </tr>
          
        </table>
        </div>
       
    )
}