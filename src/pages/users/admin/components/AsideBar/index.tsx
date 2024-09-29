import { Link } from "react-router-dom";
import { AsidePerfilContainer , NavLink, Avatar} from "./style";
import  foto from  "../../../../../assets/image/jose.jpg"

export function  AsidePerfil(){
  return (
    <AsidePerfilContainer>
            <Avatar>
                <img src= {foto} />
            </Avatar>
             <NavLink>
                <ul>
                  <li><Link to={'/admin'}>Home</Link></li>
                  <li><Link to={'/cadastro_aluno'}>Cadastro aluno</Link></li>
                  <li><Link to={'/perfil'}>Perfil</Link></li>
                  <li><Link to={'/'}>Sair</Link></li>
                </ul>
             </NavLink>
    </AsidePerfilContainer>
  )
}