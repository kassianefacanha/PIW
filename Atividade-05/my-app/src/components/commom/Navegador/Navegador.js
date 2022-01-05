/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Navegador.css";
import { NavLink } from "react-router-dom";
import Img from "../../img/logo.png"

export function Navegador(){
    return(            
        <nav className="navegador">
            <img src={Img} alt="Logo"></img>
            <NavLink exact className="botao-nav" to="/">
                Linha do Tempo
            </NavLink >
            <NavLink className="botao-nav" to="/posts">
                    Postar
            </NavLink >
            <NavLink className="botao-nav" to="/perfil">
                    Perfil
            </NavLink >
        </nav>
    )
}