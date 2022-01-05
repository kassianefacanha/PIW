import { Navegador } from "../../commom/Navegador/Navegador";
import { Perfil } from "./Perfil";
import { Rodape } from "../../commom/Rodape/Rodape"

export function PagePerfil(){
    return(
        <div>
            <Navegador></Navegador>
            <Perfil></Perfil>
            <Rodape></Rodape>
        </div>
    )
}