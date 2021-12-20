import {Post} from "../Posts/Posts"
import "./LinhaDoTempo.css"

export function Feed(){
    let posts = {
        postsList: [
            {
                id: "1",
                texto: "Lorem ipsum vivamus nunc porta vestibulum sit neque aenean ornare at nisi nisl etiam justo, velit dapibus inceptos egestas placerat eu proin magna nibh dictum sapien amet. vulputate magna aliquet pharetra lobortis hac sapien eros amet, aliquam tortor aliquet augue cras praesent auctor, senectus cras tempus feugiat aliquam vivamus cubilia. ",
                likes: "120",
                user: "Kassiane"
            },
            {
                id: "2",
                texto: "Lorem ipsum vivamus nunc porta vestibulum sit neque aenean ornare at nisi nisl etiam justo, velit dapibus inceptos egestas placerat eu proin magna nibh dictum sapien amet. vulputate magna aliquet pharetra lobortis hac sapien eros amet, aliquam tortor aliquet augue cras praesent auctor, senectus cras tempus feugiat aliquam vivamus cubilia. ",
                likes: "270",
                user: "Vitor"
            },
            {
                id: "3",
                texto: "Lorem ipsum vivamus nunc porta vestibulum sit neque aenean ornare at nisi nisl etiam justo, velit dapibus inceptos egestas placerat eu proin magna nibh dictum sapien amet. vulputate magna aliquet pharetra lobortis hac sapien eros amet, aliquam tortor aliquet augue cras praesent auctor, senectus cras tempus feugiat aliquam vivamus cubilia. ",
                likes: "700",
                user: "Lorena"
            },
            {
                id: "4",
                texto: "Lorem ipsum vivamus nunc porta vestibulum sit neque aenean ornare at nisi nisl etiam justo, velit dapibus inceptos egestas placerat eu proin magna nibh dictum sapien amet. vulputate magna aliquet pharetra lobortis hac sapien eros amet, aliquam tortor aliquet augue cras praesent auctor, senectus cras tempus feugiat aliquam vivamus cubilia. ",
                likes: "700",
                user: "Marisa"
            },
            {
                id: "5",
                texto: "Lorem ipsum vivamus nunc porta vestibulum sit neque aenean ornare at nisi nisl etiam justo, velit dapibus inceptos egestas placerat eu proin magna nibh dictum sapien amet. vulputate magna aliquet pharetra lobortis hac sapien eros amet, aliquam tortor aliquet augue cras praesent auctor, senectus cras tempus feugiat aliquam vivamus cubilia. ",
                likes: "1000",
                user: "Késsia"
            }
        ]
    }
    let listaPosts = posts.postsList.map((post) =>
        <Post id={post.id} user={post.user} texto={post.texto} likes={post.likes}></Post>
    )

    return (
        <div className="feed">
            {listaPosts}
        </div>
    )

}