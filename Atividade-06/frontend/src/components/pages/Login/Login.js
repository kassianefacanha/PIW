import { Navegador } from "../../commom/Navegador/Navegador";
import { FormLogin } from "./FormLogin";
import { Rodape } from "../../commom/Rodape/Rodape"
import "./Login.css"


export function PageLogin(){
    return(
        <div className="pagina-login">
            <Navegador></Navegador>
            <FormLogin></FormLogin>
            <Rodape></Rodape>
        </div>
    )
}