/* eslint-disable jsx-a11y/anchor-is-valid */
import Img1 from "../../../components/img/perfil.PNG"
import "./Perfil.css";

export function Perfil(){
    return(
        <nav className="Perfil">
            <div className="fotoPerfil">
                <img className="fotoPerfil" src={Img1} alt="img1" />
            </div>
            <div className="textoPerfil" >
                <table>
                    <tr className="blocoPerfil">
                        <td className="title">Usuário:</td>
                        <td>Kassiane</td>
                    </tr>
                    <tr className="blocoEmail">
                        <td className="title">Email:</td>
                        <td>Kassianefacanha@gmail.com</td>
                    </tr>
                    <tr className="blocoSobre">
                        <td className="title">Sobre mim:</td>
                        <td>texto texto texto texto texto texo texto texto texto texo texto texto texto texto texto textotexto texto texto texto texo texto texto texto texto texto texto texto texo texto textotexto texto texto texto texto texo texto textotexto texto texto texto texto texo texto texto</td>
                    </tr>
                </table>
              
            </div>
        </nav>
    )
}
