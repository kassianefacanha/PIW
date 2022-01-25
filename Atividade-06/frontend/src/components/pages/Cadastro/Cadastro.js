import { Navegador } from "../../commom/Navegador/Navegador";
import { FormCadastro } from "./FormCadastro";
import { Rodape } from "../../commom/Rodape/Rodape"
import "./Cadastro.css";


export function PageCadastro(){
    return(
        <div className="pagina-cadastro">
            <Navegador></Navegador>
            <FormCadastro></FormCadastro>
            <Rodape></Rodape>
        </div>
    )
}