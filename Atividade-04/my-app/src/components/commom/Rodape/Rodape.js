/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Rodape.css";
import Img from "../../img/logo.png"

export function Rodape(){
   return (
       <footer className="rodape">
           <div >
           
           <img class="logotipo" src={Img} alt="Logo"></img><br/>
           <h1 class="titulo">SUA REDE SOCIAL</h1>
            </div>
            {/* <nav class="redes">
                <ul>
                    <li><a href="#" target="_blank"><img src={Img} alt="Nosso Facebook"/></a></li>
                    <li><a href="#" target="_blank"><img src={Img} alt="Nosso Google plus"/></a></li>
                    <li><a href="#" target="_blank"><img src={Img} alt="Canal no YouTube"/></a></li>
                    <li><a href="#" target="_blank"><img src={Img} alt="Perfil no Instagram"/></a></li>
                    <li><a href="#" target="_blank"><img src={Img} alt="Perfil no Twitter"/></a></li>
               </ul>
            </nav> */}
       </footer>
   ) 
}
