import { Student } from "phosphor-react";
import { HeaderContainer, NavLink } from "./styele";
import { Link} from "react-router-dom"

export function  Header() {
  return (  
    <>
      <HeaderContainer>
          <div>
              <Student size={50}/>
          </div>
          <NavLink>
              <ul>
                    <li><Link to="">INÍCIO</Link></li>
                    <li><Link to="">SOBRE NÓS</Link></li>
                    <li><Link to="">FALA CONNOSCO</Link></li>
                    <li><Link to="">CONTANTOS</Link></li>
                    <li><Link to="">SINGIN</Link></li>
              </ul>
          </NavLink>
      </HeaderContainer>
    </>
  )
}