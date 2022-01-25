import { Navegador } from "../../commom/Navegador/Navegador";
import { Perfildados} from "./Perfildados";
import { ListId } from "./PerfilPost";
import { Rodape } from "../../commom/Rodape/Rodape"

export function PagePerfil(){
    return(
        <div>
            <Navegador></Navegador>
            <Perfildados/>
            <p className="titlePeril">Suas postagens</p>
            <ListId/>
            <Rodape></Rodape>
        </div>
    )
}