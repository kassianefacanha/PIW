import {Post} from "../Posts/Posts"
import "./LinhaDoTempo.css"

export function Feed(){
    let posts = {
        postsList: [
            {
                id: "1",
                texto: "Eu sempre acreditei que a moda não é um mero instrumento que embeleza as mulheres, mas algo que as assegura, que lhes transmite confiança. ",
                likes: "300",
                usuario: "Yves Saint-Laurent"
            },
            {
                id: "2",
                texto: "Vista-se mal e notarão o vestido. Vista-se bem e notarão a mulher.",
                likes: "150",
                usuario: "Coco Chanel"
            },
            {
                id: "3",
                texto: "Estilo é usar um vestido de festa para ir ao McDonald’s e salto alto para jogar futebol. É personalidade, confiança e sedução.",
                likes: "900",
                usuario: "John Galliano"
            },
            {
                id: "4",
                texto: "Não deixe a moda possuir você, mas decida o que você é e o que você deseja expressar pela maneira como você se veste ou pelo jeito que você vive.",
                likes: "800",
                usuario: "Gianni Versace"
            }
        ]
    }
    let listaPosts = posts.postsList.map((post) => 
     <Post id={post.id} usuario={post.usuario} texto={post.texto} likes={post.likes}></Post>
    )

    return (
        <div className="feed">
            {listaPosts}
        </div>
    )

}