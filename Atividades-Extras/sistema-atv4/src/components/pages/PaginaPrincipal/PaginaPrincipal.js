import { Navegador } from "../../commom/Navegador/Navegador";
import { Feed } from "../LinhaDoTempo/LinhaDoTempo";

export function PaginaPrincipal(){
    return(
        <div>
            <Navegador></Navegador>
            <Feed></Feed>
        </div>
    )
}