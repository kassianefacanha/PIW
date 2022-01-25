/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Navegador.css";
import { NavLink } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../../../App'
import Img from "../../img/logo.png"

function NavegadorNaoLogado(){
    return(            
        <nav className="navegador">
            <NavLink  className="botao-nav" to="/cadastro">
                    Cadastre-se
            </NavLink>
            <NavLink  className="botao-nav" to="/login">
                    Login
            </NavLink>
        </nav>
    )
}
function NavegadorLogado(){
    const { setAuth } = useContext(AuthContext)
    return(            
        <nav className="navegador">
            <img src={Img} alt="Logo"></img>
            <NavLink className="botao-nav" to="/perfil">
                   Perfil
            </NavLink>
            <NavLink  className="botao-nav" to="/">
                Linha do Tempo
            </NavLink >
            <NavLink  className="botao-nav" to="/posts">
                    Postar
            </NavLink >
            <NavLink  className="botao-nav" to="/" onClick={() => { setAuth({ token: null, nome: null })}}>
                    Logout
            </NavLink>
        </nav>
    )
}

export function Navegador(){
    const {auth} = useContext(AuthContext);

    return (
        <div>
            {
                auth.token == null || auth.token === "null" ? <NavegadorNaoLogado/> : <NavegadorLogado />
            }
        </div>
    )
    
}