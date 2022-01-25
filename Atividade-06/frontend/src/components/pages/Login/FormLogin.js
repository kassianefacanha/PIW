import history from "../../../history"
import { useForm } from "react-hook-form";
import { LoginUser } from "../../../api/api";
import { useContext } from "react";
import { AuthContext } from "../../../App"

export function FormLogin(){
    const {register, handleSubmit} = useForm();
    const auth = useContext(AuthContext);
    const submeter = (login_data) =>{
        LoginUser(login_data).then((response)=>{
            auth.setAuth({token: response.data.token, nome: response.data.nome, id_user: response.data.id});
            console.log(response.data)
            history.push("/");
        }).catch((error)=>{
            console.log(error)
        })
    }
    return(
        <div className="formLogin">
            <p className="title">Login</p>
            <form onSubmit={handleSubmit(submeter)}>
            <input type="email"  className="texto" placeholder="usuario@email.com" {...register('email')}/>
            <input type="password"  className="texto" placeholder="senha" {...register('senha')}/>
            <input type="submit" className="botao-publicar" value="Entrar"/>
        </form>
        </div>
    )
}