import { useContext } from "react"
import { useForm } from "react-hook-form"
import { CriarPost } from "../../../api/api"
import { AuthContext } from '../../../App'
import history from "../../../history"


export function FormPostar(){
    const { auth } = useContext(AuthContext)
    const { register, handleSubmit } = useForm()

    function publicarPost(post){
       CriarPost(auth.token, post).then((response) => {
            history.push("/")
        }).catch((error) => {

            console.log(error)
        })
        
    }
    return(
        <form className="form" onSubmit={handleSubmit(publicarPost)}>
            <p className="title">Publique seu Post</p>
            <textarea type="text" className="texto" placeholder="O que deseja publicar?" likes= "0" {...register('texto')}/>
            <input type="submit" className="botao" value="Publicar"/>
        </form>
    )
}
