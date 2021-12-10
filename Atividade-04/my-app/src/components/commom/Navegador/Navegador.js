/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Navegador.css";
import Img from "../../img/logo.png"

export function Navegador(){
    const Botao = (props) => (
        <a href="#" id="Botao"className={props.botaoClass}>{props.nomeBotao}</a>
    ) 
    const Nome = (props) => (
        <a href="#" id="Nome"className={props.NomeClass}>{props.nomeNome}</a>
    )

    return(            
        <nav class="navegador">
            <img src={Img} alt="Logo"></img>
            <Botao nomeBotao="Linha do Tempo" botaoClass="botao-Linha-do-Tempo" ></Botao>
            <Botao nomeBotao="Postar" botaoClass="botao-Postar"></Botao>
            <Nome nomeNome="Kassiane" NomeClass="NomeC"></Nome>
        </nav>
    )
}