/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Navegador.css";
import { Link , Outlet} from "react-router-dom";
import Img from "../../img/logo.png"

export function Navegador(){
    // const Botao = (props) => (
    //     <a href="#" id="Botao"className={props.botaoClass}>{props.nomeBotao}</a>
    // ) 
    // const Nome = (props) => (
    //     <a href="#" id="Nome"className={props.NomeClass}>{props.nomeNome}</a>
    // )

    return(            
        <nav class="navegador">
            <img src={Img} alt="Logo"></img>
            <Link className="botao-nav" to="/">
                    Feed
            </Link>
            <Link className="botao-nav" to="post">
                    Postar
            </Link>
            <Link className="botao-nav" to="perfil">
                    Perfil
            </Link>
            {/* <Botao nomeBotao="Linha do Tempo" botaoClass="botao-Linha-do-Tempo" ></Botao>
            <Botao nomeBotao="Postar" botaoClass="botao-Postar"></Botao>
            <Nome nomeNome="Kassiane" NomeClass="NomeC"></Nome> */}
            <Outlet />
        </nav>
    )
}