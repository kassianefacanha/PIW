import { Navegador } from "../../commom/Navegador/Navegador";
import { Feed } from "../LinhaDoTempo/LinhaDoTempo";
import { Rodape } from "../../commom/Rodape/Rodape"

export function PaginaPrincipal(){
    return(
        <div>
            <Navegador></Navegador>
            <Feed></Feed>
            <Rodape></Rodape>
        </div>
    )
}