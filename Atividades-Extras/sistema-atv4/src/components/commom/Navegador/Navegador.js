/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Navegador.css";
import Img from "../../../logo.png"

export function Navegador(){
    return(            
        <nav class="navegador">
            <table>
                <tr>
                    <th><img src={Img} alt="Logo"/></th>
                    <td><a href="#">Linha do Tempo</a></td>
                    <td><a href="#">Postar</a></td>
                    <td><a href="#">Thamires</a></td>
                </tr>
            </table>
            
        </nav>
    )
}