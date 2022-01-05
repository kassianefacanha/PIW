import { Navegador } from "../../commom/Navegador/Navegador";
import { FormPostar } from "./FormPostar";
import { Rodape } from "../../commom/Rodape/Rodape"


import "./PagePost.css"

  
export function PagePosts(){
    return (
        <div className="paginaPost">
            <Navegador />
            <FormPostar/>
            <Rodape/>
        </div>
    )
}