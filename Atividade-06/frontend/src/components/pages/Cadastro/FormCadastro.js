import { useForm } from "react-hook-form";
import { CadastroUser } from "../../../api/api";
import history from "../../../history"

export function FormCadastro(){
    const { register, handleSubmit } = useForm();
    const submeter = (usuario) => {
        CadastroUser(usuario).then((response) => {
            console.log(response);
            history.push("/login");
        }).catch((error) => {
            console.log(error);
        })
    };
    return(
        <div className="formCadastro" >
            <p className="title">Cadastro</p>
            <form onSubmit={handleSubmit(submeter)}>
                <input type="text" name="nome" className="texto" nomplaceholder="Nome" {...register('nome')}/>
                <input type="email" name="email" className="texto" placeholder="usuario@email.com" {...register('email')}/>
                <input type="password" name="senha" className="texto" placeholder="senha" {...register('senha')}/>
                <input type="submit" className="botao-publicar" value="submeter"/>
            </form>
        </div>
    )
}