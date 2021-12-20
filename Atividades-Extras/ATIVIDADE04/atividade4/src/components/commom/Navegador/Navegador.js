/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Navegador.css";
import Img from "../Imagens/logo.png"

export function Navegador(){
    return(            
        <nav class="navegador">
            <img src={Img} alt="Logo"></img>
            <a href="#" className="bt1">Linha do Tempo</a>
            <a href="#" className="bt2">Postar</a>
            <a href="#" className="bt3">Lorena</a>
        </nav>
    )
}