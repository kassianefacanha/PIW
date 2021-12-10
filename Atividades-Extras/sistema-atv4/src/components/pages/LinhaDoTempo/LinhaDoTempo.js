import {Post} from "../Posts/Posts"
import "./LinhaDoTempo.css"

export function Feed(){
    let posts = {
        postsList: [
            {
                id: "1",
                texto: "A vida é uma tempestade (...) Um dia você está tomando sol e no dia seguinte o mar te lança contra as rochas. O que faz de você um homem é o que você faz quando a tempestade vem.",
                likes: "800",
                usuario: "O Conde de Monte Cristo, Alexandre Dumas"
            },
            {
                id: "2",
                texto: "As coisas têm vida própria. Tudo é questão de despertar a sua alma.",
                likes: "750",
                usuario: "Cem Anos de Solidão, Gabriel García Márquez"
            },
            {
                id: "3",
                texto: "O amor é a força mais poderosa do universo e quando duas pessoas se amam, nem a distância nem o tempo podem separá-las.",
                likes: "800",
                usuario: "O Melhor de Mim, Nicholas Sparks"
            },
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